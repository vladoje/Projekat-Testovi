import { Request, Response } from "express";
import { query } from "../db/db";

export async function updateUser(req: Request, res: Response) {
  try {
    const updateData = req.body;
    const userId = (req as any).userId;

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).send({ message: "Nothing to update" });
    }

    const fields = [];
    const values = [];
    let index = 1;

    if (updateData.username !== undefined) {
      fields.push(`username = $${index++}`);
      values.push(updateData.username);
    }

    if (updateData.category !== undefined) {
      fields.push(`category = $${index++}`);
      values.push(updateData.category);
    }

    const result = await query(
      `
      UPDATE users
      SET ${fields.join(", ")}
      WHERE id = $${index}
      RETURNING *
      `,
      [...values, userId],
    );

    return res.status(200).send({
      message: "Success",
      user: result.rows[0],
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Internal server error" });
  }
}
export async function deleteUser(req: Request, res: Response) {
  try {
    const userId = (req as any).userId;

    const result = await query("DELETE FROM users WHERE id = $1 RETURNING id", [
      userId,
    ]);
    await query("DELETE FROM question_progress WHERE user_id = $1", [userId]);
    if (result.rowCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ message: "Success" });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Internal server error" });
  }
}
export async function getUser(req: Request, res: Response) {
  try {
    const userId = (req as any).userId;

    const result = await query(
      "SELECT id, username, email, category, rijesio_testova FROM users WHERE id = $1",
      [userId],
    );

    if (result.rowCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ user: result.rows[0] });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Internal server error" });
  }
}
