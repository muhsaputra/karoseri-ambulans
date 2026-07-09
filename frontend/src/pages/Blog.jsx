import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/assets1.webp";

// Mengambil URL dan Token dari konfigurasi sistem (Vercel atau .env)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${API_URL.replace(/\/$/, "")}/api/articles?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          },
        );
        setArticles(response.data.data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };

    fetchArticles();
  }, []);

  const categories = [
    "Semua",
    ...new Set(articles.map((a) => a.Category || "Lainnya")),
  ];

  const filteredArticles =
    selectedCategory === "Semua"
      ? articles
      : articles.filter((a) => a.Category === selectedCategory);

  const calculateReadTime = (content) => {
    if (!content) return 1;
    const text =
      typeof content === "string" ? content : JSON.stringify(content);
    return Math.ceil(text.length / 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader title="Berita & Artikel" bgImage={AboutBg} />

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
            Berita & Artikel
          </h2>
          <h3 className="text-6xl font-extrabold text-slate-900 mb-6">
            Informasi Dan Panduan Teknis
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kami membedah proses manufaktur, regulasi, dan inovasi yang
            memastikan setiap unit ambulans yang keluar dari pabrik kami siap
            menjalankan misi penyelamatan nyawa dengan sempurna.
          </p>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List Artikel */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticles.map((item) => {
            const authorName =
              item.author?.data?.attributes?.username ||
              item.author?.username ||
              "Admin";

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  {item.CoverImage?.url ? (
                    <img
                      // Gunakan optional chaining (?.) untuk masuk ke dalam struktur data Strapi
                      src={`${API_URL}${item.CoverImage?.data?.attributes?.url}`}
                      alt={item.Title || "Blog Image"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {item.Category || "Artikel"}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {item.publishedAt
                        ? new Date(item.publishedAt).toLocaleDateString("id-ID")
                        : "N/A"}
                      {" • "}
                      {calculateReadTime(item.Content)} min read
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 h-14">
                    {item.Title || "Tanpa Judul"}
                  </h3>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                        {authorName?.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-xs font-medium text-slate-600">
                        {authorName}
                      </span>
                    </div>

                    <Link
                      to={`/artikel/${item.Slug || "#"}`}
                      className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all text-sm"
                    >
                      Baca <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
