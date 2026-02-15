import { Router } from "express";
import { deleteUser, updateUser } from "../controllers/userController";

const router = Router();

router.patch("/update-user", updateUser); //testirano radi
router.delete("/delete-user", deleteUser); //testirano radi

export default router;
