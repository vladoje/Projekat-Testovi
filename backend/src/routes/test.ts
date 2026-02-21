import { Router } from "express";
import {
  generateOneTypeTest,
  generateTest,
  handleResults,
} from "../controllers/testController";

const router = Router();

router.get("/generate-test/:category", generateTest); //testirano radi
router.get("/generate-test-type/:type", generateOneTypeTest); //testirano radi
router.patch("/handle-results", handleResults); //testirano radi

export default router;
