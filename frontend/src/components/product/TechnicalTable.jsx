export default function TechnicalTable({ rows = [] }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 md:p-10 shadow-sm overflow-hidden">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          Technical Specifications
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071b3b]">
          Tabel Spesifikasi
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <tbody>
            {rows.map((r, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-5 py-4 text-sm font-bold text-[#071b3b] whitespace-nowrap">
                  {r.label}
                </td>
                <td className="px-5 py-4 text-sm text-slate-600">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
