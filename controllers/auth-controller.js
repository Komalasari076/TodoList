require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  regis: async (req, res) => {
    try {
      const data = req.body;

      // Validasi panjang password
      if (data.password.length < 6) {
        return res
          .status(400)
          .json({ message: "Password harus minimal 6 karakter." });
      }

      // hash password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(data.password, salt);
      data.password = hash;

      const newUser = new User(data);
      await newUser.save();

      res.status(201).json({
        message: "berhasil regis, silahkan login",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan pada server." });
    }
  },

  login: async (req, res) => {
    const data = req.body;

    // Cek input username dan password
    if (!data.username || !data.password) {
      return res
        .status(400)
        .json({ message: "Username dan password harus diisi." });
    }

    // cari user di dalam DB
    const user = await User.findOne({ username: data.username }).exec();
    if (!user) {
      res.status(401).json({ message: "gagal login" });
      return;
    }

    // cek password yg di DB dan inputan user
    const checkPassword = bcrypt.compareSync(data.password, user.password);
    if (!checkPassword) {
      res.status(401).json({ message: "gagal login" });
      return;
    }

    // Buat token
    const token = jwt.sign(
      { username: user.username }, // payload
      process.env.JWT_KEY // secret key
    );

    res.json({
      message: "berhasil login",
      token,
    });
  },
};
