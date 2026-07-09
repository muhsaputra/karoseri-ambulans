// components/RequestQuoteSection.jsx
export default function RequestQuoteSection() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Butuh Katalog Resmi & Penawaran Harga?
        </h2>
        <p className="mb-8 text-blue-200">
          Isi formulir di bawah, kami akan kirimkan detail spesifikasi dan
          daftar harga ke email Anda.
        </p>

        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Nama Anda"
            className="p-3 rounded text-slate-900"
            required
          />
          <input
            type="email"
            placeholder="Email Instansi"
            className="p-3 rounded text-slate-900"
            required
          />
          <button className="bg-blue-500 hover:bg-blue-400 font-bold py-3 px-6 rounded transition">
            Download Katalog
          </button>
        </form>
      </div>
    </section>
  );
}
