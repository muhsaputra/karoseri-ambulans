import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdArrowForward,
  MdCheckCircle,
  MdLocalShipping,
  MdShield,
  MdSpeed,
  MdConstruction,
  MdClose,
  MdArrowOutward,
  MdPeople,
  MdMonitorHeart,
  MdDirectionsCar,
} from "react-icons/md";
import PageHeader from "../components/PageHeader";
import ProductBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";

const PRODUCTS = [
  {
    category: "Transport",
    title: "Ambulans Transport",
    desc: "Unit standar untuk pemindahan pasien non-gawat darurat dengan efisiensi maksimal.",
    image:
      "https://images.unsplash.com/photo-1587732606368-80e9275031b2?q=80&w=800&auto=format&fit=crop",
    specs: ["Sasis Standar", "Interior Fiber", "AC Double Blower"],
    idealFor: "Rujukan terjadwal dan pemindahan pasien yang stabil.",
    capacity: "2–3 kru medis",
    leadTime: "Estimasi 30–45 hari kerja",
  },
  {
    category: "Emergency",
    title: "Ambulans Gawat Darurat",
    desc: "Dilengkapi peralatan medis canggih untuk penanganan kondisi kritis di lapangan.",
    image:
      "https://images.unsplash.com/photo-1579684385327-444458f31007?q=80&w=800&auto=format&fit=crop",
    specs: ["Stretcher Scoop", "Oxygen System", "Sirene Multi-Tone"],
    idealFor: "Respons medis cepat dan penanganan kondisi kritis di lapangan.",
    capacity: "3–4 kru medis",
    leadTime: "Estimasi 45–60 hari kerja",
  },
  {
    category: "Advanced",
    title: "Ambulans ICU",
    desc: "Mobile ICU dengan standar rumah sakit untuk penanganan pasien intensif.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    specs: ["Ventilator", "Patient Monitor", "Defibrillator"],
    idealFor: "Perawatan intensif dengan dukungan peralatan medis lanjutan.",
    capacity: "3–4 kru medis",
    leadTime: "Estimasi sesuai konfigurasi",
  },
];

const CATEGORIES = ["Semua", "Transport", "Emergency", "Advanced"];

// --- Sub-components for Professional Layout ---

const IntroSection = () => (
  <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
      Solusi Kendaraan Medis
    </p>
    <h3 className="mb-6 text-4xl font-extrabold tracking-tight text-[#071b3b] md:text-5xl">
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
  <section className="my-8 border-y border-slate-100 bg-white py-8">
    <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-5 px-5 md:gap-x-14">
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
          <item.icon className="text-red-600 text-lg" /> {item.label}
        </div>
      ))}
    </div>
  </section>
);

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "Semua"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo title="Katalog Produk" />
      <PageHeader title="Katalog Produk" bgImage={ProductBg} />

      <IntroSection />
      <ComplianceSection />

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        {/* Filter Bar */}
        <div className="mb-12 flex flex-col items-center justify-between gap-5 border-b border-slate-200 pb-8 md:flex-row">
          <p className="text-sm font-medium text-slate-500">
            <span className="font-bold text-[#071b3b]">
              {filteredProducts.length}
            </span>{" "}
            pilihan unit tersedia
          </p>
          <div className="flex flex-wrap justify-center gap-2 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-slate-600 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
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
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-[#071b3b]/10"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={product.image}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={product.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#071b3b]/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {product.category}
                  </span>
                </div>

                <div className="p-8">
                  <h4 className="mb-3 text-2xl font-extrabold text-[#071b3b] transition-colors group-hover:text-red-600">
                    {product.title}
                  </h4>
                  <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="mb-6 flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                    <MdPeople className="mt-0.5 shrink-0 text-red-600" />
                    <span>
                      <strong className="text-[#071b3b]">Ideal untuk:</strong>{" "}
                      {product.idealFor}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-1 text-xs font-semibold text-red-700"
                      >
                        <MdCheckCircle className="text-red-500" /> {spec}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="rounded-2xl border border-slate-200 py-3.5 text-sm font-bold text-[#071b3b] transition-colors hover:border-red-300 hover:text-red-600"
                    >
                      Detail unit
                    </button>
                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20Karoseri%20Ambulans%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(product.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1 rounded-2xl bg-[#071b3b] py-3.5 text-sm font-bold text-white transition-all hover:bg-red-600"
                    >
                      Konsultasi <MdArrowForward />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Memilih unit yang tepat
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#071b3b]">
              Mulai dari kebutuhan operasional, bukan sekadar tipe unit.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                MdDirectionsCar,
                "Rute dan frekuensi",
                "Tentukan pola penggunaan unit: rujukan rutin, respons darurat, atau layanan intensif.",
              ],
              [
                MdPeople,
                "Komposisi kru",
                "Susun kebutuhan ruang kerja bagi dokter, perawat, pengemudi, dan pendamping pasien.",
              ],
              [
                MdMonitorHeart,
                "Tingkat dukungan medis",
                "Pilih konfigurasi peralatan berdasarkan standar layanan dan protokol fasilitas Anda.",
              ],
            ].map(([Icon, title, desc]) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <Icon className="text-3xl text-red-600" />
                <h3 className="mt-8 text-xl font-bold text-[#071b3b]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Build CTA Section */}
      <section className="mx-auto my-16 max-w-7xl rounded-[2rem] bg-[#071b3b] px-8 py-20 text-center text-white shadow-2xl">
        <MdConstruction className="mx-auto mb-6 text-5xl text-red-500" />
        <h4 className="text-3xl md:text-4xl font-bold mb-4">
          Butuh Spesifikasi Khusus?
        </h4>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Tim engineering kami siap membantu merancang layout interior,
          kelistrikan, dan sistem medis sesuai kebutuhan operasional rumah sakit
          Anda.
        </p>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20konsultasi%20Custom%20Build."
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-red-600 px-10 py-4 font-bold shadow-lg shadow-red-950/30 transition-all hover:scale-105 hover:bg-red-500"
        >
          Konsultasi Custom Build
        </a>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[70] flex items-end bg-[#071b3b]/70 p-3 backdrop-blur-sm md:items-center md:justify-center md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Tutup detail unit"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-[#071b3b] shadow-lg"
              >
                <MdClose className="text-xl" />
              </button>
              <div className="grid md:grid-cols-2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="h-64 w-full object-cover md:h-full"
                />
                <div className="p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                    {selectedProduct.category}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-[#071b3b]">
                    {selectedProduct.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {selectedProduct.desc}
                  </p>
                  <dl className="my-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <dt className="text-slate-500">Kapasitas</dt>
                      <dd className="mt-1 font-bold text-[#071b3b]">
                        {selectedProduct.capacity}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3">
                      <dt className="text-slate-500">Pengerjaan</dt>
                      <dd className="mt-1 font-bold text-[#071b3b]">
                        {selectedProduct.leadTime}
                      </dd>
                    </div>
                  </dl>
                  <div className="space-y-2 border-t border-slate-100 pt-5">
                    {selectedProduct.specs.map((spec) => (
                      <p
                        key={spec}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700"
                      >
                        <MdCheckCircle className="text-red-600" /> {spec}
                      </p>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20mendiskusikan%20${encodeURIComponent(selectedProduct.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 font-bold text-white transition-colors hover:bg-red-700"
                  >
                    Diskusikan unit ini <MdArrowOutward />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
