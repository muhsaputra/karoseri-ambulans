# TODO - Redesign Product Experience

## 1) Codebase understanding

- [x] Inspect current `frontend/src/pages/ProductPage.jsx` (grid + modal).
- [x] Inspect current `frontend/src/components/ProductSection.jsx` (grid + modal).
- [x] Inspect routing in `frontend/src/App.jsx` (only `/produk` exists; no `/produk/:slug`).
- [x] Inspect CMS helper `frontend/src/lib/cms.js` (axios baseURL + getMediaUrl).
- [x] Inspect Strapi CMS: only `article` content-type exists in repo; no product content-type.

## 2) Architecture / components plan

- [ ] Create reusable premium UI components (ProductCard, ProductGallery/Hero, pricing, spec grid/table, equipment list, FAQ, related products, sticky WhatsApp, download brochure).
- [ ] Add Framer Motion patterns (section reveal, hover/tap, gallery lightbox).

## 3) Routing + pages

- [ ] Add route `/produk/:slug`.
- [ ] Create new `frontend/src/pages/ProductDetailPage.tsx|jsx`.
- [ ] Replace modal usage with navigation to detail page.
- [ ] Keep `/produk` as listing page (new grid design).

## 4) Data strategy

- [ ] Implement data layer using local JSON only (no Strapi products). Create `frontend/src/data/products.json` and helper `getProducts()/getProductBySlug()`.

## 5) SEO + performance

- [ ] Add SEO (Helmet) for listing and detail (title/description, canonical).
- [ ] Add image optimization patterns (preload first image, responsive sizes, lazy load).

## 6) Responsive + QA

- [ ] Tailwind responsive review for every section.
- [ ] Visual check: premium automotive styling + sticky consultation behavior.

## 7) Execution

- [x] Implement ProductDetailPage + reusable components + route /produk/:slug.
- [ ] Redesign /produk listing with ProductCard (no modal) and navigation to /produk/:slug.
