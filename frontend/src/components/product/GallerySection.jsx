import ProductGallery from "./ProductGallery";

export default function GallerySection({ title, images }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          Gallery
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071b3b]">
          {title}
        </h2>
      </div>

      <ProductGallery images={images} onOpenLightbox={() => {}} />
    </div>
  );
}
