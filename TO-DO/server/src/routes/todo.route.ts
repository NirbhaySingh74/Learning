import express from "express";
import {
  addTodo,
  removeTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/addtodos", addTodo);
router.delete("/todos/:id", removeTodo);
router.put("/todos/:id", updateTodo);

export default router;
