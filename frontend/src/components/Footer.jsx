import { Link } from "react-router-dom";
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#071b3b] pb-10 pt-20 text-slate-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold tracking-tight">
              Karoseri<span className="text-red-500">Ambulans</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Solusi manufaktur kendaraan medis terpercaya dengan standar
              Kemenkes RI. Kami hadir untuk keselamatan Anda.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {[
                "Beranda",
                "Tentang",
                "Produk",
                "Daftar Harga",
                "Layanan",
                "Artikel",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={
                      link === "Beranda"
                        ? "/"
                        : `/${link.toLowerCase().replace(" ", "-")}`
                    }
                    className="flex items-center transition-colors hover:text-red-400 group"
                  >
                    <MdArrowForward
                      className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity"
                      size={14}
                    />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Produk */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Layanan
            </h4>
            <ul className="space-y-2">
              {[
                "Ambulans Transport",
                "Ambulans Gawat Darurat",
                "Mobile ICU",
                "Kustomisasi",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-red-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Kontak
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MdLocationOn className="mt-1 text-red-500" /> Komp. Taman
                Banten Lestari Serang, Banten
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-red-500" /> +62 811-1222-183
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-red-500" />{" "}
                karoseriambulans16@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Karoseri Ambulans. All rights reserved.
          </p>
          {/* <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
