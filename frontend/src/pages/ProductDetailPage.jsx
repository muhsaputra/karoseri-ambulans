import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdArrowBack, MdWhatsapp } from "react-icons/md";

import Seo from "../components/Seo";
import {
  getProductBySlug,
  getProducts,
  getRelatedProducts,
} from "../data/products";

import ProductHero from "../components/product/ProductHero";
import SpecificationGrid from "../components/product/SpecificationGrid";
import FeatureSection from "../components/product/FeatureSection";
import GallerySection from "../components/product/GallerySection";
import EquipmentSection from "../components/product/EquipmentSection";
import TechnicalTable from "../components/product/TechnicalTable";
import FAQSection from "../components/product/FAQSection";
import RelatedProducts from "../components/product/RelatedProducts";
import StickyConsultation from "../components/product/StickyConsultation";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    if (!slug) return undefined;
    return getProductBySlug(slug);
  }, [slug]);

  const products = useMemo(() => getProducts(), []);

  const related = useMemo(() => {
    if (!product) return [];
    return getRelatedProducts(product).slice(0, 6);
  }, [product]);

  if (!product) {
    return (
      <div className="bg-slate-50 min-h-screen">
        <Seo title="Produk tidak ditemukan" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-[#071b3b] shadow-sm hover:border-red-200 hover:text-red-600"
            >
              <MdArrowBack /> Kembali
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center"
          >
            <h1 className="text-2xl font-extrabold text-[#071b3b]">
              Produk tidak ditemukan
            </h1>
            <p className="mt-2 text-slate-600">
              Silakan kembali ke katalog produk.
            </p>
            <button
              onClick={() => navigate("/produk")}
              className="mt-6 rounded-full bg-[#071b3b] px-10 py-4 font-bold text-white shadow-lg transition-all hover:bg-red-600"
            >
              Lihat Katalog
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Seo
        title={product.name}
        description={`${product.shortDescription} Harga mulai ${formatPriceIDR(product.startingPrice)}.`}
      />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProductHero product={product} />
        </motion.div>
      </div>

      <main className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <section className="mt-12">
          <SpecificationGrid product={product} />
        </section>

        <section className="mt-14">
          <FeatureSection
            title="Feature Highlights"
            features={product.features}
          />
        </section>

        <section className="mt-14">
          <GallerySection
            title="Interior Gallery"
            images={product.images?.interior ?? product.gallery}
          />
        </section>

        <section className="mt-14">
          <GallerySection
            title="Exterior Gallery"
            images={product.images?.exterior ?? product.gallery}
          />
        </section>

        <section className="mt-14">
          <EquipmentSection equipments={product.equipment} />
        </section>

        <section className="mt-14">
          <TechnicalTable rows={product?.specTable?.rows ?? []} />
        </section>

        <section className="mt-14">
          <FeatureSection
            title="Product Advantages"
            features={product.advantages}
            dense
          />
        </section>

        <section className="mt-14">
          <FeatureSection title="Use Cases" features={product.useCases} />
        </section>

        <section className="mt-14">
          <RelatedProducts products={related} />
        </section>
      </main>

      <StickyConsultation product={product} />

      {/* Spacer */}
      <div className="h-10" />
    </div>
  );
}

function formatPriceIDR(value) {
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `Rp ${Number(value).toLocaleString("id-ID")}`;
  }
}
