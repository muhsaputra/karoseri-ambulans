// middleware/uploadMiddleware.js
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Simpan sementara di memori (RAM) sebelum diolah Sharp
const storage = multer.memoryStorage();
const upload = multer({ storage });

const processImage = async (req, res, next) => {
  if (!req.file) return next();

  // Buat nama file SEO friendly (contoh: gambar-ambulans-162738.webp)
  const formattedName = req.file.originalname
    .split(".")[0]
    .replace(/\s+/g, "-")
    .toLowerCase();
  const filename = `${formattedName}-${Date.now()}.webp`;

  try {
    await sharp(req.file.buffer)
      .resize(800) // Lebar maksimal 800px (ideal untuk blog)
      .webp({ quality: 80 }) // Kompres menjadi WebP dengan kualitas 80%
      .toFile(path.join(__dirname, "../uploads", filename));

    req.body.coverImage = `/uploads/${filename}`;
    next();
  } catch (error) {
    console.error("Gagal memproses gambar:", error);
    res.status(500).json({ message: "Gagal memproses gambar" });
  }
};

module.exports = { upload, processImage };
