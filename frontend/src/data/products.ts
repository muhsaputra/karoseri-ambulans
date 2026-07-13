import productsJson from "./products.json";

export type ProductEquipmentItem = {
  name: string;
  notes?: string;
};

export type ProductFAQItem = {
  question: string;
  answer: string;
};

export type ProductTestimonial = {
  name: string;
  role: string;
  quote: string;
};

export type ProductSpecTableRow = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  shortDescription: string;
  startingPrice: number;
  highlights: string[];
  gallery: string[];
  images?: {
    interior?: string[];
    exterior?: string[];
  };
  quickSpecs: {
    Capacity: string;
    Chassis: string;
    Engine: string;
    Transmission: string;
    "Medical Equipment": string;
  };
  specTable: {
    rows: ProductSpecTableRow[];
  };
  features: string[];
  equipment: ProductEquipmentItem[];
  advantages: string[];
  useCases: string[];
  faq: ProductFAQItem[];
  testimonial: ProductTestimonial;
  related: string[];
  downloadBrochureLabel: string;
  downloadBrochureUrl: string;
  whatsappText: string;
};

const products = productsJson as unknown as Product[];

export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product): Product[] {
  const relatedSlugs = product.related ?? [];
  return relatedSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as Product[];
}
