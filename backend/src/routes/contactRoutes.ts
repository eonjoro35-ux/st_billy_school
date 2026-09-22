import { Router } from "express";
import { createContactMessage, getContactMessages } from "../controllers/contactController";

const router = Router();

router.route("/").post(createContactMessage).get(getContactMessages);

export default router;
