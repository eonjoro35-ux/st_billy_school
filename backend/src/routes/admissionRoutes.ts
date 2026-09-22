import { Router } from "express";
import { createAdmissionInquiry, getAdmissionInquiries } from "../controllers/admissionController";

const router = Router();

router.route("/").post(createAdmissionInquiry).get(getAdmissionInquiries);

export default router;
