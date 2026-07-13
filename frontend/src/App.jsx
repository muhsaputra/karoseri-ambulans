import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));

const About = lazy(() => import("./pages/About"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="min-h-screen grid place-items-center bg-slate-50 px-6 text-center">
              <p className="text-base font-semibold text-slate-700">
                Memuat halaman...
              </p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk" element={<ProductPage />} />
            <Route path="/produk/:slug" element={<ProductDetailPage />} />

            <Route path="/tentang" element={<About />} />
            <Route path="/daftar-harga" element={<PricingPage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/artikel" element={<Blog />} />
            <Route path="/artikel/:slug" element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
