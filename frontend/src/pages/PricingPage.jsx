import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdCheck,
  MdInfoOutline,
  MdDownload,
  MdAdd,
  MdRemove,
  MdRequestQuote,
  MdVerifiedUser,
  MdBuild,
} from "react-icons/md";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";

const PLANS = [
  {
    name: "Transport Unit",
    price: "Ambulance Medis",
    desc: "Solusi efisien untuk pemindahan pasien non-gawat darurat.",
    features: [],
    highlight: false,
  },
  {
    name: "Transport Unit",
    price: "Ambulance Jenazah",
    desc: "Standar operasional rumah sakit untuk penanganan kondisi kritis.",
    features: [],
    highlight: true,
  },
  {
    name: "Part Tambahan",
    price: "Ambulance Multifungsi",
    desc: "Mobile ICU dengan teknologi medis terkini untuk pasien intensif.",
    features: [],
    highlight: false,
  },
];

const PRICE_FACTORS = [
  {
    icon: MdBuild,
    title: "Basis kendaraan",
    desc: "Pilihan sasis dan kondisi pengadaan kendaraan.",
  },
  {
    icon: MdRequestQuote,
    title: "Konfigurasi medis",
    desc: "Alat medis, kelistrikan, dan kebutuhan interior khusus.",
  },
  {
    icon: MdVerifiedUser,
    title: "Dokumen & pengujian",
    desc: "Legalitas, kontrol mutu, dan kelengkapan serah terima.",
  },
];

const FAQS = [
  [
    "Apakah harga sudah termasuk kendaraan?",
    "Estimasi menyesuaikan skema pengadaan yang dipilih. Tim kami akan menjelaskan komponen kendaraan dan karoseri dalam quotation formal.",
  ],

  [
    "Bisakah spesifikasi disesuaikan dengan anggaran?",
    "Bisa. Kami membantu menyusun prioritas kebutuhan medis, konfigurasi interior, dan opsi alat agar sesuai target anggaran Anda.",
  ],
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo title="Estimasi Investasi" />
      <PageHeader title="Estimasi Investasi" bgImage={AboutBg} />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Transparansi Harga
          </p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#071b3b] md:text-5xl">
            Investasi Terbaik untuk Fasilitas Kesehatan
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Estimasi investasi kami mencakup seluruh aspek manufaktur, mulai
            dari legalitas, peralatan medis, hingga garansi purna jual. Kami
            memberikan penawaran formal yang menyesuaikan anggaran spesifik
            instansi Anda.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col rounded-[2rem] border-2 p-8 transition-all duration-300 ${
                plan.highlight
                  ? "border-red-600 bg-white shadow-2xl shadow-red-600/10"
                  : "border-slate-200 bg-white hover:border-red-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Paling Diminati
                </div>
              )}

              <h4 className="mb-2 text-xl font-bold text-[#071b3b]">
                {plan.name}
              </h4>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Estimasi investasi
              </p>
              <div className="mb-4 text-3xl font-extrabold tracking-tight text-red-600">
                {plan.price}
              </div>
              <p className="text-slate-500 text-sm mb-8">{plan.desc}</p>

              {/* <ul className="mb-8 space-y-4 border-y border-slate-100 py-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <MdCheck className="shrink-0 text-lg text-red-600" />{" "}
                    {feature}
                  </li>
                ))}
              </ul> */}

              <a
                href={`http://wa.me/6285178496746?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20meminta%20penawaran%20formal%20untuk%20${encodeURIComponent(plan.name)}.`}
                target="_blank"
                rel="noreferrer"
                className={`mt-auto flex w-full items-center justify-center rounded-2xl py-4 font-bold transition-all ${
                  plan.highlight
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 hover:bg-red-700"
                    : "bg-[#071b3b] text-white hover:bg-red-600"
                }`}
              >
                Konsultasi Harga
              </a>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 rounded-[2rem] border border-slate-200 bg-white p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Yang membentuk quotation
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#071b3b] md:text-4xl">
                Angka yang jelas, keputusan yang lebih tenang.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                Kami menyusun quotation berdasarkan kebutuhan operasional Anda,
                bukan paket generik. Dengan begitu, setiap komponen memiliki
                alasan dan fungsi yang jelas.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {PRICE_FACTORS.map((factor) => (
                <article
                  key={factor.title}
                  className="rounded-2xl bg-slate-50 p-5"
                >
                  <factor.icon className="text-3xl text-red-600" />
                  <h3 className="mt-7 font-bold text-[#071b3b]">
                    {factor.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {factor.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Disclaimer & Tools */}
        <section className="mt-16 flex justify-center">
          <div className="flex max-w-3xl items-start gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <MdInfoOutline className="shrink-0 text-3xl text-red-600" />
            <div>
              <h2 className="mb-2 font-bold text-[#071b3b]">
                Informasi Penting
              </h2>
              <p className="text-sm text-slate-600 italic leading-relaxed">
                Harga adalah estimasi awal. Harga dapat berubah sesuai kenaikan
                harga material sasis, fluktuasi kurs alat medis, dan spesifikasi
                kustom. Hubungi tim kami untuk mendapatkan penawaran resmi
                (Quotation) yang berlaku untuk pengajuan anggaran.
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col items-center justify-center rounded-3xl bg-[#071b3b] p-8 text-center text-white">
            <h2 className="mb-2 font-bold">Dapatkan Proposal Lengkap</h2>
            <p className="text-slate-400 text-sm mb-6">
              Dapatkan detail spesifikasi lengkap dalam format PDF.
            </p>
            <a
              href="http://wa.me/6285178496746?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20mendapatkan%20katalog%20dan%20daftar%20harga."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-bold text-white transition-colors hover:bg-red-500"
            >
              <MdDownload /> Minta katalog PDF
            </a>
          </div> */}
        </section>

        <section className="mx-auto mt-24 max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Sebelum meminta quotation
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#071b3b] md:text-4xl">
              Pertanyaan yang sering diajukan
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <article
                  key={question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-bold text-[#071b3b]"
                    aria-expanded={isOpen}
                  >
                    {question}
                    {isOpen ? (
                      <MdRemove className="shrink-0 text-xl text-red-600" />
                    ) : (
                      <MdAdd className="shrink-0 text-xl text-red-600" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5 leading-relaxed text-slate-600"
                      >
                        {answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
