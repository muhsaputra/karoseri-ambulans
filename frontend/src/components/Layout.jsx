// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingChat from "./FloatingChat";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingChat /> {/* 2. Letakkan di sini */}
    </div>
  );
};

export default Layout;
