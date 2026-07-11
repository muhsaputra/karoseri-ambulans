import axios from "axios";

// Tambahkan .trim() untuk membuang spasi/newline tersembunyi
const apiBase = (import.meta.env.VITE_API_URL || "http://localhost:1337")
  .trim()
  .replace(/\/$/, "");

export const CMS_URL = apiBase;

export const cms = axios.create({
  baseURL: CMS_URL,
  timeout: 15000,
});

export const getMediaUrl = (url) => {
  if (!url) return "";
  // Jika sudah full URL (http...), kembalikan apa adanya
  if (url.startsWith("http")) return encodeURI(url);

  // Memastikan ada slash di depan URL dan meng-encode agar aman jika ada spasi di nama file
  const path = url.startsWith("/") ? url : `/${url}`;
  return encodeURI(`${CMS_URL}${path}`);
};
