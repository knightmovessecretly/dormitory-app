import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function News() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const news = [
    {
      id: 1,
      title: "New Room Wing Now Open",
      category: "Announcement",
      date: "May 2026",
      description:
        "We are excited to announce the opening of our new dormitory wing with upgraded facilities.",
      image: "/images/news1.jpg",
    },
    {
      id: 2,
      title: "Free WiFi Upgrade Completed",
      category: "Update",
      date: "April 2026",
      description:
        "All rooms now have upgraded high-speed fiber internet.",
      image: "/images/news2.jpg",
    },
    {
      id: 3,
      title: "Monthly Dorm Cleanup Drive",
      category: "Event",
      date: "March 2026",
      description:
        "Join our monthly cleanliness and sustainability program.",
      image: "/images/news3.jpg",
    },
    {
      id: 4,
      title: "24/7 Security Enhancement",
      category: "Update",
      date: "February 2026",
      description:
        "We improved CCTV coverage and security personnel.",
      image: "/images/news4.jpg",
    },
  ];
  const featuredNews = news.filter((n) => n.featured);

  const categories = ["All", "Announcement", "Update", "Event"];

  // FILTER LOGIC
  const filteredNews = useMemo(() => {

    return news.filter((item) => {

      const matchCategory =
        category === "All" || item.category === category;

      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;

    });

  }, [search, category]);

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* HERO */}
      <section
        className="
          relative
          h-[40vh]
          flex
          items-center
          justify-center
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/images/dormHero.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center text-white px-4"
        >

          <h1 className="text-5xl font-bold">
            Dormitory News
          </h1>

          <p className="text-gray-200 mt-3">
            Updates, announcements, and events
          </p>

        </motion.div>

      </section>

      {/* CONTROLS */}
      <section className="py-10 px-6">

        <div className="max-w-6xl mx-auto">

          {/* SEARCH */}
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              p-4
              rounded-xl
              border
              border-gray-300
              mb-6
              outline-none
              focus:ring-2
              focus:ring-red-500
            "
          />

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-10">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`
                  px-5
                  py-2
                  rounded-full
                  border
                  transition
                  ${
                    category === cat
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {cat}
              </button>
            ))}

          </div>

{featuredNews.length > 0 && (
  <div className="mb-12">

    <h2 className="text-2xl font-bold mb-4">
      📌 Featured News
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      {featuredNews.map((item) => (
        <div
          key={item.id}
          className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl shadow"
        >
          <h3 className="font-bold text-lg">
            {item.title}
          </h3>

          <p className="text-sm text-gray-600">
            {item.description}
          </p>
        </div>
      ))}

    </div>

  </div>
)}

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <AnimatePresence mode="popLayout">

              {filteredNews.length > 0 ? (
                filteredNews.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="
                      bg-white
                      rounded-2xl
                      shadow-md
                      overflow-hidden
                      hover:shadow-xl
                      transition
                    "
                  >

                    {/* IMAGE */}
                    <div className="h-48 overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          hover:scale-110
                          transition
                          duration-500
                        "
                      />

                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      <div className="flex justify-between mb-2 text-sm">

                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                          {item.category}
                        </span>

                        <span className="text-gray-500">
                          {item.date}
                        </span>

                      </div>

                      <h3 className="text-xl font-bold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                ))
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-500 col-span-full"
                >
                  No news found.
                </motion.p>
              )}

            </AnimatePresence>

          </div>

        </div>

      </section>

    </div>
  );
}