import { Request, Response } from "express";
import AdmissionInquiry from "../models/AdmissionInquiry";
import { asyncHandler } from "../utils/asyncHandler";

// @route  POST /api/admissions
// @desc   Submit an admission inquiry from the public admissions form
export const createAdmissionInquiry = asyncHandler(async (req: Request, res: Response) => {
  const { childName, childAge, guardianName, guardianPhone, guardianEmail, desiredProgram, additionalNotes } =
    req.body;

  const inquiry = await AdmissionInquiry.create({
    childName,
    childAge,
    guardianName,
    guardianPhone,
    guardianEmail,
    desiredProgram,
    additionalNotes,
  });

  res.status(201).json({
    success: true,
    message: "Your admission inquiry has been received. Our team will contact you within 2 working days.",
    data: inquiry,
  });
});

// @route  GET /api/admissions
// @desc   List all admission inquiries (newest first) — for internal/admin use
export const getAdmissionInquiries = asyncHandler(async (_req: Request, res: Response) => {
  const inquiries = await AdmissionInquiry.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
});
