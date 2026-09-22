import { Router } from "express";
import { getTeamMembers, createTeamMember } from "../controllers/teamController";

const router = Router();

router.route("/").get(getTeamMembers).post(createTeamMember);

export default router;
