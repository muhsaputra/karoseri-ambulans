// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");

// Endpoint: POST /api/auth/login
router.post("/login", login);

// Endpoint: POST /api/auth/register (Bisa Anda hapus/komen setelah akun pertama berhasil dibuat)
router.post("/register", register);

module.exports = router;
