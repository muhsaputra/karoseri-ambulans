import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/assets1.webp";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Di Blog.jsx, update useEffect Anda menjadi:
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/articles?populate=*",
          {
            headers: {
              Authorization: `94b3232b3d8d7ace6529a5c70f8f08dc3118f5fa204a6e635cae58e39258a52ac568f308a8c523f66c42340e1cfb2f40a9a8fc4f3591b47f06716ee9751946d947409905c3ccfd33469d876ac0cbc2c1ec1f86f2a5720e625a0568929e016c5d44ebd761f4a021640a8441015cd3d33e47ed4efaf2b9fe5014d194aef893a495`,
            },
          },
        );
        setArticles(response.data.data);
      } catch (err) {
        console.error("Error:", err);
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
  // --------------------------------------

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
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
            Berita & Artikel
          </h2>
          <h3 className="text-6xl font-extrabold text-slate-900 mb-6">
            Informasi Dan Panduan Teknis{" "}
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kami membedah proses manufaktur, regulasi, dan inovasi yang
            memastikan setiap unit ambulans yang keluar dari pabrik kami siap
            menjalankan misi penyelamatan nyawa dengan sempurna.
          </p>
        </div>

        {/* 1. KATEGORI HEADER (Filter UI) */}
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

        {/* 2. SECTION HEADER (Konteks Judul) */}
        <div className="mb-8 border-l-4 border-blue-600 pl-4">
          <h2 className="text-2xl font-bold text-slate-900">
            {selectedCategory === "Semua"
              ? "Semua Artikel Terbaru"
              : `Kategori: ${selectedCategory}`}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            {filteredArticles.length} artikel ditemukan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((item) => {
            // DEBUG: Ini akan mencetak isi data di console. Buka Console untuk melihat struktur aslinya!
            console.log("Struktur item artikel:", item);

            // MENCEGAH ERROR:
            // Kita gunakan optional chaining (?.) yang aman.
            // Jika author tidak ada, atau datanya tidak ada, atau username tidak ada,
            // maka akan otomatis kembali ke "Admin".
            const authorName =
              item.author?.data?.attributes?.username ||
              item.author?.username ||
              "Admin";

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="aspect-video overflow-hidden bg-slate-100">
                  {item.CoverImage?.url ? (
                    <img
                      src={`http://localhost:1337${item.CoverImage.url}`}
                      alt={item.Title || "Blog Image"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {item.Category || "Artikel"}
                    </span>

                    {/* Tanggal & Waktu Baca */}
                    <span className="text-slate-400 text-xs">
                      {item.publishedAt
                        ? new Date(item.publishedAt).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )
                        : "N/A"}
                      {" • "}
                      {calculateReadTime(item.Content)} min read
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 h-14">
                    {item.Title || "Tanpa Judul"}
                  </h3>

                  <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                    {item.Excerpt || "Tidak ada deskripsi tersedia."}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                        {/* Mengambil inisial nama author, fallback ke 'A' jika tidak ada */}
                        {authorName?.charAt(0).toUpperCase() || "A"}
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
