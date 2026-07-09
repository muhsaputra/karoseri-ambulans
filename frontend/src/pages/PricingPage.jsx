import React from "react";
import { motion } from "framer-motion";
import {
  MdCheck,
  MdInfoOutline,
  MdDownload,
  MdArrowForward,
} from "react-icons/md";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/assets1.webp"; // Pastikan path gambar benar

const PLANS = [
  {
    name: "Transport Unit",
    price: "Mulai dari Rp 150 Juta",
    desc: "Solusi efisien untuk pemindahan pasien non-gawat darurat.",
    features: [
      "Sasis Standar",
      "Interior Fiber",
      "Lampu Rotator",
      "Dokumen Legalitas",
      "Sertifikasi Kemenkes",
    ],
    highlight: false,
  },
  {
    name: "Emergency (AGD)",
    price: "Mulai dari Rp 350 Juta",
    desc: "Standar operasional rumah sakit untuk penanganan kondisi kritis.",
    features: [
      "Stretcher Scoop",
      "Oxygen System",
      "Sirene Multi-Tone",
      "Intercom System",
      "Lampu Tindakan",
      "Peralatan Medis Dasar",
    ],
    highlight: true,
  },
  {
    name: "Advanced ICU",
    price: "Custom Quotation",
    desc: "Mobile ICU dengan teknologi medis terkini untuk pasien intensif.",
    features: [
      "Ventilator",
      "Patient Monitor",
      "Defibrillator",
      "Custom Layout",
      "Priority Support",
      "Setup Lengkap",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader title="Estimasi Investasi" bgImage={AboutBg} />

      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
            Transparansi Harga
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
            Investasi Terbaik untuk Fasilitas Kesehatan
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Estimasi investasi kami mencakup seluruh aspek manufaktur, mulai
            dari legalitas, peralatan medis, hingga garansi purna jual. Kami
            memberikan penawaran formal yang menyesuaikan anggaran spesifik
            instansi Anda.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[2rem] border-2 transition-all duration-300 ${
                plan.highlight
                  ? "border-blue-600 bg-white shadow-2xl shadow-blue-600/10"
                  : "border-slate-200 bg-white hover:border-blue-300"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Paling Diminati
                </div>
              )}

              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {plan.name}
              </h4>
              <div className="text-3xl font-extrabold text-blue-600 mb-4">
                {plan.price}
              </div>
              <p className="text-slate-500 text-sm mb-8">{plan.desc}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <MdCheck className="text-green-500 text-lg shrink-0" />{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                Minta Penawaran Formal
              </button>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer & Tools */}
        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex gap-4">
            <MdInfoOutline className="text-blue-600 text-3xl shrink-0" />
            <div>
              <h5 className="font-bold mb-2">Informasi Penting</h5>
              <p className="text-sm text-slate-600 italic leading-relaxed">
                Harga adalah estimasi awal. Harga dapat berubah sesuai kenaikan
                harga material sasis, fluktuasi kurs alat medis, dan spesifikasi
                kustom. Hubungi tim kami untuk mendapatkan penawaran resmi
                (Quotation) yang berlaku untuk pengajuan anggaran.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center">
            <h5 className="font-bold mb-2">Unduh Katalog & Daftar Harga</h5>
            <p className="text-slate-400 text-sm mb-6">
              Dapatkan detail spesifikasi lengkap dalam format PDF.
            </p>
            <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              <MdDownload /> Unduh PDF
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
