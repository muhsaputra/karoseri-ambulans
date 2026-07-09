import React from "react";
import { motion } from "framer-motion";
import {
  MdBuild,
  MdMedicalServices,
  MdGavel,
  MdSupportAgent,
  MdDirectionsCar,
  MdVerified,
} from "react-icons/md";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/assets1.webp";

const SERVICES = [
  {
    icon: MdBuild,
    title: "Fabrikasi Karoseri",
    desc: "Desain dan perakitan interior ambulans menggunakan material berkualitas tinggi, tahan karat, dan memenuhi standar ergonomi medis.",
  },
  {
    icon: MdMedicalServices,
    title: "Instalasi Alat Medis",
    desc: "Integrasi sistem medis canggih mulai dari oxygen system, stretcher, hingga peralatan ICU dengan standar keamanan tinggi.",
  },
  {
    icon: MdGavel,
    title: "Pengurusan Legalitas",
    desc: "Kami membantu pengurusan surat-surat kendaraan (STNK, BBN, Sertifikat Karoseri) agar unit Anda langsung siap beroperasi.",
  },
  {
    icon: MdSupportAgent,
    title: "Layanan Purna Jual",
    desc: "Dukungan teknis berkala dan ketersediaan suku cadang untuk memastikan armada Anda selalu dalam kondisi prima.",
  },
  {
    icon: MdDirectionsCar,
    title: "Modifikasi Khusus",
    desc: "Layanan kustomisasi layout interior sesuai dengan kebutuhan spesifik operasional atau protokol kesehatan instansi Anda.",
  },
  {
    icon: MdVerified,
    title: "Audit & Sertifikasi",
    desc: "Setiap unit melalui proses kontrol kualitas ketat dan memastikan kepatuhan terhadap regulasi Kemenkes RI.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader title="Layanan Kami" bgImage={AboutBg} />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
            Solusi Menyeluruh
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900">
            Mengapa Mempercayakan Armada Anda Kepada Kami?
          </h3>
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
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <service.icon />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-8">
        <div className="bg-blue-600 rounded-[2rem] p-12 text-white text-center shadow-2xl">
          <h4 className="text-3xl font-bold mb-4">Butuh Layanan Kustom?</h4>
          <p className="mb-8 opacity-90 max-w-lg mx-auto">
            Diskusikan kebutuhan spesifik Anda dengan tim teknis kami. Kami siap
            memberikan solusi karoseri yang tepat guna dan efisien.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors">
            Hubungi Konsultan Kami
          </button>
        </div>
      </section>
    </div>
  );
}
