import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();

  return <h2>Admin Panel - {user?.name}</h2>;
}