import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Add new ToDo
export const addTodo = async (req: Request, res: Response) => {
  const { title, description, userId } = req.body;

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
    res.status(500).json({ message: "Failed to add todo" });
  }
};

// remove ToDo
export const removeTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).json({ message: "Todo Removed" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove todo" });
  }
};

// update ToDo
export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, done } = req.body;
  try {
    const updateTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description: description || undefined,
        done,
      },
    });
    res.status(200).json({ message: "Todo updated", updateTodo });
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};
