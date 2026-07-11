import { motion } from "framer-motion";
import {
  MdDesignServices,
  MdConstruction,
  MdCheckCircle,
  MdLocalShipping,
  MdGppGood,
  MdHandshake,
  MdPrecisionManufacturing,
} from "react-icons/md";

// Components
import AboutSection from "../components/AboutSection";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";

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

const PRINCIPLES = [
  {
    icon: MdGppGood,
    title: "Keselamatan sebagai standar",
    desc: "Setiap detail interior, kelistrikan, dan peralatan dirancang untuk mendukung operasional yang aman.",
  },
  {
    icon: MdPrecisionManufacturing,
    title: "Presisi yang dapat dipertanggungjawabkan",
    desc: "Kami bekerja dengan spesifikasi yang jelas, kontrol mutu berlapis, dan dokumentasi serah terima.",
  },
  {
    icon: MdHandshake,
    title: "Kemitraan jangka panjang",
    desc: "Komunikasi yang transparan dari konsultasi awal hingga dukungan setelah unit digunakan.",
  },
];

const MILESTONES = [
  [
    "01",
    "Memahami",
    "Memetakan kebutuhan medis, alur kerja kru, dan basis kendaraan.",
  ],
  [
    "02",
    "Menerjemahkan",
    "Menyusun desain yang ergonomis, aman, serta sesuai anggaran.",
  ],
  [
    "03",
    "Mewujudkan",
    "Membangun unit dengan detail yang siap menghadapi kondisi lapangan.",
  ],
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Seo title="Tentang Kami" />
      {/* 1. Page Header (Judul + Breadcrumb) */}
      <PageHeader title="Tentang Kami" bgImage={AboutBg} />

      {/* 2. Profil Perusahaan */}
      <AboutSection />

      <section className="overflow-hidden bg-[#071b3b] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-300">
              Cara kami bekerja
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Membangun kepercayaan sebelum membangun unit.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-slate-300">
              Ambulans bukan sekadar kendaraan. Ia adalah ruang kerja kritis
              yang harus mendukung keputusan cepat, pergerakan aman, dan
              kesiapan setiap saat.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {MILESTONES.map(([number, title, desc]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-2xl font-black text-red-400">{number}</p>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Prinsip yang kami pegang
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-[#071b3b] md:text-5xl">
              Kualitas yang terlihat dan yang bekerja di baliknya.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-[#071b3b]/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071b3b] text-2xl text-white transition-colors group-hover:bg-red-600">
                  <principle.icon />
                </div>
                <h3 className="mt-8 text-xl font-bold text-[#071b3b]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {principle.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Alur Kerja (Our Process) - Updated Professional UI */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-red-600">
              Proses Kami
            </h2>
            <h3 className="text-4xl font-bold text-[#071b3b]">
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
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 text-6xl font-black text-[#071b3b]/5 transition-opacity group-hover:opacity-100">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071b3b] text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                  <step.icon />
                </div>

                {/* Content */}
                <h4 className="mb-3 text-xl font-bold text-[#071b3b] transition-colors group-hover:text-red-600">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.desc}
                </p>

                {/* Decorative line at bottom */}
                <div className="mt-6 h-1 w-12 rounded-full bg-red-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 text-center sm:px-8">
        {/* Background dengan efek gradient halus */}
        <div className="absolute inset-0 bg-[#071b3b]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
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
            <span className="bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">
              Ambulans Terbaik?
            </span>
          </h3>

          <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            Konsultasikan kebutuhan spesifikasi unit Anda dengan tim ahli kami
            sekarang. Kami siap memberikan solusi manufaktur yang presisi, aman,
            dan tepat waktu.
          </p>

          <motion.a
            href="https://wa.me/6281234567890?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20konsultasi%20kebutuhan%20ambulans."
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 rounded-full bg-red-600 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-red-500"
          >
            Mulai Konsultasi Sekarang
            {/* Ikon panah kecil yang bergerak saat dihover */}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
