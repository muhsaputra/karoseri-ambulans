export default function EquipmentSection({ equipments = [] }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          Equipment List
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071b3b]">
          Peralatan Terintegrasi
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {equipments.map((eq, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-lg font-extrabold text-[#071b3b]">{eq.name}</p>
            {eq.notes ? (
              <p className="mt-2 text-slate-600 leading-relaxed">{eq.notes}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
