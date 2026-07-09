import React from "react";
import { motion } from "framer-motion";
// Migrasi ke react-icons/lu agar sinkron dengan Navbar & Footer
import { LuShieldCheck, LuAward, LuWrench, LuUsers } from "react-icons/lu";
import AboutImage from "../assets/assets1.webp";
import AboutBg from "../assets/assets1.webp";

const FEATURES = [
  {
    icon: LuShieldCheck,
    title: "Sertifikasi Kemenkes",
    desc: "Setiap unit telah memenuhi standar keamanan medis nasional.",
  },
  {
    icon: LuAward,
    title: "Pengalaman 15+ Tahun",
    desc: "Keahlian manufaktur yang teruji dalam ribuan proyek ambulans.",
  },
  {
    icon: LuWrench,
    title: "Presisi Manufaktur",
    desc: "Integrasi teknologi medis dengan sasis kendaraan yang optimal.",
  },
  {
    icon: LuUsers,
    title: "Tim Profesional",
    desc: "Dukungan teknisi ahli yang berfokus pada detail ergonomis.",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-4">
              Tentang Kami
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
              Dedikasi untuk Nyawa di <br /> Setiap Inci Kendaraan
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Selama lebih dari 15 tahun, kami telah menjadi mitra tepercaya
              dalam manufaktur kendaraan medis. Kami memahami bahwa dalam
              situasi gawat darurat, setiap detik sangat berharga. Itulah
              sebabnya setiap unit yang kami rakit mengutamakan presisi,
              ergonomi, dan standar keamanan tertinggi.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((feat, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg h-fit">
                    <feat.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feat.title}</h4>
                    <p className="text-sm text-slate-500">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={AboutImage}
              alt="Workshop Karoseri"
              className="w-full h-full object-cover"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-blue-900/20" />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[250px]">
              <p className="font-bold text-3xl text-blue-600">500+</p>
              <p className="text-sm font-medium text-slate-600">
                Unit Beroperasi di Seluruh Nusantara
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
