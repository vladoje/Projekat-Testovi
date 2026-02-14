import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface JwtPayload {
  userId: number;
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("Unauthorized");

    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET not defined");

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    // dodamo userId u req objekt da kontroleri mogu koristiti
    (req as any).userId = decoded.userId;

    next();
  } catch (e) {
    console.error(e);
    res.status(401).send("Unauthorized");
  }
}
