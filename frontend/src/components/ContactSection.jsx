import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const CONTACTS = [
  {
    icon: MdPhone,
    title: "Telepon",
    val: "+62 812 3456 7890",
    href: "tel:+6281234567890",
    color: "text-red-600",
  },
  {
    icon: MdEmail,
    title: "Email",
    val: "halo@karoseri-ambulans.com",
    href: "mailto:halo@karoseri-ambulans.com",
    color: "text-red-600",
  },
  {
    icon: MdLocationOn,
    title: "Workshop",
    val: "Serang, Banten, Indonesia",
    href: "https://maps.google.com",
    color: "text-red-600",
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-red-600">
            Kontak Kami
          </h3>
          <h2 className="text-4xl font-extrabold text-[#071b3b]">
            Hubungi Tim Ahli Kami
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CONTACTS.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-2xl hover:shadow-[#071b3b]/10"
            >
              {/* Background Accent saat Hover */}
              <div className="absolute inset-0 bg-red-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div
                className={`relative z-10 ${item.color} text-4xl mb-6 p-4 bg-slate-50 rounded-full group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon />
              </div>

              <h5 className="relative z-10 font-bold text-lg mb-2 text-slate-900">
                {item.title}
              </h5>
              <p className="relative z-10 font-medium text-slate-500 transition-colors duration-300 group-hover:text-[#071b3b]">
                {item.val}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
