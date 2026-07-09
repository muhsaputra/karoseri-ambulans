// routes/articleRoutes.js
const express = require("express");
const router = express.Router();
const {
  createArticle,
  getAllArticles,
  getArticleBySlug,
  deleteArticle,
} = require("../controllers/articleController");

// Import Middleware
const protect = require("../middleware/authMiddleware"); // Satpam Login
const { upload, processImage } = require("../middleware/uploadMiddleware"); // Pemroses Gambar

// Endpoint Publik (Bisa diakses pengunjung website)
router.get("/", getAllArticles);
router.get("/:slug", getArticleBySlug);

// Endpoint Terproteksi (HANYA BISA DIAKSES JIKA BAWA TOKEN LOGIN)
router.post("/", protect, upload.single("image"), processImage, createArticle);
router.delete("/:id", protect, deleteArticle);

module.exports = router;
