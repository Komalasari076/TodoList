const express = require("express");
const router = express.Router();

const todosRoute = require("./todos-route");

router.get("/", (req, res) => {
  res.json({
    message: "selamat datang",
  });
});

router.use("/todos", todosRoute);
module.exports = router;
