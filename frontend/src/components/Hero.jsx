import { motion } from "framer-motion";
import HeroImage from "../assets/img/Beranda.webp";
import { Link } from "react-router-dom";

const STATS = [
  {
    value: "100+",
    label: "Unit ambulans telah beroperasi di seluruh Indonesia.",
  },
  { value: "100%", label: "Kepatuhan standar keamanan medis & Kemenkes." },
  { value: "10+", label: "Tahun keahlian manufaktur karoseri khusus medis." },
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
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#071b3b] text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          className="w-full h-full object-cover scale-105"
          alt="Ambulans Karoseri"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b3b] via-[#071b3b]/85 to-[#071b3b]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071b3b] via-transparent to-[#071b3b]/30" />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-20 pt-32 md:pt-40 pb-16 flex flex-col justify-end min-h-screen">
        <div className="max-w-4xl mb-20">
          {/* Animated Headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-red-300 md:text-sm"
          >
            Karoseri ambulans profesional
          </motion.p>
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 text-5xl font-semibold leading-[0.92] tracking-tighter md:text-7xl lg:text-8xl"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={`inline-block mr-4 ${
                  ["Ambulans", "Masa", "Depan"].includes(word)
                    ? "text-red-500"
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
            className="mb-10 max-w-xl text-lg font-light leading-relaxed text-slate-200 md:text-xl"
          >
            Mitra tepercaya dalam modifikasi kendaraan medis. Kami menggabungkan
            standar keamanan internasional dengan ergonomi tingkat tinggi.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              to="/produk"
              className="rounded-full bg-red-600 px-8 py-4 text-center font-bold shadow-lg shadow-red-950/30 transition-all hover:-translate-y-1 hover:bg-red-500 active:scale-95"
            >
              Lihat Katalog Unit
            </Link>
            <a
              href="http://wa.me/6285178496746?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20konsultasi%20teknis."
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-bold text-white transition-all hover:border-white hover:bg-white/10 active:scale-95"
            >
              Konsultasi Teknis
            </a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 gap-12 border-t border-white/15 pt-10 md:grid-cols-4"
        >
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="cursor-default group">
                <div className="mb-2 text-4xl font-bold transition-colors group-hover:text-red-400">
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
