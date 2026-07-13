import { motion } from "framer-motion";
import { MdOutlineStar } from "react-icons/md";

export default function FeatureSection({ title, features = [], dense }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
      <div className={dense ? "mb-6" : "mb-10"}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          {title}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071b3b]">
          {dense ? "" : title}
        </h2>
      </div>

      <div
        className={
          dense ? "grid gap-3 md:grid-cols-3" : "grid gap-4 md:grid-cols-3"
        }
      >
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-600/10 text-red-600">
                <MdOutlineStar className="text-xl" />
              </div>
              <p className="text-slate-700 font-semibold leading-relaxed">
                {f}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
