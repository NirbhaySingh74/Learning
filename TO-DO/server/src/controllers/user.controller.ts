import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const { id, email, firstName, lastName, avatar } = req.user;

    res.status(200).json({
      message: `Hii ${firstName}`,
      user: { id, email, firstName, lastName, avatar },
    });
  } catch (error: any) {
    console.error("Error fetching user data: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
