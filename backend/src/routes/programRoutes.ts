import { Router } from "express";
import { getPrograms, createProgram } from "../controllers/programController";

const router = Router();

router.route("/").get(getPrograms).post(createProgram);

export default router;
