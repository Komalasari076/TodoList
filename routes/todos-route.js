const express = require("express");
const {
  getAllTodo,
  getTodoById,
  addTodo,
  editTodoById,
  deleteTodoById,
  deleteAllTodos,
} = require("../controllers/todos-controller");
const router = express.Router();

router.get("/", getAllTodo);
router.get("/:id", getTodoById);
router.post("/", addTodo);
router.put("/:id", editTodoById);
router.delete("/:id", deleteTodoById);
router.delete("/", deleteAllTodos);

module.exports = router;
