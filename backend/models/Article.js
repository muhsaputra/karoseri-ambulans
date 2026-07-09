// models/Article.js
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String, // Ini yang bikin URL jadi: /blog/judul-artikel
      required: true,
      unique: true,
    },
    content: {
      type: String, // Isi artikel dari Rich Text Editor (berupa HTML HTML tag)
      required: true,
    },
    metaDescription: {
      type: String, // Untuk deskripsi di Google Search
      required: true,
      maxLength: 160,
    },
    coverImage: {
      type: String, // Alamat URL gambar format WebP
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Article", articleSchema);
