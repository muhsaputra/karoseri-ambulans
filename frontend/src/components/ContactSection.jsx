import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const CONTACTS = [
  {
    icon: MdPhone,
    title: "Telepon",
    val: "+62 812 3456 7890",
    href: "tel:+6281234567890",
    color: "text-blue-600",
  },
  {
    icon: MdEmail,
    title: "Email",
    val: "halo@karoseri-ambulans.com",
    href: "mailto:halo@karoseri-ambulans.com",
    color: "text-emerald-600",
  },
  {
    icon: MdLocationOn,
    title: "Workshop",
    val: "Serang, Banten, Indonesia",
    href: "https://maps.google.com",
    color: "text-rose-600",
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
            Kontak Kami
          </h3>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Hubungi Tim Ahli Kami
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CONTACTS.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group relative p-8 bg-white rounded-3xl border border-slate-200 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Background Accent saat Hover */}
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className={`relative z-10 ${item.color} text-4xl mb-6 p-4 bg-slate-50 rounded-full group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon />
              </div>

              <h5 className="relative z-10 font-bold text-lg mb-2 text-slate-900">
                {item.title}
              </h5>
              <p className="relative z-10 text-slate-500 group-hover:text-blue-700 transition-colors duration-300 font-medium">
                {item.val}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
