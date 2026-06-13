import { useEffect, useState, useMemo } from "react";
import axios from "axios";

import config from "../config";
const { API_URL, BASE_URL } = config;


export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [search, setSearch] = useState("");
  const [roomType, setRoomType] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}rooms`);
      setRooms(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.log(err);
      setRooms([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const updateOccupied = async (roomId, newValue) => {
    try {
      await axios.put(`${API_URL}rooms/${roomId}`, {
        occupied_beds: newValue,
      });

      fetchRooms();
    } catch (err) {
      console.log(err);
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
    const occupied = rooms.reduce(
      (a, r) => a + (r.occupied_beds || 0),
      0
    );
    const available = totalBeds - occupied;
    const occupancyRate = totalBeds ? (occupied / totalBeds) * 100 : 0;

    return { totalBeds, occupied, available, occupancyRate };
  }, [rooms]);

  return (
    <div
      className="min-h-screen text-slate-800"
      style={{
        background:
          "linear-gradient(to right, #f9c2c2 0%, #ffe3e3 40%, #ffffff 100%)",
      }}
    >
      {/* HEADER */}
      <div className="text-center py-14 px-4">
        <h1 className="text-4xl font-bold text-slate-900">
          Room Inventory Dashboard
        </h1>
        <p className="text-slate-600 mt-2">
          Live overview of dormitory occupancy
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="max-w-6xl mx-auto px-6 mb-10 grid grid-cols-1 md:grid-cols-4 gap-5">
        {[
          {
            label: "Total Beds",
            value: stats.totalBeds,
            color: "text-slate-800",
          },
          {
            label: "Occupied",
            value: stats.occupied,
            color: "text-pink-500",
          },
          {
            label: "Available",
            value: stats.available,
            color: "text-green-500",
          },
          {
            label: "Occupancy",
            value: `${stats.occupancyRate.toFixed(1)}%`,
            color: "text-blue-500",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="
              bg-white/70
              backdrop-blur-xl
              border border-gray-200
              rounded-3xl
              p-6
              shadow-md
            "
          >
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className={`text-2xl font-bold mt-2 ${s.color}`}>
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* FILTER BAR */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row gap-4 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-5 shadow-md">
          <input
            className="flex-1 px-4 py-3 rounded-2xl bg-white/80 border border-gray-200 focus:ring-2 focus:ring-pink-200 outline-none"
            placeholder="Search room number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-4 py-3 rounded-2xl bg-white/80 border border-gray-200 focus:ring-2 focus:ring-pink-200 outline-none"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">All Room Types</option>
            <option value="Solo Room">Solo Room</option>
            <option value="Double/Twin Sharing">Double/Twin Sharing</option>
            <option value="Triple Sharing">Triple Sharing</option>
            <option value="Quad Room">Quad Room</option>
          </select>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {loading ? (
          <div className="text-center text-slate-500">
            Loading rooms...
          </div>
        ) : filteredRooms.length === 0 ? (
          <div className="text-center text-slate-500">
            No rooms found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => {
              const available =
                room.total_beds - room.occupied_beds;

              return (
                <div
                  key={room.id}
                  className="
                    bg-white/70
                    backdrop-blur-xl
                    border border-gray-200
                    rounded-3xl
                    p-6
                    shadow-md
                    hover:shadow-lg
                    transition
                  "
                >
                  {/* HEADER */}
                  <div className="flex justify-between mb-3">
                    <h3 className="font-bold text-slate-900">
                      Room {room.room_number}
                    </h3>

                    <span
                      className={`px-3 py-1 text-xs rounded-full font-semibold ${
                        available === 0
                          ? "bg-red-100 text-red-500"
                          : "bg-green-100 text-green-500"
                      }`}
                    >
                      {available === 0 ? "Full" : "Available"}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-4">
                    {room.room_type}
                  </p>

                  {/* MINI STATS */}
                  <div className="grid grid-cols-3 text-center mb-5">
                    <div>
                      <p className="text-xs text-slate-400">Total</p>
                      <p className="font-semibold">
                        {room.total_beds}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">
                        Occupied
                      </p>
                      <p className="font-semibold text-pink-500">
                        {room.occupied_beds}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">
                        Available
                      </p>
                      <p className="font-semibold text-green-500">
                        {available}
                      </p>
                    </div>
                  </div>

                  {/* CONTROLS */}
                  <div className="flex items-center justify-between bg-white/60 border border-gray-200 rounded-2xl p-2">
                    <button
                      className="w-10 h-10 rounded-xl bg-red-100 text-red-500 disabled:opacity-40"
                      disabled={room.occupied_beds <= 0}
                      onClick={() =>
                        updateOccupied(
                          room.id,
                          room.occupied_beds - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span className="font-bold text-slate-800">
                      {room.occupied_beds}
                    </span>

                    <button
                      className="w-10 h-10 rounded-xl bg-green-100 text-green-500 disabled:opacity-40"
                      disabled={
                        room.occupied_beds >= room.total_beds
                      }
                      onClick={() =>
                        updateOccupied(
                          room.id,
                          room.occupied_beds + 1
                        )
                      }
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
    </div>
  );
}