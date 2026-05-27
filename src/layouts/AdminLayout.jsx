import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow p-4 hidden md:block">
        <h1 className="font-bold text-xl mb-6 text-blue-600">
          Admin Panel
        </h1>

        <nav className="space-y-3 text-sm">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/rooms">Rooms</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/bookings">Bookings</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
}