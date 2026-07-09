import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Perintah scroll ke posisi paling atas (x=0, y=0)
    window.scrollTo(0, 0);
  }, [pathname]); // Akan berjalan setiap kali 'pathname' (URL) berubah

  return null; // Komponen ini tidak menampilkan apa-apa di layar
}
