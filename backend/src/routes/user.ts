import { Router } from "express";
import { deleteUser, getUser, updateUser } from "../controllers/userController";

const router = Router();

router.patch("/update-user", updateUser); //testirano radi
router.delete("/delete-user", deleteUser); //testirano radi
router.get("/me", getUser);
export default router;
