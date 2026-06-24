import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import config from "../config";

// --- LEXICAL IMPORTS ---
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { $getRoot } from "lexical";

const { API_URL } = config;

// --- LEXICAL ACTION TOOLBAR ---
function EditorToolbar({ onSave, isSaving }) {
  const [editor] = useLexicalComposerContext();

  const handleClear = () => {
    // FIX: Mutations safely wrapped in editor.update() to prevent frozen node map error
    editor.update(() => {
      const root = $getRoot();
      root.clear();
    });
  };

  const handleSave = () => {
    const editorStateStr = JSON.stringify(editor.getEditorState().toJSON());
    onSave(editorStateStr);
  };

  return (
    <div className="flex gap-2 mb-2 p-2 bg-slate-100 rounded-t-xl border-b border-gray-200">
      <button
        type="button"
        onClick={handleClear}
        className="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded transition"
      >
        Clear Notes
      </button>
      <button
        type="button"
        onClick={handleSave}
        disabled={isSaving}
        className="px-3 py-1 text-xs bg-pink-500 hover:bg-pink-600 text-white rounded transition disabled:opacity-50"
      >
        {isSaving ? "Saving..." : "Save Notes"}
      </button>
    </div>
  );
}

// --- MAIN ROOMS PAGE COMPONENT ---
export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState("");
  const [roomType, setRoomType] = useState("");
  const [loading, setLoading] = useState(true);
  const [savingNotes, setSavingNotes] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Lexical Configuration
  const initialConfig = {
    namespace: "RoomsPageEditor",
    theme: {
      paragraph: "text-slate-600 text-sm",
    },
    onError: (error) => console.error("Lexical Error:", error),
  };

  // FETCH ALL ROOMS
  const fetchRooms = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}rooms`); // Fixed absolute slash path
      setRooms(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching rooms:", err);
      setRooms([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // UPDATE OCCUPIED BEDS (Optimistic State Update)
  const updateOccupied = async (roomId, newValue) => {
    try {
      await axios.put(`${API_URL}rooms/${roomId}`, { // Fixed absolute slash path
        occupied_beds: newValue,
      });

      // Optimistically update local UI state immediately
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.id === roomId ? { ...room, occupied_beds: newValue } : room
        )
      );

      // Keep selected panel data perfectly synchronized if open
      if (selectedRoom && selectedRoom.id === roomId) {
        setSelectedRoom(prev => ({ ...prev, occupied_beds: newValue }));
      }
    } catch (err) {
      console.error("Error updating occupied beds:", err);
      fetchRooms(); // Fallback on network/validation errors
    }
  };

  // SAVE NOTES FROM PANEL
  const handleSaveNotes = async (editorStateJson) => {
    if (!selectedRoom) return;
    try {
      setSavingNotes(true);
      await axios.put(`${API_URL}rooms/${selectedRoom.id}/notes`, {
        notes: editorStateJson,
      });
      alert(`Notes for Room ${selectedRoom.room_number} saved!`);
    } catch (err) {
      console.error("Error saving notes:", err);
      alert("Failed to save room notes.");
    } finally {
      setSavingNotes(false);
    }
  };

  // FILTERED ROOMS
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchSearch = String(room.room_number || "")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchType = roomType === "" || room.room_type === roomType;

      return matchSearch && matchType;
    });
  }, [rooms, search, roomType]);

  // DASHBOARD STATS
  const stats = useMemo(() => {
    const totalBeds = rooms.reduce((a, r) => a + (r.total_beds || 0), 0);
    const occupied = rooms.reduce((a, r) => a + (r.occupied_beds || 0), 0);
    const available = totalBeds - occupied;
    const occupancyRate = totalBeds ? (occupied / totalBeds) * 100 : 0;

    return { totalBeds, occupied, available, occupancyRate };
  }, [rooms]);

  return (
    <div
      className="min-h-screen text-slate-800"
      style={{
        background: "linear-gradient(to right, #f9c2c2 0%, #ffe3e3 40%, #ffffff 100%)",
      }}
    >
      {/* HEADER */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-slate-900">Room Inventory Dashboard</h1>
        <p className="text-slate-600 mt-2">Live overview of dormitory occupancy</p>
      </div>

      {/* STATS CARDS */}
      <div className="max-w-7xl mx-auto px-6 mb-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        {[
          { label: "Total Beds", value: stats.totalBeds, color: "text-slate-800" },
          { label: "Occupied", value: stats.occupied, color: "text-pink-500" },
          { label: "Available", value: stats.available, color: "text-green-500" },
          { label: "Occupancy", value: `${stats.occupancyRate.toFixed(1)}%`, color: "text-blue-500" },
        ].map((s, i) => (
          <div key={i} className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-md">
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className={`text-2xl font-bold mt-2 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* FILTER BAR */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-4 shadow-md">
          <input
            className="flex-1 px-4 py-3 rounded-2xl bg-white/80 border border-gray-200 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
            placeholder="Search room number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-4 py-3 rounded-2xl bg-white/80 border border-gray-200 focus:ring-2 focus:ring-pink-200 outline-none text-sm"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">All Room Types</option>
            <option value="Solo Room">Solo Room</option>
            <option value="Double/Twin">Double/Twin</option>
            <option value="Triple Sharing">Triple Sharing</option>
            <option value="Quad Room">Quad Room</option>
          </select>
        </div>
      </div>

      {/* MAIN TWO-COLUMN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COMPONENT: ROOM CARDS (Spans 2 columns) */}
        <div className="lg:col-span-2">
          {loading ? (
            <div className="text-center text-slate-500 py-10">Loading inventory data...</div>
          ) : filteredRooms.length === 0 ? (
            <div className="text-center text-slate-500 py-10">No rooms match your filter parameters.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRooms.map((room) => {
                const availableBeds = room.total_beds - room.occupied_beds;
                const isSelected = selectedRoom?.id === room.id;

                return (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`bg-white/70 backdrop-blur-xl border rounded-3xl p-6 shadow-md hover:shadow-lg cursor-pointer transition ${
                      isSelected ? "border-pink-400 ring-2 ring-pink-100 bg-white/90" : "border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between mb-3">
                      <h3 className="font-bold text-slate-900">Room {room.room_number}</h3>
                      <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                        availableBeds === 0 ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"
                      }`}>
                        {availableBeds === 0 ? "Full" : "Available"}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 mb-4">{room.room_type}</p>

                    <div className="grid grid-cols-3 text-center mb-5">
                      <div>
                        <p className="text-xs text-slate-400">Total</p>
                        <p className="font-semibold text-sm">{room.total_beds}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Occupied</p>
                        <p className="font-semibold text-sm text-pink-500">{room.occupied_beds}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Available</p>
                        <p className="font-semibold text-sm text-green-500">{availableBeds}</p>
                      </div>
                    </div>

                    {/* INTERACTIVE COUNTER CONTROLS */}
                    <div 
                      className="flex items-center justify-between bg-white/60 border border-gray-200 rounded-2xl p-2"
                      onClick={(e) => e.stopPropagation()} // Stop selection toggle when clicking buttons
                    >
                      <button
                        className="w-10 h-10 rounded-xl bg-red-100 text-red-500 disabled:opacity-40 font-bold"
                        disabled={room.occupied_beds <= 0}
                        onClick={() => updateOccupied(room.id, room.occupied_beds - 1)}
                      >
                        −
                      </button>
                      <span className="font-bold text-slate-800 text-sm">{room.occupied_beds}</span>
                      <button
                        className="w-10 h-10 rounded-xl bg-green-100 text-green-500 disabled:opacity-40 font-bold"
                        disabled={room.occupied_beds >= room.total_beds}
                        onClick={() => updateOccupied(room.id, room.occupied_beds + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* RIGHT COMPONENT: LEXICAL NOTES DISPLAY SIDEBAR */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-md h-fit">
          <h2 className="text-lg font-bold text-slate-900 mb-1">Room Logs & Directives</h2>
          <p className="text-xs text-slate-500 mb-4">
            {selectedRoom ? `Displaying logs for Room ${selectedRoom.room_number}` : "Select any room card to create or read notes."}
          </p>

          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <LexicalComposer initialConfig={initialConfig}>
              <EditorToolbar onSave={handleSaveNotes} isSaving={savingNotes} />
              <div className="relative min-h-[160px] p-4 focus:outline-none">
                <RichTextPlugin
                  contentEditable={<ContentEditable className="outline-none min-h-[140px] text-slate-700 text-sm" />}
                  placeholder={<div className="absolute top-4 left-4 text-gray-400 pointer-events-none text-xs">Add dynamic room checklists, issues, or change details...</div>}
                  ErrorBoundary={LexicalErrorBoundary}
                />
                <HistoryPlugin />
              </div>
            </LexicalComposer>
          </div>
        </div>

      </div>
    </div>
  );
}