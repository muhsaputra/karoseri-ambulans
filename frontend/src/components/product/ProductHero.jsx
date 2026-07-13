import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MdDownload,
  MdOutlineKeyboardArrowRight,
  MdOutlineClose,
  MdArrowBack,
  MdWhatsapp,
} from "react-icons/md";

import { formatCurrencyIDR } from "./utils";
import ProductGallery from "./ProductGallery";
import ProductPricing from "./ProductPricing";

export default function ProductHero({ product }) {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const gallery = useMemo(() => {
    return Array.isArray(product.gallery) && product.gallery.length > 0
      ? product.gallery
      : [product.images?.interior?.[0], product.images?.exterior?.[0]].filter(
          Boolean,
        );
  }, [product]);

  const whatsappHref = `https://wa.me/628111222183?text=${encodeURIComponent(
    (product.whatsappText || "").replace("${name}", product.name),
  )}`;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#071b3b]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-8 pb-10 sm:px-8 md:pt-12 md:pb-16">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-[#071b3b] shadow-sm hover:border-red-200 hover:text-red-600"
          >
            <MdArrowBack /> Kembali
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <ProductGallery
              images={gallery}
              onOpenLightbox={() => setLightboxOpen(true)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-600">
                {product.category}
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#071b3b] sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="mt-7">
                <ProductPricing startingPrice={product.startingPrice} />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 font-bold text-white shadow-lg transition-all hover:bg-red-500 hover:shadow-red-500/20"
                >
                  <MdWhatsapp />
                  CTA WhatsApp
                  <MdOutlineKeyboardArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={product.downloadBrochureUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-[#071b3b] shadow-sm transition-all hover:border-red-200 hover:text-red-600"
                >
                  <MdDownload />
                  {product.downloadBrochureLabel}
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {product.highlights.slice(0, 3).map((h, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700 border border-slate-200"
                  >
                    {h}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs font-bold text-slate-500">
                Harga mulai dapat berubah sesuai konfigurasi & kebutuhan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <p className="text-sm font-bold text-[#071b3b]">Gallery Unit</p>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="rounded-full p-2 hover:bg-slate-100"
                  aria-label="Tutup"
                >
                  <MdOutlineClose className="text-xl" />
                </button>
              </div>
              <ProductGallery images={gallery} lightbox />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
