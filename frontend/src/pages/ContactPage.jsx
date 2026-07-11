import { MdPhone, MdLocationOn, MdAccessTime, MdSend } from "react-icons/md";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/workshop-ambulans.webp";
import Seo from "../components/Seo";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.",
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo title="Hubungi Kami" />
      <PageHeader title="Hubungi Kami" bgImage={AboutBg} />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Form */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Mulai konsultasi
            </p>
            <h3 className="mb-8 text-3xl font-bold text-[#071b3b]">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  placeholder="Nama Instansi/Perusahaan"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Alamat Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  placeholder="email@perusahaan.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Pesan
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none transition-all focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  placeholder="Tulis kebutuhan spesifikasi Anda..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-4 font-bold text-white transition-all hover:bg-red-700"
              >
                Kirim Pesan <MdSend />
              </button>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div className="space-y-8">
            <div className="space-y-6 rounded-[2rem] bg-[#071b3b] p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informasi Kantor</h3>
              <div className="flex gap-4 items-start">
                <MdLocationOn className="text-2xl text-red-500" />
                <div>
                  <h5 className="font-bold">Alamat Utama</h5>
                  <p className="text-slate-400 text-sm">
                    Komp. Taman Banten Lestari Serang, Banten
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MdAccessTime className="text-2xl text-red-500" />
                <div>
                  <h5 className="font-bold">Jam Kerja</h5>
                  <p className="text-slate-400 text-sm">
                    Senin - Jumat: 08:00 - 17:00 WIB
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <a
                  href="https://wa.me/628111222183"
                  className="flex items-center gap-3 font-bold text-red-300 transition-colors hover:text-white"
                >
                  <MdPhone /> Chat via WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[300px] w-full rounded-[2rem] overflow-hidden shadow-sm border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.726245136896!2d106.1477!3d-6.1754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f531336c57f9%3A0x6a0f3d61b32d0f0!2sSerang%2C%20Banten!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Workshop Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
