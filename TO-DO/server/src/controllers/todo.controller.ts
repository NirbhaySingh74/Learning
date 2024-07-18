import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Add new ToDo
export const addTodo = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(400).json({ message: "User ID is missing" });
  }

  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        userId,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ message: "Failed to add todo" });
  }
};

// remove ToDo
export const removeTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user?.id;

  console.log("User ID:", userId);
  console.log("Todo ID:", id);

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(id) },
    });

    console.log("Found Todo:", todo);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (todo.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this todo" });
    }

    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).json({ message: "Todo removed" });
  } catch (error) {
    console.error("Error removing todo:", error);
    res.status(500).json({ message: "Failed to remove todo" });
  } finally {
    await prisma.$disconnect();
  }
};

// update ToDo
export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, done } = req.body;

  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id, 10) },
      data: {
        title,
        description: description || undefined,
        done,
      },
    });
    res.status(200).json({ message: "Todo updated", updatedTodo });
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo", error });
  }
};

//get alltodo
export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    console.log("userId", userId);

    const todos = await prisma.todo.findMany({
      where: {
        userId: userId,
      },
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error in getting todo" });
  }
};
