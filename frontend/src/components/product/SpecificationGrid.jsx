import {
  MdOutlineDashboard,
  MdOutlineHomeWork,
  MdOutlineBuild,
  MdOutlineSwapHoriz,
  MdLocalHospital,
} from "react-icons/md";

const ITEMS = [
  { key: "Capacity", icon: MdOutlineDashboard, label: "Capacity" },
  { key: "Chassis", icon: MdOutlineHomeWork, label: "Chassis" },
  { key: "Engine", icon: MdOutlineBuild, label: "Engine" },
  { key: "Transmission", icon: MdOutlineSwapHoriz, label: "Transmission" },
  {
    key: "Medical Equipment",
    icon: MdLocalHospital,
    label: "Medical Equipment",
  },
];

export default function SpecificationGrid({ product }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          Quick Specifications
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071b3b]">
          {product.category}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <div
            key={item.key}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071b3b] text-white shadow-sm">
                <item.icon className="text-2xl" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="text-lg font-extrabold text-[#071b3b]">
                  {product.quickSpecs[item.key]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
