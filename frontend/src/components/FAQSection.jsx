// components/FAQSection.jsx
import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: "Berapa lama waktu pengerjaan ambulans?",
      a: "Proses karoseri rata-rata memakan waktu 30-45 hari kerja tergantung tingkat kustomisasi.",
    },
    {
      q: "Apakah bisa custom interior?",
      a: "Tentu, kami melayani desain interior sesuai kebutuhan medis spesifik rumah sakit Anda.",
    },
  ];

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          Informasi praktis
        </p>
        <h2 className="text-3xl font-bold text-[#071b3b] md:text-4xl">
          Pertanyaan Umum
        </h2>
      </div>
      {faqs.map((item, i) => (
        <div key={i} className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-[#071b3b]"
          >
            {item.q} <span className="ml-5 text-xl text-red-600">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p className="px-6 pb-5 leading-relaxed text-slate-600">{item.a}</p>}
        </div>
      ))}
    </section>
  );
}
