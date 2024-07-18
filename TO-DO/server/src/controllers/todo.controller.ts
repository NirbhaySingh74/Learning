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
    res.status(500).json({ error: "Failed to remove todo" });
  }
};
