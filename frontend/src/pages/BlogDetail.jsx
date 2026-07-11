import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { FaWhatsapp, FaLink } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
// Breadcrumbs
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";

export default function BlogDetail() {
  const { scrollYProgress } = useScroll();
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
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

  // Efek untuk Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (totalScroll / windowHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link berhasil disalin!");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/articles`, {
        params: {
          // Pastikan 'Slug' menggunakan S besar sesuai data JSON Anda
          "filters[Slug][$eq]": slug,
          populate: "*",
        },
      })
      .then((res) => {
        // Cek apakah data ditemukan
        if (res.data.data && res.data.data.length > 0) {
          setArticle(res.data.data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error Detail:", err.response ? err.response.data : err);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Memuat...
      </div>
    );
  if (!article)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Artikel tidak ditemukan.
      </div>
    );

  return (
    <div className="bg-slate-50 min-h-screen relative">
      <Seo title={article.Title} description={article.Excerpt} />
      <motion.div
        className="fixed top-0 left-0 z-50 h-1.5 origin-left bg-red-600"
        style={{ scaleX }} // Gunakan scaleX untuk progress
      />
      <PageHeader title="Berita & Artikel" bgImage={AboutBg} />

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 z-50 h-1.5 bg-red-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/artikel"
          className="mb-8 flex items-center gap-2 text-slate-500 transition-all hover:text-red-600"
        >
          ← Kembali ke Berita
        </Link>

        {/* Hero Section */}
        <div className="mb-10">
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-600">
            {article.Category || "BERITA"}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#071b3b] md:text-6xl">
            {article.Title}
          </h1>
          <p className="text-xl text-slate-500 mt-6 leading-relaxed">
            {article.Excerpt}
          </p>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 mb-10 py-6 border-y border-slate-200">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white shadow-md">
            {article.author?.username?.charAt(0).toUpperCase() || "A"}
          </div>
          <div>
            <p className="font-bold text-slate-900">
              {article.author?.username || "Admin"}
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              <span>•</span>
              {/* Ini dia yang terlewat! */}
              <span>{calculateReadTime(article.Content)} menit baca</span>
            </p>
          </div>
        </div>

        {/* Image */}
        {article.CoverImage?.url && (
          <div className="mb-12">
            <img
              src={`http://localhost:1337${article.CoverImage.url}`}
              alt={article.Title}
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-slate prose-headings:font-extrabold prose-p:text-slate-600 prose-img:rounded-3xl max-w-none">
          <article className="prose prose-lg prose-slate max-w-none">
            <BlocksRenderer
              content={article.Content}
              blocks={{
                // Ubah dari ({ heading, children }) menjadi ({ level, children })
                heading: ({ level, children }) => {
                  switch (level) {
                    case 1:
                      return (
                        <h1 className="text-4xl font-extrabold text-slate-900 mt-8 mb-4">
                          {children}
                        </h1>
                      );
                    case 2:
                      return (
                        <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">
                          {children}
                        </h2>
                      );
                    case 3:
                      return (
                        <h3 className="text-2xl font-semibold text-slate-900 mt-6 mb-3">
                          {children}
                        </h3>
                      );
                    default:
                      return <h2 className="text-3xl font-bold">{children}</h2>;
                  }
                },
                image: ({ image }) => (
                  <img
                    src={`http://localhost:1337${image.url}`}
                    alt={image.alternativeText || "Article image"}
                    className="w-full shadow-md my-8 rounded-2xl"
                  />
                ),
              }}
            />
          </article>
        </div>

        {/* Footer Engagement */}
        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
          <p className="font-bold text-slate-900 mb-4">Bagikan artikel ini:</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-6 py-2 bg-slate-100 rounded-full font-bold text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <FaLink /> Copy Link
            </button>
            <a
              href={`https://wa.me/?text=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
