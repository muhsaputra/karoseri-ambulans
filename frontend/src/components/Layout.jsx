// src/components/Layout.jsx
import { Suspense, lazy } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FloatingChat = lazy(() => import("./FloatingChat"));

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingChat />
      </Suspense>
    </div>
  );
};

export default Layout;
