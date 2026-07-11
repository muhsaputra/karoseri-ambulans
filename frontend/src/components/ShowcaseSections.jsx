import { Link } from "react-router-dom";
import { MdArrowOutward, MdFormatQuote, MdVerified } from "react-icons/md";
import AboutImage from "../assets/workshop-ambulans.webp";

const PROJECTS = [
  { type: "Ambulans ICU", client: "Rumah Sakit Regional", city: "Banten" },
  { type: "Ambulans Gawat Darurat", client: "Klinik & Layanan Darurat", city: "Jakarta" },
  { type: "Ambulans Transport", client: "Fasilitas Kesehatan Daerah", city: "Jawa Barat" },
];

const TESTIMONIALS = [
  {
    quote: "Proses konsultasinya detail dan kebutuhan tim medis kami diterjemahkan dengan sangat baik ke dalam layout unit.",
    name: "Manajer Operasional",
    role: "Rumah Sakit Swasta, Banten",
  },
  {
    quote: "Pengerjaan rapi, komunikasi transparan, dan serah terima unit sesuai jadwal yang kami sepakati.",
    name: "Kepala Pengadaan",
    role: "Fasilitas Kesehatan Regional",
  },
];

export function PortfolioSection() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">Portofolio pilihan</p>
            <h2 className="text-4xl font-bold tracking-tight text-[#071b3b] md:text-5xl">Dibangun untuk kesiapan di lapangan.</h2>
          </div>
          <Link to="/produk" className="inline-flex items-center gap-2 font-bold text-red-600 transition-colors hover:text-red-700">
            Lihat seluruh solusi <MdArrowOutward />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <article key={project.type} className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#071b3b]/10">
              <div className="relative h-64 overflow-hidden">
                <img src={AboutImage} alt={`${project.type} untuk ${project.client}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b3b]/80 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#071b3b]">0{index + 1}</span>
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-red-600">{project.city}</p>
                <h3 className="mt-2 text-xl font-bold text-[#071b3b]">{project.type}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.client}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section className="bg-slate-50 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">Kepercayaan klien</p>
            <h2 className="text-4xl font-bold tracking-tight text-[#071b3b] md:text-5xl">Mitra yang membutuhkan detail tanpa kompromi.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {["RS & Klinik", "Instansi Pemerintah", "Layanan Darurat", "Perusahaan"].map((client) => (
                <span key={client} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600"><MdVerified className="text-red-600" /> {client}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-3xl bg-[#071b3b] p-7 text-white shadow-xl shadow-[#071b3b]/10">
                <MdFormatQuote className="mb-5 text-4xl text-red-400" />
                <blockquote className="leading-relaxed text-slate-200">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
