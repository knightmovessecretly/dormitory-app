import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import config from "../config";

const { API_URL, BASE_URL } = config;

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}news`).then((res) => setNews(res.data));
  }, []);

  // Helper function to turn "<p>Hello <b>World</b></p>" into "Hello World"
  const stripHtml = (htmlString) => {
    if (!htmlString) return "";
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <div
      className="min-h-screen text-slate-800"
      style={{
        background: "linear-gradient(to right, #f9c2c2 0%, #ffe3e3 40%, #ffffff 100%)",
      }}
    >
      {/* HERO */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-pink-500 mb-3">Dormitory News</h1>
        <p className="text-slate-600">Updates, announcements, and important information</p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/news/${item.slug}`}
                className="block rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={`${BASE_URL}${item.featured_image}`}
                    alt={item.title}
                    className="w-full h-52 object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h2 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h2>

                  {/* Clean text summary without code tags appearing */}
<p 
  className="text-slate-600 text-sm leading-relaxed line-clamp-3"
  dangerouslySetInnerHTML={{ __html: item.summary }} 
/>

                  <div className="mt-4 text-sm text-pink-500 font-medium">Read more →</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}