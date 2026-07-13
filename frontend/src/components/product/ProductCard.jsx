import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdCheckCircle, MdArrowForward } from "react-icons/md";

import { formatCurrencyIDR } from "./utils";

export default function ProductCard({ product }) {
  const desc = product.shortDescription || "";
  const startPrice =
    typeof product.startingPrice === "number" ? product.startingPrice : 0;

  const whatsappHref = `https://wa.me/628111222183?text=${encodeURIComponent(
    (product.whatsappText || "").replace("${name}", product.name),
  )}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-red-200 hover:shadow-2xl hover:shadow-[#071b3b]/10"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.gallery?.[0] || product.images?.exterior?.[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#071b3b] border border-white/30">
          {product.category}
        </span>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-extrabold text-[#071b3b] group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {desc}
        </p>

        <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Mulai dari
          </p>
          <p className="text-lg font-extrabold text-[#071b3b]">
            {formatCurrencyIDR(startPrice)}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            3 Key Highlights
          </p>
          <div className="mt-3 grid grid-cols-1 gap-2">
            {(product.highlights || []).slice(0, 3).map((h, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 border border-red-100"
              >
                <MdCheckCircle className="text-red-600" />
                <span className="leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            to={`/produk/${product.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-bold text-[#071b3b] transition-all hover:border-red-200 hover:text-red-600"
          >
            Detail Produk
            <MdArrowForward />
          </Link>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#071b3b] px-5 py-3 font-bold text-white transition-all hover:bg-red-600"
          >
            Konsultasi WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}
