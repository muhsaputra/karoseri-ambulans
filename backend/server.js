const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Buka akses folder uploads agar gambar artikel bisa dibaca oleh Front-End
app.use("/uploads", express.static("uploads"));

// Import Routes
const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes"); // <-- Ini yang tadi kurang

// Daftarkan Routes
app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes); // <-- Ini yang mengeksekusi endpoint artikel

// Test Route
app.get("/", (req, res) => {
  res.send("API Karoseri Ambulans Berjalan Lancar!");
});

// Setup Port & Database Connection
const PORT = process.env.PORT || 5000; // Ingat, ini akan memakai 5001 dari .env Anda

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Terkoneksi ke MongoDB");
    app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
  })
  .catch((error) => console.log("Gagal koneksi database:", error));
