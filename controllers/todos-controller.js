const Todos = require("../models/Todos");

module.exports = {
  getAllTodo: async (req, res) => {
    const data = await Todos.find({});

    res.json({
      message: "berhasil mendapatkan semua todos",
      data,
    });
  },

  getTodoById: (req, res) => {},

  addTodo: (req, res) => {
    const data = req.body;

    const newTodos = new Todos(data);
    newTodos.save();

    res.json({
      message: "data berhasil di buat",
    });
  },
  
  editTodoById: (req, res) => {},
  deleteTodoById: (req, res) => {},
};
