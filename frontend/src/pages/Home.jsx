import { Suspense, lazy } from "react";
import HeroSection from "../components/Hero";
import Seo from "../components/Seo";
import { motion } from "framer-motion";

const AboutSection = lazy(() => import("../components/AboutSection"));
const TrustSection = lazy(() => import("../components/TrustSection"));
const ProductSection = lazy(() => import("../components/ProductSection"));
const FAQSection = lazy(() => import("../components/FAQSection"));
const RequestQuoteSection = lazy(
  () => import("../components/RequestQuoteSection"),
);
const PortfolioSection = lazy(() =>
  import("../components/ShowcaseSections").then((mod) => ({
    default: mod.PortfolioSection,
  })),
);
const SocialProofSection = lazy(() =>
  import("../components/ShowcaseSections").then((mod) => ({
    default: mod.SocialProofSection,
  })),
);

import {
  MdDesignServices,
  MdConstruction,
  MdCheckCircle,
  MdLocalShipping,
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
      <Seo title="Karoseri Ambulans Profesional" />
      <main>
        <HeroSection />
        <Suspense
          fallback={
            <div className="mx-auto max-w-7xl px-5 py-16 text-center text-slate-600">
              Memuat konten...
            </div>
          }
        >
          <AboutSection />
          <TrustSection />
          <section className="mx-auto my-16 max-w-7xl px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#071b3b] px-7 py-14 text-center text-white shadow-2xl shadow-[#071b3b]/20 sm:px-12 md:py-20">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-600/25 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-3xl shadow-lg shadow-red-950/30">
                  <MdConstruction />
                </div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-red-300">
                  Dirancang sesuai kebutuhan Anda
                </p>
                <h4 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                  Butuh Spesifikasi Khusus?
                </h4>
                <p className="mx-auto mb-10 mt-5 max-w-xl leading-relaxed text-slate-300">
                  Tim engineering kami siap merancang layout interior,
                  kelistrikan, dan sistem medis yang tepat untuk operasional
                  Anda.
                </p>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20konsultasi%20Custom%20Build."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 font-bold shadow-lg shadow-red-950/30 transition-all hover:-translate-y-1 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-400/30"
                >
                  Konsultasi Custom Build
                </a>
              </div>
            </div>
          </section>
          <ProductSection />
          <PortfolioSection />
          {/* <SocialProofSection /> */}
          <section className="border-y border-slate-100 bg-slate-50 py-20 px-5 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="mb-3 text-sm font-bold tracking-[0.18em] uppercase text-red-600">
                  Proses Kami
                </p>
                <h3 className="text-4xl font-bold tracking-tight text-[#071b3b] md:text-5xl">
                  Alur Kerja Profesional
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-slate-600">
                  Transparan dari konsultasi awal hingga unit siap digunakan.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PROCESS.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-[#071b3b]/10 group"
                  >
                    <div className="absolute -top-5 -right-3 text-7xl font-black text-[#071b3b]/[0.045] transition-colors group-hover:text-red-600/[0.08]">
                      0{i + 1}
                    </div>

                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071b3b] text-3xl text-white shadow-lg shadow-[#071b3b]/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                      <step.icon />
                    </div>

                    <h4 className="mb-3 text-xl font-bold text-[#071b3b] transition-colors group-hover:text-red-600">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.desc}
                    </p>

                    <div className="mt-6 h-1 w-12 rounded-full bg-red-600 transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <FAQSection />
          <RequestQuoteSection />
        </Suspense>
      </main>
    </div>
  );
};

// PASTIKAN BARIS INI ADA DI PALING BAWAH
export default Home;
