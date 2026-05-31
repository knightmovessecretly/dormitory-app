import { useState } from "react";
import axios from "axios";

export default function BedReservation() {
  const [room, setRoom] = useState("");
  const [bed, setBed] = useState("");

  const submitRequest = async () => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/user/bed-request",
      { room_number: room, bed_number: bed },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("Request sent!");
  };

  return (
    <div>
      <h2>Bed Reservation</h2>

      <input placeholder="Room Number" onChange={(e) => setRoom(e.target.value)} />
      <input placeholder="Bed Number" onChange={(e) => setBed(e.target.value)} />

      <button onClick={submitRequest}>Submit</button>
    </div>
  );
}