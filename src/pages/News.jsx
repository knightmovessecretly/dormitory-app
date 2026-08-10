import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import config from "../config";
import "./Themes.css";

const { API_URL, BASE_URL } = config;

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}news`).then((res) => setNews(res.data));
  }, []);

  return (
    <div className="pinkfloral min-h-screen text-slate-800">
      {/* HERO */}
      <div className="text-center py-16 px-4">
        <h1 className="dormtitle text-5xl font-bold text-500 mb-3">
          Events
        </h1>
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
                // to={`/news/${item.slug}`}
                className="block rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* IMAGE WITH WHITE FRAME */}
                <div className="p-2 bg-white">
                  <div className="overflow-hidden rounded-2xl border-4 border-white shadow-sm">
                    <img
                      src={`${BASE_URL}${item.featured_image}`}
                      alt={item.title}
                      className="w-full h-52 object-cover transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h2 className="font-normal text-xl text-black mb-2">
                    {item.title}
                  </h2>

                  <p
                    className="text-slate-600 text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: item.summary }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
