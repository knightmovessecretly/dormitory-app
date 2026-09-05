import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  // Active/Inactive navigation styles
  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
      isActive
        ? "bg-pink-500 text-white shadow-md"
        : "text-pink-500 hover:bg-pink-100 hover:text-pink-600"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link to="/" className="font-bold text-xl">
            <img
              src="/logo.png"
              alt="Dormitory Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/ourstory" className={navClass}>
              Our Story
            </NavLink>

            <NavLink to="/rooms" className={navClass}>
              Rooms
            </NavLink>

            <NavLink to="/offerings" className={navClass}>
              Offerings
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact Us
            </NavLink>

            <NavLink to="/faq" className={navClass}>
              FAQ
            </NavLink>

            <NavLink to="/news" className={navClass}>
              Events
            </NavLink>

            {!user ? null : (
              <>
                {/* Notifications */}
                <button className="relative ml-2">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                    3
                  </span>
                </button>

                {/* User Profile */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 ml-2"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center">
                        <User size={18} />
                      </div>
                    )}

                    <span>{user.name || "User"}</span>
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg overflow-hidden">
                      <div className="px-4 py-3 border-b">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">
                          {user.email}
                        </p>
                      </div>

                      <Link
                        to="/smrc/dormitoryana/admin?tab=news"
                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                      >
                        <Newspaper size={16} />
                        News
                      </Link>


                      <button
                        onClick={logout}
                        className="w-full text-left flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50"
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

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-pink-500"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col gap-2 py-4 border-t">
            <NavLink
              to="/"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/ourstory"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Our Story
            </NavLink>

            <NavLink
              to="/rooms"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Rooms
            </NavLink>

            <NavLink
              to="/offerings"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Offerings
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/faq"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              FAQ
            </NavLink>

            <NavLink
              to="/news"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              News
            </NavLink>

            {isAdmin && (
              <Link
                to="/admin"
                className="text-red-600 font-semibold px-4 py-2"
                onClick={() => setOpen(false)}
              >
                Admin Panel
              </Link>
            )}

            {user && (
              <>
                <Link
                  to="/smrc/dormitoryana/admin?tab=news"
                  className="flex items-center gap-2 px-4 py-2"
                  onClick={() => setOpen(false)}
                >
                  <Newspaper size={16} />
                  News
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="text-left text-red-600 px-4 py-2"
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