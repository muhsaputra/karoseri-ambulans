import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// PENTING: Ganti ke react-icons/lu agar tidak error
import { LuX, LuArrowRight } from "react-icons/lu";

const PRODUCTS = [
  {
    category: "Transport",
    title: "Ambulans Transport",
    desc: "Unit standar untuk pemindahan pasien non-gawat darurat dengan kenyamanan maksimal.",
    image:
      "https://images.unsplash.com/photo-1587732606368-80e9275031b2?q=80&w=800&auto=format&fit=crop",
    specs: [
      "Sasis standar",
      "Interior fiber",
      "AC double blower",
      "Jok perawat",
    ],
  },
  {
    category: "Emergency",
    title: "Ambulans Gawat Darurat",
    desc: "Dilengkapi peralatan medis canggih untuk penanganan kritis di lapangan.",
    image:
      "https://images.unsplash.com/photo-1579684385327-444458f31007?q=80&w=800&auto=format&fit=crop",
    specs: [
      "Stretcher scoop",
      "Oxygen system",
      "Emergency light",
      "Sirene multi-suara",
    ],
  },
  {
    category: "Advanced",
    title: "Ambulans ICU",
    desc: "Mobile ICU dengan teknologi pendukung kehidupan standar rumah sakit.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    specs: ["Ventilator", "Patient Monitor", "Defibrillator", "Suction pump"],
  },
];

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="mb-16">
          <h2 className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Galeri Unit
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
            Katalog Kendaraan Medis
          </h3>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative cursor-pointer group overflow-hidden rounded-3xl"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 flex flex-col justify-end transition-opacity duration-300">
                <h4 className="text-white text-2xl font-bold">
                  {product.title}
                </h4>
                <p className="text-blue-400 font-medium">{product.category}</p>
                <div className="mt-4 flex items-center gap-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Lihat Detail <LuArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal (Overlay) */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-12 relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <LuX size={20} />
              </button>

              <img
                src={selectedProduct.image}
                className="w-full h-64 object-cover rounded-2xl mb-8"
                alt={selectedProduct.title}
              />

              <span className="text-blue-600 font-bold uppercase text-xs tracking-wider">
                {selectedProduct.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {selectedProduct.title}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {selectedProduct.desc}
              </p>

              <div className="border-t pt-8">
                <h5 className="font-bold mb-4">Spesifikasi Utama:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProduct.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-lg"
                    >
                      <LuCheckCircle2
                        size={18}
                        className="text-blue-600 shrink-0"
                      />
                      <span className="text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Button */}
              <button className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]">
                Hubungi Sales Sekarang
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
