import { useState } from "react";

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState("login");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white w-full max-w-md p-6 rounded-xl">

        {/* Tabs */}
        <div className="flex gap-4 mb-4">
          <button onClick={() => setMode("login")}>Login</button>
          <button onClick={() => setMode("register")}>Register</button>
        </div>

        {/* LOGIN */}
        {mode === "login" && (
          <div className="space-y-3">
            <input className="w-full border p-2" placeholder="Email" />
            <input className="w-full border p-2" placeholder="Password" />

            <button className="w-full bg-blue-600 text-white py-2">
              Login
            </button>
          </div>
        )}

        {/* REGISTER */}
        {mode === "register" && (
          <div className="space-y-3">
            <input className="w-full border p-2" placeholder="Name" />
            <input className="w-full border p-2" placeholder="Email" />
            <input className="w-full border p-2" placeholder="Password" />

            <button className="w-full bg-blue-600 text-white py-2">
              Create Account
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}