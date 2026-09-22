import { Request, Response } from "express";
import Program from "../models/Program";
import { asyncHandler } from "../utils/asyncHandler";

// @route  GET /api/programs
// @desc   List all academic programs, ordered for display
export const getPrograms = asyncHandler(async (_req: Request, res: Response) => {
  const programs = await Program.find().sort({ order: 1 });
  res.status(200).json({ success: true, count: programs.length, data: programs });
});

// @route  POST /api/programs
// @desc   Create a program — for internal/admin use
export const createProgram = asyncHandler(async (req: Request, res: Response) => {
  const { name, ageRange, description, icon, order } = req.body;
  const program = await Program.create({ name, ageRange, description, icon, order });
  res.status(201).json({ success: true, data: program });
});
