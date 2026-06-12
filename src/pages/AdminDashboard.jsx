import { useState, useEffect } from "react";
import axios from "axios";
import slugify from "slugify";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

const API_BASE_URL = "http://localhost:5000/api/news";

export default function AdminDashboard() {
    const [articles, setArticles] = useState([]);
    const [editingId, setEditingId] = useState(null); // Tracks if we are updating an article

    const [form, setForm] = useState({
        title: "",
        summary: "",
        content: "",
        category: "",
        author: "Admin",
        status: "published",
    });

    const [image, setImage] = useState(null);

    const [seo, setSeo] = useState({
        slug: "",
        metaDescription: "",
    });

    // -----------------------------
    // TIPTAP EDITOR CONFIG
    // -----------------------------
    const editor = useEditor({
        extensions: [StarterKit, Image, Link],
        content: form.content,
        onUpdate: ({ editor }) => {
            setForm((prev) => ({
                ...prev,
                content: editor.getHTML(),
            }));
        },
    });

    // Synchronize editor content if changed programmatically (like choosing an article to edit)
    useEffect(() => {
        if (editor && editor.getHTML() !== form.content) {
            editor.commands.setContent(form.content);
        }
    }, [form.content, editor]);

    // Fetch articles on mount
    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const res = await axios.get(API_BASE_URL);
            setArticles(res.data);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    // -----------------------------
    // SEO GENERATOR
    // -----------------------------
    const generateSEO = (title, summary) => {
        const slug = slugify(title || "", {
            lower: true,
            strict: true,
        });

        const metaDescription =
            summary?.length > 160
                ? summary.substring(0, 157) + "..."
                : summary;

        return { slug, metaDescription };
    };

    // Helper to switch form into update mode
    const handleEditClick = (article) => {
        setEditingId(article.id); // Assuming backend objects contain 'id'
        setForm({
            title: article.title || "",
            summary: article.summary || "",
            content: article.content || "",
            category: article.category || "",
            author: article.author || "Admin",
            status: article.status || "published",
        });
        setSeo({
            slug: article.slug || "",
            metaDescription: article.meta_description || article.metaDescription || "",
        });
        setImage(null); // Reset image unless they want to upload a new one
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setForm({
            title: "",
            summary: "",
            content: "",
            category: "",
            author: "Admin",
            status: "published",
        });
        setSeo({ slug: "", metaDescription: "" });
        setImage(null);
    };

    // -----------------------------
    // DELETE HANDLER
    // -----------------------------
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this article?")) return;

        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
            alert("News deleted successfully!");
            if (editingId === id) handleCancelEdit();
            fetchArticles(); // Refresh list
        } catch (error) {
            console.error(error);
            alert("Failed to delete news");
        }
    };

    // -----------------------------
    // SUBMIT HANDLER (CREATE & UPDATE)
    // -----------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(form).forEach((key) => {
            formData.append(key, form[key]);
        });

        formData.append("slug", seo.slug);
        formData.append("meta_description", seo.metaDescription);

        if (image) {
            formData.append("featured_image", image);
        }

        try {
            if (editingId) {
                // UPDATE / PUT action
                await axios.put(`${API_BASE_URL}/${editingId}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("News updated successfully!");
                handleCancelEdit();
            } else {
                // CREATE / POST action
                await axios.post(API_BASE_URL, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("News published successfully!");
                // Clear Form
                handleCancelEdit();
            }
            fetchArticles(); // Refresh list after change
        } catch (error) {
            console.error(error);
            alert(`Failed to save news`);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-4 space-y-10">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* HEADER */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-white">
                                News CMS (TipTap Editor)
                            </h1>
                            <p className="text-blue-100 mt-1">
                                {editingId ? `Editing Article ID: ${editingId}` : "Modern React 19 compatible rich text editor"}
                            </p>
                        </div>
                        {editingId && (
                            <button 
                                onClick={handleCancelEdit}
                                className="bg-white text-red-600 font-semibold px-4 py-2 rounded-xl shadow hover:bg-red-50 transition"
                            >
                                Cancel Edit
                            </button>
                        )}
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* TITLE */}
                        <input
                            type="text"
                            value={form.title}
                            onChange={(e) => {
                                const title = e.target.value;
                                const seoData = generateSEO(title, form.summary);
                                setForm({ ...form, title });
                                setSeo(seoData);
                            }}
                            placeholder="Article title"
                            className="w-full px-4 py-3 border rounded-xl"
                        />

                        {/* SEO PREVIEW */}
                        <div className="bg-gray-50 p-4 rounded-xl text-sm">
                            <p><b>Slug:</b> {seo.slug}</p>
                            <p><b>Meta:</b> {seo.metaDescription}</p>
                        </div>

                        {/* CATEGORY */}
                        <input
                            type="text"
                            value={form.category}
                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                            placeholder="Category"
                            className="w-full px-4 py-3 border rounded-xl"
                        />

                        {/* IMAGE */}
                        <div className="flex flex-col space-y-1">
                            <label className="text-xs text-gray-500 font-medium">Featured Image {editingId && "(Leave empty to retain current)"}</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>

                        {/* SUMMARY */}
                        <textarea
                            rows={4}
                            value={form.summary}
                            onChange={(e) => {
                                const summary = e.target.value;
                                const seoData = generateSEO(form.title, summary);
                                setForm({ ...form, summary });
                                setSeo(seoData);
                            }}
                            placeholder="SEO summary"
                            className="w-full px-4 py-3 border rounded-xl"
                        />

                        {/* TIPTAP EDITOR CONTAINER */}
                        <div className="border rounded-xl p-4 bg-white">
                            <label className="font-semibold text-gray-700">Content</label>
                            {/* Toolbar */}
                            <div className="flex gap-2 flex-wrap mb-3 mt-1">
                                <button
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleBold().run()}
                                    className="px-2 py-1 border rounded bg-slate-50 hover:bg-slate-100"
                                >
                                    Bold
                                </button>
                                <button
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleItalic().run()}
                                    className="px-2 py-1 border rounded bg-slate-50 hover:bg-slate-100"
                                >
                                    Italic
                                </button>
                                <button
                                    type="button"
                                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                                    className="px-2 py-1 border rounded bg-slate-50 hover:bg-slate-100"
                                >
                                    H2
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const url = prompt("Image URL");
                                        if (url) editor.chain().focus().setImage({ src: url }).run();
                                    }}
                                    className="px-2 py-1 border rounded bg-slate-50 hover:bg-slate-100"
                                >
                                    Image
                                </button>
                            </div>
                            {/* Editor Area */}
                            <EditorContent
                                editor={editor}
                                className="prose max-w-none min-h-[300px] border p-3 rounded-lg"
                            />
                        </div>

                        {/* STATUS */}
                        <select
                            value={form.status}
                            onChange={(e) => setForm({ ...form, status: e.target.value })}
                            className="w-full px-4 py-3 border rounded-xl"
                        >
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                        </select>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className={`w-full text-white font-semibold py-3 rounded-xl transition ${
                                editingId ? "bg-amber-600 hover:bg-amber-700" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        >
                            {editingId ? "Update Article" : "Publish Article"}
                        </button>
                    </form>
                </div>
            </div>

            {/* MANAGEMENT LIST */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Existing News</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b bg-gray-50 text-gray-600 font-semibold text-sm">
                                <th className="p-3">Title</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center p-4 text-gray-400 text-sm">No articles found.</td>
                                </tr>
                            ) : (
                                articles.map((article) => (
                                    <tr key={article.id} className="border-b hover:bg-slate-50 transition text-sm">
                                        <td className="p-3 font-medium text-gray-800">{article.title}</td>
                                        <td className="p-3 text-gray-600">{article.category || "N/A"}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                                                article.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                                {article.status}
                                            </span>
                                        </td>
                                        <td className="p-3 text-right space-x-2">
                                            <button
                                                onClick={() => handleEditClick(article)}
                                                className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded font-medium transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(article.id)}
                                                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded font-medium transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}