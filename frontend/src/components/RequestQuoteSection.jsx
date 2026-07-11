import { useState } from "react";

export default function RequestQuoteSection() {
  const [form, setForm] = useState({ name: "", institution: "", city: "", unit: "", contact: "", needs: "" });

  const submitQuote = (event) => {
    event.preventDefault();
    const message = `Halo Karoseri Ambulans, saya ${form.name} dari ${form.institution}.%0A%0ATipe unit: ${form.unit}%0ALokasi: ${form.city}%0AKontak: ${form.contact}%0AKebutuhan: ${form.needs}`;
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const updateField = (field, value) => setForm({ ...form, [field]: value });

  return (
    <section className="bg-[#071b3b] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-red-300">Quotation terarah</p>
          <h2 className="text-3xl font-bold md:text-4xl">Butuh Katalog Resmi & Penawaran Harga?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Kirim kebutuhan Anda. Tim kami akan menyiapkan rekomendasi spesifikasi dan penawaran yang sesuai.</p>
        </div>
        <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 md:grid-cols-2 md:p-8" onSubmit={submitQuote}>
          <input required placeholder="Nama lengkap" value={form.name} onChange={(event) => updateField("name", event.target.value)} className="rounded-xl bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-red-500" />
          <input required placeholder="Nama instansi" value={form.institution} onChange={(event) => updateField("institution", event.target.value)} className="rounded-xl bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-red-500" />
          <input required placeholder="Kota / wilayah" value={form.city} onChange={(event) => updateField("city", event.target.value)} className="rounded-xl bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-red-500" />
          <input required type="tel" placeholder="Nomor WhatsApp" value={form.contact} onChange={(event) => updateField("contact", event.target.value)} className="rounded-xl bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-red-500" />
          <select required value={form.unit} onChange={(event) => updateField("unit", event.target.value)} className="rounded-xl bg-white px-4 py-3.5 text-slate-900 outline-none focus:ring-2 focus:ring-red-500">
            <option value="">Pilih tipe unit</option><option>Ambulans Transport</option><option>Ambulans Gawat Darurat</option><option>Ambulans ICU</option><option>Custom Build</option>
          </select>
          <textarea required rows="1" placeholder="Kebutuhan utama atau alat medis" value={form.needs} onChange={(event) => updateField("needs", event.target.value)} className="rounded-xl bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-red-500" />
          <button className="rounded-xl bg-red-600 px-6 py-3.5 font-bold transition hover:bg-red-500 md:col-span-2">Kirim kebutuhan via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
