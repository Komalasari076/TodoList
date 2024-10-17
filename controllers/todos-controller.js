const Todos = require("../models/Todos");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const data = await Todos.find({});

      res.json({
        message: "berhasil mendapatkan semua todos",
        data,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat mengambil todos" });
    }
  },

  getTodoById: async (req, res) => {
    try {
      const { id } = req.params;
      const findTodo = await Todos.findById(id);

      res.json({
        message: "berhasil mendapatkan todo",
        data: findTodo,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat mengambil todo" });
    }
  },

  addTodo: async (req, res) => {
    try {
      const data = req.body;

      const newTodos = new Todos(data);
      newTodos.save();

      res.json({
        message: "berhasil membuat todo baru",
      });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan saat menambah todo" });
    }
  },

  editTodoById: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updateTodo = await Todos.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      res.json({
        message: "Todo berhasil diupdate",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat mengupdate todo" });
    }
  },

  deleteTodoById: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodoById = await Todos.findByIdAndDelete(id);

      res.json({
        message: "Todo berhasil dihapus",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat menghapus todo" });
    }
  },

  deleteAllTodos: async (req, res) => {
    try {
      const deleteTodo = await Todos.deleteMany({});

      res.json({
        message: "Semua todos berhasil dihapus",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat menghapus semua todos" });
    }
  },
};
