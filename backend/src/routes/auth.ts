import { Router } from "express";
import {
  forgotPassword,
  login,
  register,
  resetPassword,
} from "../controllers/authController";
import passport from "passport";
const router = Router();

router.post("/login", login); //testirano radi
router.post("/register", register); //testirano radi
router.post("/forgot-password", forgotPassword); //testirano radi
router.patch("/reset-password", resetPassword); //testirano radi
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req: any, res) => {
    const { token } = req.user;
    res.cookie("token", token, {
      httpOnly: true, // JS ne može da vidi token
      secure: true, // samo HTTPS
      sameSite: "none", // cross-site, HTTPS
      maxAge: 90 * 24 * 60 * 60 * 1000, // 90 dana
    });
    res.redirect(`${process.env.FRONTEND_URL}/oauth-success`);
  },
);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);
export default router;
