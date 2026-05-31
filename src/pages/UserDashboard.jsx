import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function UserDashboard() {
  const { userlogged } = useAuth();
  const [user, setUser] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [availableBeds, setAvailableBeds] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadUser();
    loadBeds();
    loadRequests();
  }, []);

    const loadUser = async () => {
    try {
      const res = await axios.get("/api/user/profile");
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadBeds = async () => {
    try {
      const res = await axios.get("/api/beds/available");
      setAvailableBeds(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadRequests = async () => {
    try {
      const res = await axios.get("/api/bed-requests/my");
      setRequests(res.data);

      const notif = res.data
        .filter(
          (item) =>
            item.status === "approved" || item.status === "rejected"
        )
        .map((item) => ({
          id: item.id,
          message: `Your request for Room ${item.room_number} Bed ${item.bed_number} was ${item.status}`
        }));

      setNotifications(notif);
    } catch (err) {
      console.error(err);
    }
  };

  const bookBed = async (roomNumber, bedNumber) => {
    try {
      await axios.post("/api/bed-requests", {
        room_number: roomNumber,
        bed_number: bedNumber
      });

      alert("Booking request submitted.");
      loadRequests();
    } catch (err) {
      alert(err.response?.data?.message || "Error booking bed");
    }
  };
  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dormitory Dashboard</h2>

        <div className="d-flex gap-4">
          <div>
            🔔 {notifications.length}
          </div>

          <div>
            👤 {user.name}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card mb-4">
        <div className="card-header">
          Notifications
        </div>

        <div className="card-body">
          {notifications.length === 0 ? (
            <p>No notifications</p>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="alert alert-info">
                {n.message}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Available Beds */}
      <div className="card mb-4">
        <div className="card-header">
          Available Beds
        </div>

        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Room</th>
                <th>Bed</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {availableBeds.map((bed) => (
                <tr key={bed.id}>
                  <td>{bed.room_number}</td>
                  <td>{bed.bed_number}</td>
                  <td>{bed.bed_type}</td>

                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        bookBed(
                          bed.room_number,
                          bed.bed_number
                        )
                      }
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Requests */}
      <div className="card">
        <div className="card-header">
          My Bed Requests
        </div>

        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Room</th>
                <th>Bed</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.room_number}</td>
                  <td>{req.bed_number}</td>

                  <td>
                    <span
                      className={`badge ${
                        req.status === "approved"
                          ? "bg-success"
                          : req.status === "rejected"
                          ? "bg-danger"
                          : "bg-warning"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>

                  <td>
                    {new Date(req.created_at)
                      .toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

