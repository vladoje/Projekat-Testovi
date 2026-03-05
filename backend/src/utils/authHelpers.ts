import { Response } from "express";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
export function setAuthCookie(res: Response, userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "90d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 90 * 24 * 60 * 60 * 1000,
  });
}
export async function sendResetEmail(email: string, token: string) {
  await sgMail.send({
    to: email,
    from: "vladorakic07@gmail.com",
    subject: "Reset your password",
    html: `<p>Hello,</p>
      <p>Kliknite dugme ispod da biste promjenili vasu lozinku:</p>
      <a href="https://projekat-testovi-fir1.vercel.app/reset-password?token=${token}" style="...">Reset Password</a>
      <p>Ako niste zatrazili promjenu sifre, mozete ignorisati onaj email.</p>`,
  });
}
