import { MdOutlinePriceChange } from "react-icons/md";
import { formatCurrencyIDR } from "./utils";

export default function ProductPricing({ startingPrice }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071b3b] text-white shadow-sm">
        <MdOutlinePriceChange className="text-2xl" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          Harga Mulai
        </p>
        <p className="text-2xl font-extrabold text-[#071b3b]">
          {formatCurrencyIDR(startingPrice)}
        </p>
      </div>
    </div>
  );
}
