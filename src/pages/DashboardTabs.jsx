import { useState } from "react";

import AdminDashboard from "./AdminDashboard";
import RoomsPage from "./RoomsPage";

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Tabs */}
      <div className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto flex">
          <button
            onClick={() => setActiveTab("news")}
            className={`px-6 py-4 font-semibold transition ${
              activeTab === "news"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-slate-600"
            }`}
          >
            News CMS
          </button>

          <button
            onClick={() => setActiveTab("rooms")}
            className={`px-6 py-4 font-semibold transition ${
              activeTab === "rooms"
                ? "border-b-2 border-pink-500 text-pink-500"
                : "text-slate-600"
            }`}
          >
            Room Inventory
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === "news" && <AdminDashboard />}
        {activeTab === "rooms" && <RoomsPage />}
      </div>
    </div>
  );
}