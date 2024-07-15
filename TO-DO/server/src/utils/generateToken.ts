import { Response } from "express";
import jwt from "jsonwebtoken";

interface User {
  id: number;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
}

export const generateTokenAndSetCookie = (user: User, res: Response) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "5d" }
  );

  // Set the cookie
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};
