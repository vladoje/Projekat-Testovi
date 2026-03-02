import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import { query } from "../db/db";
import { User } from "./authController";
import generateStarterProgress from "../utils/starterProgress";

export const configurePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL:
          "https://projekat-testovi.onrender.com/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0].value;
          const username = profile.displayName;
          if (!email) {
            return done(new Error("No email from Google"));
          }

          const result = await query("SELECT * FROM users WHERE email=$1", [
            email,
          ]);

          let user = result.rows[0];

          // SIGN UP ako ne postoji
          if (!user) {
            let insert = await query<User>(
              "INSERT INTO users (username,email,password_hash,category)\
    VALUES($1,$2,$3,$4) RETURNING *",
              [username, email, null, "B"],
            );
            user = insert.rows[0];
            await generateStarterProgress(user.id);
          }

          // LOGIN (JWT)
          const payload = { userId: user.id };
          const token = jwt.sign(payload, process.env.JWT_SECRET!, {
            expiresIn: "90d",
          });

          // 👇 VRATI Passportu
          done(null, { token, userId: user.id });
        } catch (err) {
          done(err);
        }
      },
    ),
  );
};
