import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies.token; // cookie-parser mora biti uključen

  if (!token) return res.status(401).send({ message: "Unauthorized" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any;
    (req as any).userId = payload.userId;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Invalid token" });
  }
}
