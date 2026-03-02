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

    res.redirect(`${process.env.FRONTEND_URL}/oauth-success?token=${token}`);
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
