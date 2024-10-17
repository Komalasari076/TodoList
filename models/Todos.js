const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "false",
  },
});

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
