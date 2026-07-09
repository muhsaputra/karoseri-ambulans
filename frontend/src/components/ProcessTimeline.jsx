// components/ProcessTimeline.jsx
const steps = [
  {
    id: 1,
    title: "Konsultasi",
    desc: "Diskusi kebutuhan medis dan basis kendaraan.",
  },
  {
    id: 2,
    title: "Desain & Budget",
    desc: "Finalisasi layout interior dan RAB resmi.",
  },
  { id: 3, title: "Produksi", desc: "Pengerjaan karoseri oleh tim ahli kami." },
  {
    id: 4,
    title: "Quality Control",
    desc: "Uji coba kelistrikan dan sterilisasi.",
  },
  { id: 5, title: "Serah Terima", desc: "Unit siap beroperasi untuk RS Anda." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
          Alur Kerja Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg mb-4 shadow-lg">
                {step.id}
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 px-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
