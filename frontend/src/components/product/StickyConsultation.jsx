import { useMemo } from "react";
import { motion } from "framer-motion";
import { MdWhatsapp } from "react-icons/md";

import { formatCurrencyIDR } from "./utils";

export default function StickyConsultation({ product }) {
  const whatsappHref = useMemo(() => {
    const text = (product?.whatsappText || "").replace(
      "${name}",
      product?.name || "",
    );
    return `https://wa.me/628111222183?text=${encodeURIComponent(text)}`;
  }, [product]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-4 left-0 right-0 z-[80] px-4 pointer-events-none md:bottom-8"
    >
      <div className="mx-auto w-full max-w-6xl pointer-events-auto">
        <div className="rounded-[2rem] bg-white/95 backdrop-blur border border-slate-200 shadow-2xl p-3 md:p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-600">
                Siap Diskusi?
              </p>
              <p className="mt-1 text-sm font-bold text-[#071b3b]">
                {product?.name}
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-red-500 hover:shadow-red-500/20"
              >
                <MdWhatsapp /> Konsultasi WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
