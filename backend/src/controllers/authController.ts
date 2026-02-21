export interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  category?: string;
  rijesio_testova: number;
  created_at: string;
}
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { query } from "../db/db";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import isEmail from "validator/lib/isEmail";
import generateStarterProgress from "../utils/starterProgress";
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send("Bad request body empty");
    const result = await query<User>("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    const user: User = result.rows[0];
    if (!user) return res.status(401).send("Invalid credentials");

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).send("Invalid credentials");
    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "90d",
    });
    res.cookie("token", token, {
      httpOnly: true, // JS ne može da vidi token
      secure: true, // samo HTTPS
      sameSite: "none", // cross-site, HTTPS
      maxAge: 90 * 24 * 60 * 60 * 1000, // 90 dana
    });
    res.send({ message: "Login succesfull" });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
}

export async function register(req: Request, res: Response) {
  try {
    const { username, email, password, category } = req.body;
    if (!username || !email || !password || !category)
      return res.status(400).send("Bad request body empty");

    if (password.length < 8) return res.status(401).send("Password too short");

    if (!isEmail(email)) return res.status(401).send("Invalid email");

    let emailTaken = await query("SELECT * FROM users WHERE email=$1", [email]);
    emailTaken = emailTaken.rows[0];
    if (emailTaken)
      return res.status(409).send("User with that email already exist");
    const passwordHash = await bcrypt.hash(password, 10); //10 je default kaze chat gpt
    let newUser = await query<User>(
      "INSERT INTO users (username,email,password_hash,category)\
    VALUES($1,$2,$3,$4) RETURNING *",
      [username, email, passwordHash, category],
    );
    const createdUser: User = newUser.rows[0];
    if (!createdUser) return res.status(401).send("DB didnt create a new user");
    const payload = { userId: createdUser.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "90d",
    });
    await generateStarterProgress(createdUser.id);
    res.cookie("token", token, {
      httpOnly: true, // JS ne može da vidi token
      secure: true, // samo HTTPS
      sameSite: "none", // cross-site, HTTPS
      maxAge: 90 * 24 * 60 * 60 * 1000, // 90 dana
    });
    res.send({ message: "Register succesfull" });
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
}
export async function forgotPassword(req: Request, res: Response) {
  const { email } = req.body;
  if (!email || !isEmail(email)) return res.status(400).send("Invalid email");
  let emailTaken = await query<User>("SELECT * FROM users WHERE email=$1", [
    email,
  ]);
  const emailTakenn: User = emailTaken.rows[0];
  if (!emailTakenn)
    return res.status(400).send("User with that email doesn`t exist");

  const token = jwt.sign({ userId: emailTakenn.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1h
  await query(
    "INSERT INTO reset_tokens (token, user_id, expires_at) VALUES($1, $2, $3)",
    [token, emailTakenn.id, expiresAt],
  );
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "felipa.hackett39@ethereal.email",
      pass: "6X7ndS69sMjeWQbAeN",
    },
  });
  // Send an email using async/await
  try {
    const info = await transporter.sendMail({
      from: '"Your App" <yourapp@example.com>',
      to: email,
      subject: "Reset your password",
      html: `
<p>Hello,</p>
<p>Click the button below to reset your password:</p>
<a href="http://localhost:3000/reset-password?token=${token}" style="display:inline-block; padding:10px 20px; background-color:#007bff; color:white; text-decoration:none; border-radius:5px;">Reset Password</a>
<p>If you didn't request a password reset, you can ignore this email.</p>
`,
    });
    console.log("Message sent:", info.messageId);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Failed to send email");
  }

  res.send({ message: "Check your email for reseting password" });
}

export async function resetPassword(req: Request, res: Response) {
  const { token, newPassword } = req.body;
  if (!token || !newPassword)
    return res.status(400).send("Bad request body empty");
  if (newPassword.length < 8)
    return res.status(400).send("New password too short");
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  //provjeri token
  const result = await query(
    "SELECT * FROM reset_tokens WHERE token=$1 AND expires_at > NOW()",
    [token],
  );
  if (!result.rows[0]) return res.status(400).send("Invalid or expired token");
  //nabavi userId
  const userId = result.rows[0].user_id;
  if (!userId) return res.status(400).send("Invalid or expired token");
  await query("UPDATE users SET password_hash=$1 WHERE id=$2", [
    hashedPassword,
    userId,
  ]);
  await query("DELETE FROM reset_tokens WHERE token=$1", [token]);

  res.send({ message: "Password succesfully changed" });
}
