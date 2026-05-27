import { useState } from "react";

export default function AdminNews() {

  const [newsList, setNewsList] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: "Announcement",
    image: "",
    content: "",
    featured: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addNews = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      ...form,
    };

    setNewsList([newItem, ...newsList]);

    setForm({
      title: "",
      category: "Announcement",
      image: "",
      content: "",
      featured: false,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          onSubmit={addNews}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >

          <h2 className="text-2xl font-bold mb-4">
            Create News
          </h2>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-3 border rounded mb-3"
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-3"
          >
            <option>Announcement</option>
            <option>Update</option>
            <option>Event</option>
          </select>

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 border rounded mb-3"
          />

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Content"
            className="w-full p-3 border rounded mb-3"
            rows="5"
          />

          <label className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) =>
                setForm({ ...form, featured: e.target.checked })
              }
            />
            Featured News
          </label>

          <button className="w-full bg-red-600 text-white p-3 rounded">
            Publish News
          </button>

        </form>

        {/* PREVIEW */}
        <div className="space-y-4">

          <h2 className="text-2xl font-bold">
            Live Preview
          </h2>

          {newsList.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow"
            >

              <div className="flex justify-between">

                <span className="text-red-600 font-semibold">
                  {item.category}
                </span>

                {item.featured && (
                  <span className="text-yellow-500 font-bold">
                    ★ Featured
                  </span>
                )}

              </div>

              <h3 className="font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.content}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}