import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  const token = localStorage.getItem("token");


const fetchRequests = useCallback(async () => {
    const res = await axios.get("http://localhost:5000/api/admin/requests", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setRequests(res.data);
  });

  const approve = async (id) => {
    await axios.put(
      `http://localhost:5000/api/admin/approve/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Admin Dashboardssss</h2>

      {requests.map((r) => (
        <div key={r.id}>
          <p>
            Room {r.room_number} - Bed {r.bed_number} - {r.status}
          </p>

          <button onClick={() => approve(r.id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}