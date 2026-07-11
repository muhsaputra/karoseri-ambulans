import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaClock, FaFilter, FaNewspaper } from "react-icons/fa";
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
        const response = await cms.get("/api/articles", {
          params: {
            populate: "author,CoverImage",
          },
        });

        setArticles(response.data.data);
      } catch (err) {
        console.error("Error fetching articles:", err.message);
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

  const getAuthorName = (item) => {
    return (
      item?.author?.username ||
      item?.author?.data?.attributes?.username ||
      item?.attributes?.author?.data?.attributes?.username ||
      item?.attributes?.author?.username ||
      item?.authorName ||
      "Admin"
    );
  };

  const totalCategories = Math.max(categories.length - 1, 0);
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Seo
        title="Berita & Artikel"
        description="Informasi seputar ambulans, standar keselamatan, dan kendaraan medis."
      />
      <PageHeader title="Berita & Artikel" bgImage={AboutBg} />

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
        <div className="mb-8 overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-[#071b3b] via-[#0f2b5b] to-[#1f4a8a] p-8 text-white shadow-[0_20px_60px_-20px_rgba(7,27,59,0.35)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold backdrop-blur">
                <FaNewspaper /> Berita & Artikel
              </div>
              <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                Temukan insight terbaru seputar ambulans dan layanan medis
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                Jelajahi artikel informatif tentang standar keselamatan,
                teknologi kendaraan medis, dan praktik terbaik di industri
                ambulans.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  {articles.length} artikel tersedia
                </div>
                <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  {totalCategories} kategori
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
                <FaFilter /> Jelajahi berdasarkan topik
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Pilih kategori yang paling relevan untuk Anda, mulai dari
                teknologi, operasional, hingga keselamatan.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
            <FaFilter className="text-red-500" /> Filter kategori
          </div>
          <div className="text-sm text-slate-500">
            {selectedCategory === "Semua"
              ? "Menampilkan semua artikel"
              : `Menampilkan ${selectedCategory}`}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-start gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "bg-white text-slate-600 shadow-sm hover:bg-red-50 hover:text-red-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading && (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="h-48 animate-pulse rounded-3xl bg-slate-200" />
                <div className="mt-4 h-4 w-24 animate-pulse rounded-full bg-slate-200" />
                <div className="mt-4 h-6 w-full animate-pulse rounded-full bg-slate-200" />
                <div className="mt-3 h-4 w-5/6 animate-pulse rounded-full bg-slate-200" />
                <div className="mt-6 h-10 w-full animate-pulse rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-4xl border border-red-100 bg-red-50 p-10 text-center shadow-sm">
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
          <div className="rounded-4xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-bold text-[#071b3b]">
              Belum ada artikel pada kategori ini
            </h2>
            <p className="mt-2 text-slate-600">
              Pilih kategori lain untuk menemukan artikel yang tersedia.
            </p>
          </div>
        )}

        {!loading && !error && sortedArticles.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {sortedArticles.map((item) => {
              const authorName = getAuthorName(item);

              return (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#071b3b]/10"
                >
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    {item.CoverImage?.url ? (
                      <img
                        src={getMediaUrl(item.CoverImage.url)}
                        alt={item.Title || "Blog Image"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
                        Tidak ada gambar
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                        {item.Category || "Artikel"}
                      </span>
                      <span className="flex items-center gap-2 text-xs text-slate-400">
                        <FaClock className="text-red-500" />
                        {calculateReadTime(item.Content)} menit baca
                      </span>
                    </div>

                    <h3 className="mb-3 line-clamp-2 h-14 text-xl font-bold text-[#071b3b] transition-colors group-hover:text-red-600">
                      {item.Title || "Tanpa Judul"}
                    </h3>

                    <p className="mb-4 h-12 text-sm leading-6 text-slate-500 line-clamp-2">
                      {item.Excerpt || "Tidak ada cuplikan artikel."}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-600">
                          {authorName?.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-xs font-medium text-slate-600">
                          {authorName}
                        </span>
                      </div>

                      <Link
                        to={`/artikel/${item.Slug || "#"}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-red-600 transition-all hover:gap-3"
                      >
                        Baca <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
