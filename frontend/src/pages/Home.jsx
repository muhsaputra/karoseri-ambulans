import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import TrustSection from "../components/TrustSection";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import FAQSection from "../components/FAQSection";
import RequestQuoteSection from "../components/RequestQuoteSection";
import Footer from "../components/Footer";
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

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TrustSection />
        <section className="bg-slate-900 py-20 px-8 rounded-[2rem] max-w-7xl mx-auto text-white text-center my-16 shadow-2xl">
          <MdConstruction className="text-blue-500 text-5xl mx-auto mb-6" />
          <h4 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Spesifikasi Khusus?
          </h4>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Tim engineering kami siap membantu merancang layout interior,
            kelistrikan, dan sistem medis sesuai kebutuhan operasional rumah
            sakit Anda.
          </p>
          <button className="bg-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:scale-105">
            Konsultasi Custom Build
          </button>
        </section>
        <ProductSection />
        {/* Custom Build CTA Section */}
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
        <FAQSection /> {/* Edukasi & SEO */}
      </main>
    </div>
  );
};

// PASTIKAN BARIS INI ADA DI PALING BAWAH
export default Home;
