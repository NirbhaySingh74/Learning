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
