const Todos = require("../models/Todos");

module.exports = {
  getAllTodo: async (req, res) => {
    const data = await Todos.find({});

    res.json({
      message: "berhasil mendapatkan semua todos",
      data,
    });
  },

  getTodoById: async (req, res) => {
    const { id } = req.params;
    const findTodo = await Todos.findById(id);

    res.json({
      message: "berhasil mendapatkan todo by ID",
      data: findTodo,
    });
  },

  addTodo: (req, res) => {
    const data = req.body;

    const newTodos = new Todos(data);
    newTodos.save();

    res.json({
      message: "data berhasil di buat",
    });
  },

  editTodoById: async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const updateTodo = await Todos.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    res.json({
      message: "Todo berhasil diupdate",
    });
  },

  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    const deleteTodo = await Todos.findByIdAndDelete(id);

    res.json({
      message: "Todo berhasil dihapus",
    });
  },
};
