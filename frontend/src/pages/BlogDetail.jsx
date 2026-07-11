import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  FaWhatsapp,
  FaLink,
  FaArrowLeft,
  FaClock,
  FaCalendarAlt,
  FaUser,
  FaShareAlt,
} from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";

import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";
import { cms, getMediaUrl } from "../lib/cms";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const calculateReadTime = (content) => {
    if (!content) return 1;
    const text = JSON.stringify(content);
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled =
        windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setProgress(Math.min(Math.max(scrolled, 0), 100));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        window.prompt("Salin tautan artikel ini:", shareUrl);
      }
      alert("Link berhasil disalin!");
    } catch (err) {
      console.error("Gagal menyalin link:", err);
      alert("Gagal menyalin link. Silakan coba lagi.");
    }
  };

  useEffect(() => {
    cms
      .get("/api/articles", {
        params: {
          "filters[Slug][$eq]": slug,
          populate: "*",
        },
      })
      .then((res) => {
        if (res.data.data && res.data.data.length > 0) {
          setArticle(res.data.data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error Detail:", err.response?.status || err.message);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <PageHeader title="Berita & Artikel" bgImage={AboutBg} />
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="animate-pulse rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="h-4 w-24 rounded-full bg-slate-200" />
            <div className="mt-6 h-10 w-3/4 rounded-full bg-slate-200" />
            <div className="mt-4 h-4 w-full rounded-full bg-slate-200" />
            <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
            <div className="mt-10 h-80 rounded-3xl bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50">
        <PageHeader title="Berita & Artikel" bgImage={AboutBg} />
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-16 text-center">
          <div className="w-full rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h1 className="text-2xl font-bold text-[#071b3b]">
              Artikel belum dapat dimuat
            </h1>
            <p className="mt-3 text-slate-600">
              Akses artikel dari CMS belum tersedia. Silakan coba lagi beberapa
              saat lagi.
            </p>
            <Link
              to="/artikel"
              className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Kembali ke Artikel
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50">
        <PageHeader title="Berita & Artikel" bgImage={AboutBg} />
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-16 text-center">
          <div className="w-full rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <h1 className="text-2xl font-bold text-[#071b3b]">
              Artikel tidak ditemukan
            </h1>
            <p className="mt-3 text-slate-600">
              Artikel yang Anda cari belum tersedia atau slugnya tidak sesuai.
            </p>
            <Link
              to="/artikel"
              className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Jelajahi Artikel Lainnya
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const readTime = calculateReadTime(article.Content);
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Seo title={article.Title} description={article.Excerpt} />
      <motion.div
        className="fixed left-0 top-0 z-50 h-1.5 origin-left bg-red-600"
        style={{ scaleX }}
      />
      <div
        className="fixed left-0 top-0 z-50 h-1.5 bg-red-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      <PageHeader title="Berita & Artikel" bgImage={AboutBg} />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/artikel"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-red-200 hover:text-red-600"
          >
            <FaArrowLeft /> Kembali ke Berita
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            <FaClock className="text-red-500" />
            {readTime} menit baca
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.55fr_0.45fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(7,27,59,0.25)] sm:p-8 lg:p-10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                {article.Category || "BERITA"}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                <FaCalendarAlt className="text-red-500" />
                {publishedDate}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-black leading-tight text-[#071b3b] sm:text-4xl lg:text-5xl">
              {article.Title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {article.Excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-slate-200 py-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white shadow-md">
                {article.author?.username?.charAt(0).toUpperCase() || "A"}
              </div>
              <div>
                <p className="font-bold text-slate-900">
                  {article.author?.username || "Admin"}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <FaUser className="text-red-500" />
                    {article.author?.username || "Admin"}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-2">
                    <FaClock className="text-red-500" />
                    {readTime} menit baca
                  </span>
                </div>
              </div>
            </div>

            {article.CoverImage?.url && (
              <div className="mt-8 overflow-hidden rounded-[28px]">
                <img
                  src={getMediaUrl(article.CoverImage.url)}
                  alt={article.Title}
                  className="h-80 w-full object-cover sm:h-105"
                />
              </div>
            )}

            <div className="prose prose-lg prose-slate mt-10 max-w-none prose-headings:mt-8 prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:leading-8 prose-p:text-slate-600 prose-img:my-8 prose-img:rounded-[24px] prose-a:text-red-600 prose-blockquote:rounded-r-2xl prose-blockquote:border-l-red-500 prose-blockquote:bg-red-50 prose-blockquote:px-4 prose-blockquote:py-3 prose-blockquote:text-slate-700">
              <article className="prose prose-lg prose-slate max-w-none">
                <BlocksRenderer
                  content={article.Content}
                  blocks={{
                    heading: ({ level, children }) => {
                      switch (level) {
                        case 1:
                          return (
                            <h1 className="mb-4 mt-8 text-4xl font-extrabold text-slate-900">
                              {children}
                            </h1>
                          );
                        case 2:
                          return (
                            <h2 className="mb-4 mt-8 text-3xl font-bold text-slate-900">
                              {children}
                            </h2>
                          );
                        case 3:
                          return (
                            <h3 className="mb-3 mt-6 text-2xl font-semibold text-slate-900">
                              {children}
                            </h3>
                          );
                        default:
                          return (
                            <h2 className="mb-4 mt-8 text-3xl font-bold text-slate-900">
                              {children}
                            </h2>
                          );
                      }
                    },
                    image: ({ image }) => (
                      <img
                        src={getMediaUrl(image.url)}
                        alt={image.alternativeText || "Article image"}
                        className="my-8 w-full rounded-3xl shadow-md"
                      />
                    ),
                  }}
                />
              </article>
            </div>
          </motion.article>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                <FaShareAlt className="text-red-500" />
                Bagikan
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <FaLink /> Salin tautan
                </button>
                <a
                  href={`https://wa.me/?text=${window.location.href}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-600"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">
                  Info cepat
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• Dipublikasikan {publishedDate}</li>
                  <li>• Estimasi baca {readTime} menit</li>
                  <li>• Kategori {article.Category || "Berita"}</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
