// controllers/articleController.js
const Article = require("../models/Article");

// 1. Buat Artikel Baru (Mengubah judul jadi URL Slug SEO)
const createArticle = async (req, res) => {
  try {
    const { title, content, metaDescription } = req.body;

    const coverImage = req.body.coverImage;
    if (!coverImage) {
      return res
        .status(400)
        .json({ message: "Gambar cover artikel wajib diunggah!" });
    }

    // Otomatisasi SEO: Ubah Judul menjadi URL Slug (contoh: "Ambulans VIP" -> "ambulans-vip")
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const newArticle = new Article({
      title,
      slug,
      content,
      metaDescription,
      coverImage,
    });

    await newArticle.save();
    res
      .status(201)
      .json({ message: "Artikel berhasil diterbitkan!", article: newArticle });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Judul artikel ini sudah ada, gunakan judul lain." });
    }
    res
      .status(500)
      .json({ message: "Gagal membuat artikel", error: error.message });
  }
};

// 2. Ambil Semua Artikel (Untuk halaman Blog)
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data artikel" });
  }
};

// 3. Ambil Satu Artikel Berdasarkan Slug
const getArticleBySlug = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article)
      return res.status(404).json({ message: "Artikel tidak ditemukan" });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil artikel" });
  }
};

// 4. Hapus Artikel
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article)
      return res.status(404).json({ message: "Artikel tidak ditemukan" });
    res.status(200).json({ message: "Artikel berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus artikel" });
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleBySlug,
  deleteArticle,
};
