import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import PricingPage from "./pages/PricingPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage"; // 1. Import ContactPage
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ScrollToTop from "./components/ScrollToTop"; // Import komponen tadi

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<ProductPage />} />
          <Route path="/tentang" element={<About />} />{" "}
          <Route path="/daftar-harga" element={<PricingPage />} />
          <Route path="/layanan" element={<ServicesPage />} />{" "}
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/artikel" element={<Blog />} />
          <Route path="/artikel/:slug" element={<BlogDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
