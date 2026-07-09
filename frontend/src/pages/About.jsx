import React from "react";
import { motion } from "framer-motion";
import {
  MdVerified,
  MdBuild,
  MdPeople,
  MdTrendingUp,
  MdHistory,
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdDesignServices,
  MdConstruction,
  MdCheckCircle,
  MdLocalShipping,
  MdGavel,
} from "react-icons/md";

// Components
import AboutSection from "../components/AboutSection";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/assets1.webp";

const PROCESS = [
  {
    icon: MdDesignServices,
    title: "Konsultasi",
    desc: "Diskusi kebutuhan spesifikasi medis.",
  },
  {
    icon: MdConstruction,
    title: "Fabrikasi",
    desc: "Pengerjaan interior & kelistrikan.",
  },
  {
    icon: MdCheckCircle,
    title: "Quality Control",
    desc: "Uji fungsi & keamanan ketat.",
  },
  {
    icon: MdLocalShipping,
    title: "Serah Terima",
    desc: "Dokumentasi & unit siap pakai.",
  },
];

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Page Header (Judul + Breadcrumb) */}
      <PageHeader title="Tentang Kami" bgImage={AboutBg} />

      {/* 2. Profil Perusahaan */}
      <AboutSection />

      {/* 3. Alur Kerja (Our Process) - Updated Professional UI */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">
              Proses Kami
            </h2>
            <h3 className="text-4xl font-bold text-slate-900">
              Alur Kerja Profesional
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 group cursor-default"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 text-6xl font-black text-blue-50 opacity-10 group-hover:opacity-20 transition-opacity">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-600/20">
                  <step.icon />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.desc}
                </p>

                {/* Decorative line at bottom */}
                <div className="w-12 h-1 bg-blue-600 mt-6 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Akhir - High End Design */}
      <section className="relative py-24 px-8 text-center overflow-hidden">
        {/* Background dengan efek gradient halus */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
            Siap Membangun Armada <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Ambulans Terbaik?
            </span>
          </h3>

          <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            Konsultasikan kebutuhan spesifikasi unit Anda dengan tim ahli kami
            sekarang. Kami siap memberikan solusi manufaktur yang presisi, aman,
            dan tepat waktu.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] transition-all duration-300"
          >
            Mulai Konsultasi Sekarang
            {/* Ikon panah kecil yang bergerak saat dihover */}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
