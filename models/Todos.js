const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  task: String,
  status: String,
});

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;