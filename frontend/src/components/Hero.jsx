import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroImage from "../assets/bg.png";

const STATS = [
  {
    value: "500+",
    label: "Unit ambulans telah beroperasi di seluruh Indonesia.",
  },
  { value: "100%", label: "Kepatuhan standar keamanan medis & Kemenkes." },
  { value: "15+", label: "Tahun keahlian manufaktur karoseri khusus medis." },
];

// --- VARIANT ANIMASI ---
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  // Memecah teks menjadi array kata
  const titleText = "Presisi untuk Ambulans Masa Depan";
  const words = titleText.split(" ");

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <Navbar />

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          className="w-full h-full object-cover scale-105"
          alt="Ambulans Karoseri"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-20 pt-32 md:pt-40 pb-16 flex flex-col justify-end min-h-screen">
        <div className="max-w-4xl mb-20">
          {/* Animated Headline */}
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-medium leading-[0.9] tracking-tighter mb-8"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={`inline-block mr-4 ${
                  ["Ambulans", "Masa", "Depan"].includes(word)
                    ? "text-blue-500"
                    : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-300 mb-12 max-w-xl leading-relaxed font-light"
          >
            Mitra tepercaya dalam modifikasi kendaraan medis. Kami menggabungkan
            standar keamanan internasional dengan ergonomi tingkat tinggi.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-4"
          >
            <button className="bg-white text-slate-950 px-8 py-4 font-bold hover:bg-gray-100 transition-all active:scale-95">
              Lihat Katalog Unit
            </button>
            <button className="border border-white/20 text-white px-8 py-4 font-bold hover:bg-white/10 transition-all active:scale-95">
              Konsultasi Teknis
            </button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12"
        >
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="cursor-default group">
                <div className="text-4xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
