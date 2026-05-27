export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <div className="bg-white p-4 rounded-xl shadow">
        Total Users: 120
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        Rooms: 45
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        Bookings: 32
      </div>

    </div>
  );
}