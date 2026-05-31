import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth(); // 👈 Pull loading here

  console.log("ProtectedRoute loading:", loading, "user:", user);

  // 1. If we are still reading state, show a loading spinner/text
  if (loading) {
    return <div className="loading">Loading session...</div>; 
  }

  // 2. ONLY kick them to login if loading is done and user is strictly null
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. Handle unauthorized roles safely
  if (role && user.role !== role) {
    // If an admin accidentally goes to /user, or user goes to /admin
    return <Navigate to={user.role === "admin" ? "/admin" : "/user"} replace />;
  }

  return children;
}