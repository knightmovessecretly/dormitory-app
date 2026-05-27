import { useParams, Link } from "react-router-dom";

export default function NewsDetail() {

  const { id } = useParams();

  // temporary static data (later replace with DB/Firebase)
  const news = [
    {
      id: "1",
      title: "New Room Wing Now Open",
      image: "/images/news1.jpg",
      content:
        "We are excited to announce the opening of our new dormitory wing with upgraded facilities and modern rooms.",
    },
    {
      id: "2",
      title: "Free WiFi Upgrade Completed",
      image: "/images/news2.jpg",
      content:
        "All rooms now have upgraded high-speed fiber internet for students and professionals.",
    },
  ];

  const item = news.find((n) => n.id === id);

  if (!item) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">News not found</h1>
        <Link className="text-red-600" to="/news">
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-4">
            {item.title}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {item.content}
          </p>

          <Link
            to="/news"
            className="inline-block mt-6 text-red-600 font-semibold"
          >
            ← Back to News
          </Link>

        </div>

      </div>

    </div>
  );
}