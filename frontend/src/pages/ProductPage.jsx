import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdArrowForward,
  MdCheckCircle,
  MdLocalShipping,
  MdShield,
  MdSpeed,
  MdConstruction,
} from "react-icons/md";
import PageHeader from "../components/PageHeader";
import ProductBg from "../assets/assets1.webp"; // Pastikan path ini benar

const PRODUCTS = [
  {
    category: "Transport",
    title: "Ambulans Transport",
    desc: "Unit standar untuk pemindahan pasien non-gawat darurat dengan efisiensi maksimal.",
    image:
      "https://images.unsplash.com/photo-1587732606368-80e9275031b2?q=80&w=800&auto=format&fit=crop",
    specs: ["Sasis Standar", "Interior Fiber", "AC Double Blower"],
  },
  {
    category: "Emergency",
    title: "Ambulans Gawat Darurat",
    desc: "Dilengkapi peralatan medis canggih untuk penanganan kondisi kritis di lapangan.",
    image:
      "https://images.unsplash.com/photo-1579684385327-444458f31007?q=80&w=800&auto=format&fit=crop",
    specs: ["Stretcher Scoop", "Oxygen System", "Sirene Multi-Tone"],
  },
  {
    category: "Advanced",
    title: "Ambulans ICU",
    desc: "Mobile ICU dengan standar rumah sakit untuk penanganan pasien intensif.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    specs: ["Ventilator", "Patient Monitor", "Defibrillator"],
  },
];

const CATEGORIES = ["Semua", "Transport", "Emergency", "Advanced"];

// --- Sub-components for Professional Layout ---

const IntroSection = () => (
  <section className="text-center py-20 px-8 max-w-3xl mx-auto">
    <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
      Solusi Kendaraan Medis
    </h2>
    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
      Presisi dalam Setiap Inci, Aman untuk Setiap Nyawa
    </h3>
    <p className="text-lg text-slate-600 leading-relaxed">
      Setiap unit ambulans kami dirancang dengan standar medis tertinggi,
      mengintegrasikan teknologi otomotif terkini dengan kebutuhan esensial
      fasilitas kesehatan di seluruh Indonesia.
    </p>
  </section>
);

const ComplianceSection = () => (
  <section className="flex flex-wrap justify-center gap-6 md:gap-12 py-10 border-y border-slate-100 bg-white my-8">
    {[
      { label: "Tersertifikasi Kemenkes", icon: MdShield },
      { label: "Standar ISO 9001", icon: MdCheckCircle },
      { label: "Material Anti-Bakteri", icon: MdLocalShipping },
      { label: "Garansi 2 Tahun", icon: MdSpeed },
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-2 text-slate-500 font-medium text-sm"
      >
        <item.icon className="text-blue-500 text-lg" /> {item.label}
      </div>
    ))}
  </section>
);

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts =
    activeCategory === "Semua"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader title="Katalog Produk" bgImage={ProductBg} />

      <IntroSection />
      <ComplianceSection />

      <div className="max-w-7xl mx-auto px-8 pb-20">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.title}
                className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={product.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <span className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    {product.category}
                  </span>
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h4>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold"
                      >
                        <MdCheckCircle className="text-blue-500" /> {spec}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/20">
                    Hubungi Sales <MdArrowForward />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Custom Build CTA Section */}
      <section className="bg-slate-900 py-20 px-8 rounded-[2rem] max-w-7xl mx-auto text-white text-center my-16 shadow-2xl">
        <MdConstruction className="text-blue-500 text-5xl mx-auto mb-6" />
        <h4 className="text-3xl md:text-4xl font-bold mb-4">
          Butuh Spesifikasi Khusus?
        </h4>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Tim engineering kami siap membantu merancang layout interior,
          kelistrikan, dan sistem medis sesuai kebutuhan operasional rumah sakit
          Anda.
        </p>
        <button className="bg-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:scale-105">
          Konsultasi Custom Build
        </button>
      </section>
    </div>
  );
}
