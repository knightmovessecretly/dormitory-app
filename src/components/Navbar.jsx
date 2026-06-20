import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  User,
  LogOut,
  Menu,
  X,
  Newspaper,
  Bed,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="font-bold text-xl text-blue-600">
            <img
              src="/logo.png"
              alt="Dormitory Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">

            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/rooms" className="hover:text-blue-600">Rooms</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/news" className="hover:text-blue-600">News</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/faq" className="hover:text-blue-600">FAQ</Link>

            {!user ? (
              <></>
            ) : (
              <>
                {/* Notifications */}
                <button className="relative">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                    3
                  </span>
                </button>

                {/* User Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                        <User size={18} />
                      </div>
                    )}

                    <span>{user.name || "User"}</span>
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white border rounded-lg shadow-lg">

                      <div className="px-4 py-3 border-b">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>


                      {/* ✅ UPDATED: News with icon */}
                      <Link
                        to="/smrc/dormitoryana/admin?tab=news"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <Newspaper size={16} />
                        News
                      </Link>

                      {/* ✅ UPDATED: Rooms with icon */}
                      <Link
                        to="/smrc/dormitoryana/admin/?tab=rooms"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <Bed size={16} />
                        Room Inventory
                      </Link>

                      <button
                        onClick={logout}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>

                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col gap-3 py-4 border-t">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/rooms" onClick={() => setOpen(false)}>Rooms</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/news" onClick={() => setOpen(false)}>News</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
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

            {!user ? (
              <></>
            ) : (
              <>

                {/* ✅ MOBILE: News with icon */}
                <Link
                  to="/smrc/dormitoryana/admin?tab=news"
                  className="flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <Newspaper size={16} />
                  News
                </Link>

                {/* ✅ MOBILE: Rooms with icon */}
                <Link
                  to="/smrc/dormitoryana/admin/?tab=rooms"
                  className="flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <Bed size={16} />
                  Room Inventory
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="text-left text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}