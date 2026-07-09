import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Ganti import dari lucide-react ke react-icons/lu
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Produk", path: "/produk" },
    { name: "Daftar Harga", path: "/daftar-harga" },
    { name: "Layanan", path: "/layanan" },
    { name: "Artikel", path: "/artikel" },
  ];

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex justify-between items-center text-white shadow-2xl">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          KAROSERI<span className="text-blue-500">AMBULANS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 text-sm font-medium">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/10 rounded-full"
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/kontak"
            className="group relative px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-blue-600 transition-transform duration-300 group-hover:scale-105" />
            <span className="relative z-10">Kontak</span>
          </Link>
        </div>

        {/* Hamburger - Ikon diganti ke LuMenu dan LuX */}
        <button
          className="md:hidden z-[60] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-2xl font-bold hover:text-blue-400 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
