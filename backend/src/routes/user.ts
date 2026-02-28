import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUserQuestions,
  updateUser,
} from "../controllers/userController";

const router = Router();

router.patch("/update-user", updateUser); //testirano radi
router.delete("/delete-user", deleteUser); //testirano radi
router.get("/me", getUser);
router.get("/questions", getUserQuestions);
export default router;
