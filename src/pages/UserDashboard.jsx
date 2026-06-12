import { useEffect, useState } from "react";
import axios from "axios";

export default function UserDashboard() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedBed, setSelectedBed] = useState("");
  const [requests, setRequests] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchRooms();
    fetchRequests();
  }, []);

  const fetchRooms = async () => {
    const res = await axios.get("http://localhost:5000/api/bed-requests/available");
    setRooms(res.data);
  };

  const fetchRequests = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/bed-requests/my-requests${userId}`
    );
    setRequests(res.data);
  };

  const submitRequest = async () => {
    if (!selectedRoom || !selectedBed) {
      alert("Please select room and bed");
      return;
    }

    await axios.post("http://localhost:5000/api/requests", {
      user_id: userId,
      room_number: selectedRoom.room_number,
      bed_number: selectedBed,
    });

    alert("Booking request submitted!");
    setSelectedBed("");
    fetchRequests();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Dormitory Room Booking
        </h1>

        {/* Rooms */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Available Rooms
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => {
                  setSelectedRoom(room);
                  setSelectedBed("");
                }}
                className={`cursor-pointer border rounded-lg p-4 transition
                ${
                  selectedRoom?.id === room.id
                    ? "border-blue-500 bg-blue-50"
                    : "hover:border-blue-300"
                }`}
              >
                <h3 className="font-bold text-lg">
                  Room {room.room_number}
                </h3>
                <p className="text-gray-600">
                  {room.available_beds} Beds Available
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bed Selection */}
        {selectedRoom && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Select Bed - Room {selectedRoom.room_number}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {selectedRoom.beds.map((bed) => (
                <button
                  key={bed}
                  onClick={() => setSelectedBed(bed)}
                  className={`p-4 rounded-lg border font-medium
                  ${
                    selectedBed === bed
                      ? "bg-green-500 text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {bed}
                </button>
              ))}
            </div>

            <button
              onClick={submitRequest}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Request Booking
            </button>
          </div>
        )}

        {/* Requests */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            My Booking Requests
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Room</th>
                  <th className="p-3 text-left">Bed</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((req) => (
                  <tr
                    key={req.id}
                    className="border-t"
                  >
                    <td className="p-3">
                      {req.room_number}
                    </td>
                    <td className="p-3">
                      {req.bed_number}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm
                        ${
                          req.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : req.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="p-3">
                      {new Date(
                        req.created_at
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {requests.length === 0 && (
              <p className="text-center text-gray-500 py-6">
                No booking requests yet
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}