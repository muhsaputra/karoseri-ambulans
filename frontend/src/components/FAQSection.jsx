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
    <section className="py-20 max-w-2xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Pertanyaan Umum</h2>
      {faqs.map((item, i) => (
        <div key={i} className="mb-4 border-b border-slate-200">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-4 font-bold flex justify-between"
          >
            {item.q} <span>{open === i ? "-" : "+"}</span>
          </button>
          {open === i && <p className="pb-4 text-slate-600">{item.a}</p>}
        </div>
      ))}
    </section>
  );
}
