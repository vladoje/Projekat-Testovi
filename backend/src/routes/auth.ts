import { Router } from "express";
import {
  forgotPassword,
  login,
  register,
  resetPassword,
} from "../controllers/authController";

const router = Router();

router.post("/login", login); //testirano radi
router.post("/register", register); //testirano radi
router.post("/forgot-password", forgotPassword); //testirano radi
router.patch("/reset-password", resetPassword); //testirano radi

export default router;
