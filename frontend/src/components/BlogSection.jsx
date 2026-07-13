import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaNewspaper, FaArrowRight } from "react-icons/fa";

import { cms, getMediaUrl } from "../lib/cms";

function calculateReadTime(content) {
  if (!content) return 1;
  const text = typeof content === "string" ? content : JSON.stringify(content);
  return Math.ceil(text.length / 1000);
}

function getAuthorName(item) {
  const authorField = item?.author || item?.attributes?.author;
  const author = authorField?.data?.attributes || authorField;

  return (
    author?.username ||
    author?.name ||
    author?.displayName ||
    author?.fullName ||
    author?.email ||
    item?.authorName ||
    "Admin"
  );
}

// Ambil data blog yang sama dari Blog.jsx (CMS /api/articles)
export default function BlogSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    const fetchArticles = async () => {
      try {
        const response = await cms.get("/api/articles", {
          params: {
            populate: "author,CoverImage",
          },
        });

        if (!alive) return;
        setArticles(response.data.data || []);
      } catch (err) {
        console.error("Error fetching articles (Home BlogSection):", err);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    };

    fetchArticles();
    return () => {
      alive = false;
    };
  }, []);

  const latestArticles = [...articles]
    .sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <section className="bg-slate-50 py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-red-600">
            Berita & Artikel
          </p>
          <h3 className="text-4xl font-bold tracking-tight text-[#071b3b] md:text-5xl">
            Wawasan & Informasi Terkini
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Temukan berita terbaru, tips, dan wawasan seputar dunia karoseri
            ambulans. Dari inovasi teknologi hingga praktik terbaik, kami
            hadirkan informasi yang relevan untuk Anda.
          </p>
        </div>

        {loading ? (
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <div className="mb-4 h-6 w-24 animate-pulse rounded-full bg-slate-200" />
                <div className="mb-3 h-8 w-full animate-pulse rounded-2xl bg-slate-200" />
                <div className="mb-6 h-24 w-full animate-pulse rounded-2xl bg-slate-200" />
                <div className="h-10 w-36 animate-pulse rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {latestArticles.map((item, idx) => {
              const authorName = getAuthorName(item);
              const readTime = calculateReadTime(item.Content);

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-red-200"
                >
                  <div className="aspect-video bg-slate-100">
                    {item.CoverImage?.url ? (
                      <img
                        src={getMediaUrl(item.CoverImage.url)}
                        alt={item.Title || "Blog"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
                        Tidak ada gambar
                      </div>
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                        <FaNewspaper /> {item.Category || "Artikel"}
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <FaClock className="text-red-500" /> {readTime} menit
                      </span>
                    </div>

                    <h4 className="mb-3 text-xl font-bold leading-tight text-[#071b3b]">
                      {item.Title || "Tanpa Judul"}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.Excerpt || "Tidak ada cuplikan artikel."}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <Link
                        to={`/artikel/${item.Slug || "#"}`}
                        className="inline-flex items-center gap-2 rounded-full bg-[#071b3b] px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-red-600"
                      >
                        Baca Artikel
                        <FaArrowRight />
                      </Link>
                      <div className="text-right text-xs font-semibold text-slate-500">
                        By {authorName || "Admin"}
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-[2rem] bg-gradient-to-r from-red-500/40 via-red-500/0 to-transparent" />
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
