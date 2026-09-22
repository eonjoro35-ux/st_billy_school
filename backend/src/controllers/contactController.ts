import { Request, Response } from "express";
import ContactMessage from "../models/ContactMessage";
import { asyncHandler } from "../utils/asyncHandler";

// @route  POST /api/contact
// @desc   Submit a message from the public contact form
export const createContactMessage = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;

  const contactMessage = await ContactMessage.create({ name, email, phone, subject, message });

  res.status(201).json({
    success: true,
    message: "Thank you for reaching out. We will get back to you shortly.",
    data: contactMessage,
  });
});

// @route  GET /api/contact
// @desc   List all contact messages (newest first) — for internal/admin use
export const getContactMessages = asyncHandler(async (_req: Request, res: Response) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: messages.length, data: messages });
});
