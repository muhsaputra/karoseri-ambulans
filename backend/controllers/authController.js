// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 1. Fungsi Login Admin
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cek apakah username ada di database
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ message: "Username tidak ditemukan!" });

    // Cek kecocokan password yang diketik dengan password acak di database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Password salah!" });

    // Jika benar, buatkan Token (Berlaku 1 Hari)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, username: user.username, message: "Login berhasil" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

// 2. Fungsi Buat Akun Admin (Untuk setup awal saja)
const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Acak password (Hashing)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Akun Admin berhasil dibuat!" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Gagal membuat akun admin. Mungkin username sudah ada.",
      });
  }
};

module.exports = { login, register };
