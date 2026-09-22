import { Router } from "express";
import { getNewsEvents, getNewsEventBySlug, createNewsEvent } from "../controllers/newsController";

const router = Router();

router.route("/").get(getNewsEvents).post(createNewsEvent);
router.route("/:slug").get(getNewsEventBySlug);

export default router;
