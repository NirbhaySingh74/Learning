import express from "express";
import {
  addTodo,
  getAllTodo,
  removeTodo,
  updateTodo,
} from "../controllers/todo.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/addtodos", protectRoute, addTodo);
router.delete("/todos/:id", protectRoute, removeTodo);
router.put("/todos/:id", protectRoute, updateTodo);
router.get("/alltodo", protectRoute, getAllTodo);
export default router;
