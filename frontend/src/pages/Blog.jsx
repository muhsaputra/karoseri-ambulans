import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";
import { cms, getMediaUrl } from "../lib/cms";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Pada Strapi v5, respons data langsung dapat diakses
        const response = await cms.get("/api/articles", {
          params: { populate: "*" },
        });
        // Sesuaikan dengan struktur respons API Anda
        setArticles(response.data.data);
      } catch (err) {
        console.error(
          "Error fetching articles:",
          err.response?.status || err.message,
        );
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filter kategori
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
      <Seo
        title="Berita & Artikel"
        description="Informasi seputar ambulans, standar keselamatan, dan kendaraan medis."
      />
      <PageHeader title="Berita & Artikel" bgImage={AboutBg} />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-white text-slate-600 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {loading && (
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-3xl bg-slate-200"
              />
            ))}
          </div>
        )}
        {error && (
          <div className="rounded-3xl border border-red-100 bg-red-50 p-10 text-center">
            <h2 className="text-xl font-bold text-[#071b3b]">
              Artikel belum dapat dimuat
            </h2>
            <p className="mt-2 text-slate-600">
              Akses artikel dari CMS belum tersedia. Silakan coba lagi setelah
              konfigurasi akses publik CMS diperbarui.
            </p>
          </div>
        )}
        {!loading && !error && filteredArticles.length === 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
            <h2 className="text-xl font-bold text-[#071b3b]">
              Belum ada artikel pada kategori ini
            </h2>
            <p className="mt-2 text-slate-600">
              Pilih kategori lain untuk menemukan artikel yang tersedia.
            </p>
          </div>
        )}
        {!loading && !error && filteredArticles.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.map((item) => {
              // Akses langsung properti tanpa .attributes
              const authorName = item.author?.username || "Admin";

              return (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#071b3b]/10"
                >
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    {/* Akses langsung item.CoverImage.url */}
                    {item.CoverImage?.url ? (
                      <img
                        src={getMediaUrl(item.CoverImage.url)}
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
                      <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-600">
                        {item.Category || "Artikel"}
                      </span>
                      <span className="text-slate-400 text-xs">
                        {item.publishedAt
                          ? new Date(item.publishedAt).toLocaleDateString(
                              "id-ID",
                            )
                          : "N/A"}
                        {" · "}
                        {calculateReadTime(item.Content)} menit baca
                      </span>
                    </div>

                    <h3 className="mb-3 h-14 text-xl font-bold text-[#071b3b] transition-colors group-hover:text-red-600 line-clamp-2">
                      {item.Title || "Tanpa Judul"}
                    </h3>

                    {/* TAMBAHKAN KODE INI */}
                    <p className="mb-4 h-10 text-sm text-slate-500 line-clamp-2">
                      {item.Excerpt || "Tidak ada cuplikan artikel."}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-600">
                          {authorName?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-xs font-medium text-slate-600">
                          {authorName}
                        </span>
                      </div>

                      <Link
                        to={`/artikel/${item.Slug || "#"}`}
                        className="inline-flex items-center text-sm font-bold text-red-600 transition-all hover:gap-2"
                      >
                        Baca <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
