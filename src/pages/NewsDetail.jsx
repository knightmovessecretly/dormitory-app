import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function NewsDetail() {
    const { slug } = useParams();

    const [news, setNews] = useState(null);
    const [relatedNews, setRelatedNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, [slug]);

    const fetchNews = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/news/${slug}`
            );

            setNews(res.data);

            const related = await axios.get(
                `http://localhost:5000/api/news`
            );

            setRelatedNews(
                related.data.filter(
                    (item) =>
                        item.category === res.data.category &&
                        item.id !== res.data.id
                )
            );
        } catch (err) {
            console.error(err);
        }
    };

    if (!news) {
        return (
            <div className="text-center py-20">
                Loading article...
            </div>
        );
    }

    const imageUrl = news.featured_image
        ? `http://localhost:5000${news.featured_image}`
        : "/placeholder.jpg";

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* SEO META TAGS */}
            <Helmet>
                <title>{news.title}</title>

                <meta name="description" content={news.summary} />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:title" content={news.title} />
                <meta property="og:description" content={news.summary} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:type" content="article" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={news.title} />
                <meta name="twitter:description" content={news.summary} />
                <meta name="twitter:image" content={imageUrl} />
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative h-[600px]">

                <img
                    src={imageUrl}
                    alt={news.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0">
                    <div className="max-w-6xl mx-auto px-6 pb-16">

                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                            {news.category}
                        </span>

                        <h1 className="text-white text-4xl md:text-6xl font-black mt-4">
                            {news.title}
                        </h1>

                        <div className="flex gap-6 mt-6 text-white/80">
                            <span>By {news.author}</span>
                            <span>
                                {new Date(
                                    news.published_at
                                ).toLocaleDateString()}
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid lg:grid-cols-12 gap-10">

                    {/* ARTICLE */}
                    <article className="lg:col-span-8 space-y-8">

                        {/* SUMMARY */}
                        <div className="bg-white rounded-2xl shadow p-8">
                            <h2 className="text-2xl font-bold mb-4">
                                Summary
                            </h2>

                            <p className="text-xl text-gray-600">
                                {news.summary}
                            </p>
                        </div>

                        {/* CONTENT */}
                        <div className="bg-white rounded-2xl shadow p-8">
                            <div className="prose prose-lg max-w-none">
                                {news.content
                                    ?.split("\n")
                                    .map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                            </div>
                        </div>

                        {/* SHARE */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-bold mb-4">
                                Share this article
                            </h3>

                            <div className="flex gap-3">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                                    Facebook
                                </button>

                                <button className="bg-sky-500 text-white px-4 py-2 rounded-lg">
                                    Twitter
                                </button>

                                <button className="bg-blue-800 text-white px-4 py-2 rounded-lg">
                                    LinkedIn
                                </button>
                            </div>
                        </div>

                    </article>

                    {/* SIDEBAR */}
                    <aside className="lg:col-span-4 space-y-6">

                        {/* NEWSLETTER */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
                            <h3 className="text-2xl font-bold">
                                Stay Updated
                            </h3>

                            <p className="mt-3 text-white/80">
                                Get the latest news updates
                                directly to your inbox.
                            </p>

                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full mt-4 px-4 py-3 rounded-lg text-black"
                            />

                            <button className="w-full mt-4 bg-white text-blue-600 py-3 rounded-lg font-bold">
                                Subscribe
                            </button>
                        </div>

                        {/* LEAD GENERATION */}
                        <div className="bg-white rounded-2xl shadow p-8">
                            <h3 className="text-xl font-bold">
                                Grow Your Business
                            </h3>

                            <p className="text-gray-600 mt-3">
                                We help you generate leads,
                                increase traffic, and boost
                                brand visibility.
                            </p>

                            <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg">
                                Contact Us
                            </button>
                        </div>

                        {/* RELATED */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="text-xl font-bold mb-4">
                                Related Articles
                            </h3>

                            <div className="space-y-4">
                                {relatedNews.slice(0, 5).map(
                                    (article) => (
                                        <div
                                            key={article.id}
                                            className="border-b pb-3"
                                        >
                                            <h4 className="font-semibold hover:text-blue-600 cursor-pointer">
                                                {article.title}
                                            </h4>

                                            <p className="text-sm text-gray-500">
                                                {article.category}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                    </aside>

                </div>
            </section>
        </div>
    );
}