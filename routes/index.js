const express = require("express");
const router = express.Router();

const todosRoute = require("./todos-route");
const authRoute = require("./auth-route");
const { validateToken } = require("../middleware/auth");

router.use((req, res, next) => {
  console.log("middleware untuk semua route");
  next();
});


router.get("/", (req, res) => {
  res.json({
    message: "selamat datang",
  });
});

router.use("/todos", validateToken, todosRoute);
router.use("/auth", authRoute);
module.exports = router;
