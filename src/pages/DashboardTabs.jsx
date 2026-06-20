import { useSearchParams } from "react-router-dom"; // 1. Import the hook
import AdminDashboard from "./AdminDashboard";
import RoomsPage from "./RoomsPage";

export default function DashboardTabs() {
  // 2. Initialize search params. Default to "news" if no parameter is provided.
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "news";

  // 3. Helper function to update the URL parameter when a tab is clicked
  const handleTabChange = (tabName) => {
    setSearchParams({ tab: tabName });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Tabs */}
      <div className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto flex">
          <button
            onClick={() => handleTabChange("news")}
            className={`px-6 py-4 font-semibold transition ${
              activeTab === "news"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-slate-600"
            }`}
          >
            News CMS
          </button>

          <button
            onClick={() => handleTabChange("rooms")}
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
      <div className="p-6">
        {activeTab === "news" && <AdminDashboard />}
        {activeTab === "rooms" && <RoomsPage />}
      </div>
    </div>
  );
}