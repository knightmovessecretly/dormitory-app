import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Rooms from "./pages/Rooms";
import About from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import AdminNews from "./pages/AdminNews";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutTimeline";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER SIDE */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/admin/news" element={<AdminNews />} />         
          <Route path="/services" element={<Services />} /> 
          <Route path="/aboutus" element={<AboutUs />} /> 
                  </Route>

        {/* ADMIN SIDE */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}