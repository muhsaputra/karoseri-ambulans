// components/TrustSection.jsx
export default function TrustSection() {
  return (
    <div className="py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <p className="text-3xl font-extrabold text-blue-900">10+</p>
          <p className="text-sm text-slate-600 font-medium">Tahun Pengalaman</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-extrabold text-blue-900">500+</p>
          <p className="text-sm text-slate-600 font-medium">Unit Terkirim</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-extrabold text-blue-900">ISO</p>
          <p className="text-sm text-slate-600 font-medium">Standar Kualitas</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-extrabold text-blue-900">24/7</p>
          <p className="text-sm text-slate-600 font-medium">Dukungan Teknis</p>
        </div>
      </div>
    </div>
  );
}
