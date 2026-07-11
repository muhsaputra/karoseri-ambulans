import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

const MENU_ITEMS = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
  { name: "Produk", path: "/produk" },
  { name: "Daftar Harga", path: "/daftar-harga" },
  { name: "Layanan", path: "/layanan" },
  { name: "Artikel", path: "/artikel" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-4 z-50 w-[94%] max-w-7xl -translate-x-1/2"
      >
        <nav
          aria-label="Navigasi utama"
          className={`relative flex items-center justify-between overflow-hidden rounded-2xl border px-4 py-3 text-white transition-all duration-300 md:px-6 ${
            isScrolled
              ? "border-white/15 bg-[#071b3b]/95 shadow-2xl shadow-[#071b3b]/25 backdrop-blur-2xl"
              : "border-white/20 bg-[#071b3b]/75 shadow-xl shadow-[#071b3b]/15 backdrop-blur-xl"
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <Link
            to="/"
            className="relative z-10 flex items-center gap-3"
            aria-label="Karoseri Ambulans - Beranda"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 shadow-lg shadow-red-950/15">
              <img
                src="/favicon.svg"
                alt="Karoseri Ambulans"
                className="h-6 w-6"
              />
            </span>
            <span className="text-base font-bold tracking-tight sm:text-lg">
              KAROSERI<span className="text-red-400">AMBULANS</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {MENU_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-white/12"
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="relative z-10 hidden lg:block">
            <Link
              to="/kontak"
              className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold shadow-lg shadow-red-950/25 transition-all hover:-translate-y-0.5 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-400/30"
            >
              Konsultasi{" "}
              <LuArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            type="button"
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-400 lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <LuX size={21} /> : <LuMenu size={21} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-3 top-[5.6rem] z-40 overflow-hidden rounded-3xl border border-white/10 bg-[#071b3b]/98 p-3 shadow-2xl shadow-[#071b3b]/35 backdrop-blur-2xl lg:hidden"
          >
            <div className="mb-2 px-4 pt-3 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Navigasi
            </div>
            <div className="space-y-1">
              {MENU_ITEMS.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-semibold transition-colors ${isActive ? "bg-red-600 text-white" : "text-slate-200 hover:bg-white/8 hover:text-white"}`}
                    >
                      {item.name}
                      <span className="text-sm opacity-70">0{index + 1}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <Link
              to="/kontak"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white px-4 py-3.5 font-bold text-[#071b3b] transition-colors hover:bg-red-50"
            >
              Mulai konsultasi <LuArrowUpRight />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
