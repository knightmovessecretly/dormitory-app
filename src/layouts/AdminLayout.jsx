import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AdminLayout() {
  return (
<div className="min-h-screen flex bg-gray-100">
      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
              <Navbar />
        <Outlet />
      </main>

    </div>
  );
}