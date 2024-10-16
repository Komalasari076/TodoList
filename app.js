const express = require("express");
const app = express();
const port = process.env.port || 3000;

const allRoutes = require("./routes/index");

app.use(express.json());
app.use(allRoutes);

app.listen(port, () => {
  console.log("server running on port " + port);
});