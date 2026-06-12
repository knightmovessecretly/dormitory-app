import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Rooms from "./pages/Rooms";
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
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/admin/news" element={<AdminNews />} />         
          <Route path="/services" element={<Services />} /> 
          <Route path="/inventory" element={<Room />} />
          <Route path="/login" element={<Login />} />
          <Route  path="/user"    element={
              <ProtectedRoute role="user">
                <UserDashboard />
            </ProtectedRoute>
           }
           />
        <Route path="/smrc/dormitoryana/admin">
          <Route
            path="management"
           element={
              <ProtectedRoute role="admin">
                <DashboardTabs />
              </ProtectedRoute>
           }
          />
        </Route>        
        </Route>
      </Routes>
    </BrowserRouter>
        </AuthProvider>
  );
}