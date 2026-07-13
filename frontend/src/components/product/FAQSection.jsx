import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ faqs = [] }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
      <div className="mb-8 text-center md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071b3b]">
          Pertanyaan Umum
        </h2>
      </div>

      <div className="mx-auto max-w-3xl">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-[#071b3b]"
            >
              <span className="pr-4">{item.question}</span>
              <span className="text-xl text-red-600">
                {open === i ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-6 pb-5 leading-relaxed text-slate-600"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
