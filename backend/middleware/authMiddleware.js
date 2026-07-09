// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.header("Authorization");

  // Jika tidak ada token (Belum login)
  if (!token)
    return res
      .status(401)
      .json({ message: "Akses ditolak, Anda belum login!" });

  try {
    // Format token biasanya "Bearer [token_acak]", kita ambil bagian tokennya saja
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    // Verifikasi keaslian token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Tempelkan data user ke request

    next(); // Silakan masuk ke rute selanjutnya (misal: rute buat artikel)
  } catch (error) {
    res
      .status(401)
      .json({ message: "Sesi telah habis atau token tidak valid!" });
  }
};

module.exports = protect;
