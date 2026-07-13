import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function formatPrice(value) {
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `Rp ${Number(value).toLocaleString("id-ID")}`;
  }
}

export default function RelatedProducts({ products = [] }) {
  return (
    <div>
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          Related Products
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071b3b]">
          Rekomendasi Unit Lain
        </h2>
      </div>

      {products.length === 0 ? null : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-[#071b3b]/10 transition-all"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={p.gallery?.[0]}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#071b3b] border border-white/30">
                  {p.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-extrabold text-[#071b3b] group-hover:text-red-600">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {p.shortDescription}
                </p>
                <p className="mt-4 text-sm font-bold text-[#071b3b]">
                  Mulai {formatPrice(p.startingPrice)}
                </p>

                <div className="mt-6">
                  <Link
                    to={`/produk/${p.slug}`}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#071b3b] px-5 py-3 font-bold text-white transition-all hover:bg-red-600"
                  >
                    Detail Produk
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
