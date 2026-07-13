import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function ProductGallery({ images, onOpenLightbox, lightbox }) {
  const list = useMemo(() => images?.filter(Boolean) ?? [], [images]);
  const [active, setActive] = useState(0);

  const canPrev = list.length > 1;

  const prev = () => setActive((v) => (v - 1 + list.length) % list.length);
  const next = () => setActive((v) => (v + 1) % list.length);

  if (!list.length) return null;

  const main = (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
      <img
        src={list[active]}
        alt={`Gallery ${active + 1}`}
        className={
          lightbox
            ? "h-[60vh] w-full object-cover"
            : "h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        }
        loading="lazy"
      />

      {!lightbox && (
        <button
          onClick={onOpenLightbox}
          className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#071b3b] shadow-lg border border-slate-200 hover:bg-white"
        >
          Lihat Galeri
        </button>
      )}

      {lightbox && list.length > 1 && (
        <>
          <button
            onClick={prev}
            disabled={!canPrev}
            aria-label="Sebelumnya"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg border border-slate-200 hover:bg-white disabled:opacity-40"
          >
            <MdChevronLeft className="text-xl" />
          </button>
          <button
            onClick={next}
            disabled={!canPrev}
            aria-label="Berikutnya"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg border border-slate-200 hover:bg-white disabled:opacity-40"
          >
            <MdChevronRight className="text-xl" />
          </button>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
    </div>
  );

  if (lightbox) {
    return <>{main}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {main}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {list.slice(0, 4).map((src, idx) => (
          <button
            key={src}
            onClick={() => setActive(idx)}
            className={
              idx === active
                ? "relative overflow-hidden rounded-xl border-2 border-red-600"
                : "overflow-hidden rounded-xl border border-slate-200 hover:border-red-200"
            }
            aria-label={`Pilih gambar ${idx + 1}`}
          >
            <img
              src={src}
              alt={`Thumb ${idx + 1}`}
              className="h-16 w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {list.length > 4 && (
        <p className="mt-3 text-xs font-bold text-slate-500">
          Menampilkan 4 foto pertama. Buka galeri untuk melihat semuanya.
        </p>
      )}

      <AnimatePresence />
    </motion.div>
  );
}
