import { SiWhatsapp } from "react-icons/si";

export default function FloatingChat() {
  return (
    <a
      href="https://wa.me/628111222183" // Ganti dengan nomor Anda
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Chat dengan Sales"
    >
      {/* Tombol dengan efek Pulse */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110">
        <SiWhatsapp size={32} />

        {/* Efek Pulse (Lingkaran yang berdenyut) */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>
      </div>

      {/* Label Tooltip (Muncul saat hover) */}
      <span className="absolute right-20 top-3 bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat dengan Sales
      </span>
    </a>
  );
}
