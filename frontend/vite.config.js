import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Tambahkan ini agar Vite tidak "salah baca" export ikon
    include: ["react-icons/lu", "react-icons"],
  },
});
