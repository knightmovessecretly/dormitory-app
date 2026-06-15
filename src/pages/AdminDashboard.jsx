import { useState, useEffect } from "react";
import axios from "axios";
import slugify from "slugify";
import config from "../config";

// Lexical Core & React Wrapper
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

// Lexical Nodes & Utilities for Content Conversion
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LinkNode, AutoLinkNode } from "@lexical/link";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";

import { $getRoot, $insertNodes, FORMAT_TEXT_COMMAND } from "lexical";

const { API_URL } = config;
const API_BASE_URL = `${API_URL}news`;

// -----------------------------------------------------------------
// COMPONENT: COLORFUL STATUS MODAL
// -----------------------------------------------------------------
function StatusModal({ isOpen, onClose, type, title, message }) {
    if (!isOpen) return null;

    const isSuccess = type === "success";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all scale-100 p-6 text-center border border-slate-100">
                {/* Dynamic Colorful Icon Container */}
                <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-4 ${
                    isSuccess ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}>
                    {isSuccess ? (
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </div>

                {/* Text Context */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-6">{message}</p>

                {/* Interactive Action Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className={`w-full py-3 px-4 rounded-xl text-white font-semibold transition-colors shadow-md ${
                        isSuccess 
                            ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" 
                            : "bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
                    }`}
                >
                    Dismiss
                </button>
            </div>
        </div>
    );
}

// -----------------------------------------------------------------
// LEXICAL COMPONENT: TOOLBAR
// -----------------------------------------------------------------
function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();

    const toggleBold = () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
    };

    const toggleItalic = () => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
    };

    const toggleHeading = () => {
        editor.update(() => {});
    };

    return (
        <div className="flex gap-2 flex-wrap mb-3 mt-1">
            <button
                type="button"
                onClick={toggleBold}
                className="px-2 py-1 border rounded bg-slate-50 hover:bg-slate-100 font-bold text-xs"
            >
                Bold
            </button>
            <button
                type="button"
                onClick={toggleItalic}
                className="px-2 py-1 border rounded bg-slate-50 hover:bg-slate-100 italic text-xs"
            >
                Italic
            </button>
        </div>
    );
}

// -----------------------------------------------------------------
// LEXICAL COMPONENT: SYNC DATA TO/FROM MAIN FORM STATE
// -----------------------------------------------------------------
function FormSyncPlugin({ htmlContent, onChange }) {
    const [editor] = useLexicalComposerContext();
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editor.read(() => {
                const html = $generateHtmlFromNodes(editor);
                if (html !== htmlContent) {
                    onChange(html);
                }
            });
        });
    }, [editor, htmlContent, onChange]);

    useEffect(() => {
        if (editor && (isFirstLoad || htmlContent)) {
            editor.update(() => {
                let currentHtml = "";
                editor.read(() => {
                    currentHtml = $generateHtmlFromNodes(editor);
                });
                
                if (currentHtml !== htmlContent) {
                    const parser = new DOMParser();
                    const dom = parser.parseFromString(htmlContent || "", "text/html");
                    const nodes = $generateNodesFromDOM(editor, dom.body);
                    
                    const root = $getRoot();
                    root.clear();
                    root.append(...nodes);
                }
            });
            setIsFirstLoad(false);
        }
    }, [htmlContent, editor, isFirstLoad]);

    return null;
}

// -----------------------------------------------------------------
// MAIN DASHBOARD COMPONENT
// -----------------------------------------------------------------
export default function AdminDashboard() {
    const [articles, setArticles] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // Modal Notification State Setup
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        type: "success",
        title: "",
        message: ""
    });

    const [form, setForm] = useState({
        title: "",
        summary: "",
        content: "",
        category: "",
        author: "Admin",
        status: "published",
    });

    const [image, setImage] = useState(null);
    const [seo, setSeo] = useState({ slug: "", metaDescription: "" });

    const lexicalConfig = {
        namespace: "CMS-Editor",
        theme: {
            paragraph: "mb-2 text-gray-800 leading-relaxed",
            text: {
                bold: "font-bold",
                italic: "italic",
                underline: "underline",
            },
        },
        nodes: [HeadingNode, QuoteNode, LinkNode, AutoLinkNode],
        onError(error) {
            console.error("Lexical Runtime Error:", error);
        },
    };

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

    const generateSEO = (title, summary) => {
        const slug = slugify(title || "", { lower: true, strict: true });
        const metaDescription = summary?.length > 160 ? summary.substring(0, 157) + "..." : summary;
        return { slug, metaDescription };
    };

    const handleEditClick = (article) => {
        setEditingId(article.id);
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
        setImage(null);
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

    const triggerModal = (type, title, message) => {
        setModalConfig({ isOpen: true, type, title, message });
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this article?")) return;
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
            triggerModal("success", "Deleted Successfully", "The article configuration was pulled from the database safely.");
            if (editingId === id) handleCancelEdit();
            fetchArticles();
        } catch (error) {
            console.error(error);
            triggerModal("error", "Deletion Failed", "An internal error occurred while attempts were made to remove this record.");
        }
    };

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
                await axios.put(`${API_URL}news/${editingId}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                triggerModal("success", "Article Updated", "Your modifications to the dynamic structural layer have been saved.");
                handleCancelEdit();
            } else {
                await axios.post(API_BASE_URL, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                triggerModal("success", "Article Published", "A pristine entry block is now serving structural operational requests.");
                handleCancelEdit();
            }
            fetchArticles();
        } catch (error) {
            console.error(error);
            triggerModal("error", "Execution Halted", "The incoming dynamic submission stream returned formatting errors.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-4 space-y-10">
            {/* INJECTED COLORFUL DIALOG COMPONENT */}
            <StatusModal
                isOpen={modalConfig.isOpen}
                type={modalConfig.type}
                title={modalConfig.title}
                message={modalConfig.message}
                onClose={() => setModalConfig((prev) => ({ ...prev, isOpen: false }))}
            />

            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* HEADER */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-white">News CMS (Lexical Editor)</h1>
                            <p className="text-blue-100 mt-1">
                                {editingId ? `Editing Article ID: ${editingId}` : "React compatible high-performance text editor"}
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
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* IMAGE */}
                        <div className="flex flex-col space-y-1">
                            <label className="text-xs text-gray-500 font-medium">
                                Featured Image {editingId && "(Leave empty to retain current)"}
                            </label>
                            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
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
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* LEXICAL EDITOR CONTAINER */}
                        <div className="border rounded-xl p-4 bg-white shadow-inner">
                            <label className="font-semibold text-gray-700 block mb-1">Content</label>
                            
                            <LexicalComposer initialConfig={lexicalConfig}>
                                <div className="editor-container relative">
                                    <ToolbarPlugin />
                                    <div className="editor-inner border rounded-lg bg-slate-50/50 p-3 min-h-[300px]">
                                        <RichTextPlugin
                                            contentEditable={
                                                <ContentEditable className="outline-none prose max-w-none min-h-[280px]" />
                                            }
                                            placeholder={
                                                <div className="absolute top-[48px] left-3 text-gray-400 pointer-events-none text-sm">
                                                    Start writing your article...
                                                </div>
                                            }
                                            ErrorBoundary={LexicalErrorBoundary}
                                        />
                                        <HistoryPlugin />
                                        <LinkPlugin />
                                        <FormSyncPlugin
                                            htmlContent={form.content}
                                            onChange={(newHtml) => setForm((prev) => ({ ...prev, content: newHtml }))}
                                        />
                                    </div>
                                </div>
                            </LexicalComposer>
                        </div>

                        {/* STATUS */}
                        <select
                            value={form.status}
                            onChange={(e) => setForm({ ...form, status: e.target.value })}
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                type="button"
                                                onClick={() => handleEditClick(article)}
                                                className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded font-medium transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
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