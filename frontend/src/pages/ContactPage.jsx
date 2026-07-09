import React, { useState } from "react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdAccessTime,
  MdSend,
} from "react-icons/md";
import PageHeader from "../components/PageHeader";
import AboutBg from "../assets/assets1.webp"; // Pastikan path benar

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.",
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader title="Hubungi Kami" bgImage={AboutBg} />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-3xl font-bold mb-8">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  required
                  type="text"
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
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
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
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
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                  placeholder="Tulis kebutuhan spesifikasi Anda..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Kirim Pesan <MdSend />
              </button>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] space-y-6">
              <h3 className="text-2xl font-bold mb-6">Informasi Workshop</h3>
              <div className="flex gap-4 items-start">
                <MdLocationOn className="text-blue-500 text-2xl" />
                <div>
                  <h5 className="font-bold">Alamat Utama</h5>
                  <p className="text-slate-400 text-sm">
                    Jl. Raya Serang, Banten, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MdAccessTime className="text-blue-500 text-2xl" />
                <div>
                  <h5 className="font-bold">Jam Kerja</h5>
                  <p className="text-slate-400 text-sm">
                    Senin - Jumat: 08:00 - 17:00 WIB
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <a
                  href="https://wa.me/6281234567890"
                  className="flex items-center gap-3 text-blue-400 font-bold hover:text-white transition-colors"
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
