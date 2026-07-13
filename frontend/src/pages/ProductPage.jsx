import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  MdDirectionsCar,
  MdConstruction,
  MdPeople,
  MdMonitorHeart,
} from "react-icons/md";

import PageHeader from "../components/PageHeader";
import ProductBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";

import { getProducts } from "../data/products";
import ProductCard from "../components/product/ProductCard";

const CATEGORIES = ["Semua", "Ambulance", "Mobil Jenazah", "Mobil Multifungsi"];

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
  const products = useMemo(() => getProducts(), []);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const [showAllProducts, setShowAllProducts] = useState(false);
  const visibleProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo title="Katalog Produk" />
      <PageHeader title="Katalog Produk" bgImage={ProductBg} />

      <IntroSection />
      {/* <ComplianceSection /> */}

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
                aria-pressed={activeCategory === cat}
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
            {filteredProducts.length === 0 ? (
              <div className="col-span-full rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
                <p className="text-lg font-semibold text-[#071b3b]">
                  Belum ada unit untuk kategori ini.
                </p>
                <p className="mt-2 text-sm">
                  Pilih kategori lain atau hubungi tim kami untuk kebutuhan
                  khusus.
                </p>
              </div>
            ) : (
              visibleProducts.map((product) => (
                <div key={product.slug}>
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {!showAllProducts && filteredProducts.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProducts(true)}
              className="rounded-full bg-[#071b3b] px-10 py-4 font-bold text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-red-500/20"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}

        {showAllProducts && filteredProducts.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProducts(false)}
              className="rounded-full bg-slate-100 px-10 py-4 font-bold text-[#071b3b] shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50"
            >
              Lihat Lebih Sedikit
            </button>
          </div>
        )}
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
    </div>
  );
}
