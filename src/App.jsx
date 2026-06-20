import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Rooms from "./pages/Rooms";
import RoomsPage from "./pages/RoomsPage";
import About from "./pages/AboutUs";
import Room from "./pages/RoomsPage";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import AdminNews from "./pages/AdminNews";
import Services from "./pages/Services";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DashboardTabs from "./pages/DashboardTabs";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public / General User Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/inventory" element={<Room />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/user" element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            } />
          </Route>

        {/* Admin Protected Routes using AdminLayout */}
        <Route path="/smrc/dormitoryana/admin" element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }>
          {/* 1. Set DashboardTabs as the index (default) admin page */}
          <Route index element={<DashboardTabs />} />
        </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}