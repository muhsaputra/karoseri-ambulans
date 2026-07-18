import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MdBuild,
  MdMedicalServices,
  MdGavel,
  MdSupportAgent,
  MdDirectionsCar,
  MdVerified,
  MdArrowOutward,
  MdClose,
  MdTaskAlt,
  MdSchedule,
} from "react-icons/md";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";

const SERVICES = [
  {
    icon: MdBuild,
    title: "Fabrikasi Karoseri",
    desc: "Desain dan perakitan interior ambulans menggunakan material berkualitas tinggi, tahan karat, dan memenuhi standar ergonomi medis.",
    scope: [
      "Perencanaan layout",
      "Interior fiber & kabinet",
      "Sistem kelistrikan",
    ],
    time: "Sesuai kompleksitas unit",
  },
  {
    icon: MdMedicalServices,
    title: "Instalasi Alat Medis",
    desc: "Integrasi sistem medis canggih mulai dari oxygen system, stretcher, hingga peralatan ICU dengan standar keamanan tinggi.",
    scope: ["Oxygen system", "Mounting alat medis", "Uji fungsi integrasi"],
    time: "Terintegrasi dalam proses fabrikasi",
  },
  {
    icon: MdGavel,
    title: "Pengurusan Legalitas",
    desc: "Kami membantu pengurusan surat-surat kendaraan (STNK, BBN, Sertifikat Karoseri) agar unit Anda langsung siap beroperasi.",
    scope: [
      "Dokumen karoseri",
      "Koordinasi pengurusan",
      "Kelengkapan serah terima",
    ],
    time: "Mengikuti alur administrasi terkait",
  },
  {
    icon: MdSupportAgent,
    title: "Layanan Purna Jual",
    desc: "Dukungan teknis berkala dan ketersediaan suku cadang untuk memastikan armada Anda selalu dalam kondisi prima.",
    scope: ["Konsultasi teknis", "Perawatan berkala", "Dukungan suku cadang"],
    time: "Setelah unit beroperasi",
  },
  {
    icon: MdDirectionsCar,
    title: "Modifikasi Khusus",
    desc: "Layanan kustomisasi layout interior sesuai dengan kebutuhan spesifik operasional atau protokol kesehatan instansi Anda.",
    scope: ["Kajian kebutuhan", "Layout custom", "Review konfigurasi"],
    time: "Berdasarkan ruang lingkup modifikasi",
  },
  {
    icon: MdVerified,
    title: "Audit & Sertifikasi",
    desc: "Setiap unit melalui proses kontrol kualitas ketat dan memastikan kepatuhan terhadap regulasi Kemenkes RI.",
    scope: [
      "Quality control",
      "Checklist keselamatan",
      "Dokumentasi pengujian",
    ],
    time: "Sebelum serah terima unit",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Seo title="Layanan Kami" />
      <PageHeader title="Layanan Kami" bgImage={AboutBg} />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Solusi Menyeluruh
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#071b3b] md:text-5xl">
            Mengapa Mempercayakan Armada Anda Kepada Kami?
          </h1>
          <p className="mt-5 leading-relaxed text-slate-600">
            Dari rancangan awal hingga unit beroperasi, setiap layanan dirancang
            agar tim Anda memiliki satu partner yang memahami kebutuhan teknis
            dan administratif.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-[#071b3b]/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071b3b] text-2xl text-white transition-colors group-hover:bg-red-600">
                <service.icon />
              </div>
              <h2 className="mb-3 text-xl font-bold text-[#071b3b]">
                {service.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
              <ul className="my-6 space-y-2 border-y border-slate-100 py-5">
                {service.scope.slice(0, 2).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <MdTaskAlt className="text-red-600" /> {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-red-600 transition-colors hover:text-red-700"
              >
                Detail layanan <MdArrowOutward />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Rencana kerja yang jelas
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#071b3b]">
                Satu alur, satu tim yang bertanggung jawab.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Kami menjaga komunikasi di setiap tahap agar spesifikasi, waktu,
              dan hasil akhir tetap selaras.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              [
                "01",
                "Brief teknis",
                "Memahami fungsi unit dan kebutuhan operasional.",
              ],
              [
                "02",
                "Rekomendasi",
                "Menyusun ruang lingkup dan konfigurasi yang tepat.",
              ],
              [
                "03",
                "Eksekusi",
                "Fabrikasi serta integrasi dikerjakan secara terukur.",
              ],
              [
                "04",
                "Validasi",
                "Kontrol kualitas, dokumentasi, dan serah terima.",
              ],
            ].map(([number, title, desc]) => (
              <article
                key={number}
                className="relative rounded-2xl bg-slate-50 p-6"
              >
                <span className="text-3xl font-black text-red-600">
                  {number}
                </span>
                <h3 className="mt-8 font-bold text-[#071b3b]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-5 pt-20 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#071b3b] p-8 text-center text-white shadow-2xl md:p-12">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-red-600/25 blur-3xl" />
          <div className="relative">
            <h4 className="text-3xl font-bold mb-4">Butuh Layanan Kustom?</h4>
            <p className="mb-8 opacity-90 max-w-lg mx-auto">
              Diskusikan kebutuhan spesifik Anda dengan tim teknis kami. Kami
              siap memberikan solusi karoseri yang tepat guna dan efisien.
            </p>
            <a
              href="http://wa.me/6285178496746?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20konsultasi%20layanan%20kustom."
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-red-600 px-8 py-4 font-bold text-white transition-colors hover:bg-red-500"
            >
              Hubungi Konsultan Kami
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[70] flex items-end bg-[#071b3b]/70 p-3 backdrop-blur-sm md:items-center md:justify-center md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl md:p-9"
            >
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Tutup detail layanan"
                className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-[#071b3b]"
              >
                <MdClose className="text-xl" />
              </button>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071b3b] text-2xl text-white">
                <selectedService.icon />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Ruang lingkup layanan
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#071b3b]">
                {selectedService.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {selectedService.desc}
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="flex items-center gap-2 text-sm font-bold text-[#071b3b]">
                  <MdSchedule className="text-red-600" /> Waktu pengerjaan
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {selectedService.time}
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {selectedService.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <MdTaskAlt className="text-red-600" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href={`http://wa.me/6285178496746?text=Halo%20Karoseri%20Ambulans%2C%20saya%20ingin%20mendiskusikan%20${encodeURIComponent(selectedService.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 font-bold text-white transition-colors hover:bg-red-700"
              >
                Konsultasikan layanan ini <MdArrowOutward />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
