const express = require("express");
const app = express();
const port = process.env.port || 3000;

const allRoutes = require("./routes/index");
const db = require("./database");

db.then(() => {
  console.log("berhasil connect ke db");
}).catch(() => {
  console.log("gagal konek ke db");
});

app.use(express.json());
app.use(allRoutes);

app.listen(port, () => {
  console.log("server running on port " + port);
});