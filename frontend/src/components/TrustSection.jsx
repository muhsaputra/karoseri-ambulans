// components/TrustSection.jsx
export default function TrustSection() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 md:flex-row">
        <div className="flex-1 border-r border-slate-100 text-center last:border-0">
          <p className="text-3xl font-extrabold text-[#071b3b]">10+</p>
          <p className="text-sm text-slate-600 font-medium">Tahun Pengalaman</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-3xl font-extrabold text-red-600">100+</p>
          <p className="text-sm text-slate-600 font-medium">Unit Terkirim</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-3xl font-extrabold text-[#071b3b]">24/7</p>
          <p className="text-sm text-slate-600 font-medium">Dukungan Teknis</p>
        </div>
      </div>
    </section>
  );
}
