import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // (optional) later replace this with real auth role
  const isAdmin = true;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="font-bold text-xl text-blue-600">
             <img
            src="/logo.png"
            alt="Dormitory Logo"
            className="logo-image"
          />

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">

            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/rooms" className="hover:text-blue-600">Rooms</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/news" className="hover:text-blue-600">News</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact with Map</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/faq" className="hover:text-blue-600">FAQ</Link>

            {/* ADMIN LINK (only show if admin) */}
            {isAdmin && (
              <Link
                to="/admin"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                Admin
              </Link>
            )}

            <Link
              to="/register"
              className="bg-blue-600 text-white px-3 py-1.5 rounded-lg"
            >
              Register
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col gap-3 py-4 border-t text-sm">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/rooms" onClick={() => setOpen(false)}>Rooms</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/news" onClick={() => setOpen(false)}>News</Link>
            <Link to="/faq" onClick={() => setOpen(false)}>FAQ</Link>

            {isAdmin && (
              <Link
                to="/admin"
                className="text-red-600 font-semibold"
                onClick={() => setOpen(false)}
              >
                Admin Panel
              </Link>
            )}

            <Link
              to="/register"
              className="text-blue-600 font-semibold"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}