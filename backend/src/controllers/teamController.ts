import { Request, Response } from "express";
import TeamMember from "../models/TeamMember";
import { asyncHandler } from "../utils/asyncHandler";

// @route  GET /api/team
// @desc   List all team/board members, ordered for display
export const getTeamMembers = asyncHandler(async (_req: Request, res: Response) => {
  const members = await TeamMember.find().sort({ order: 1 });
  res.status(200).json({ success: true, count: members.length, data: members });
});

// @route  POST /api/team
// @desc   Add a team/board member — for internal/admin use
export const createTeamMember = asyncHandler(async (req: Request, res: Response) => {
  const { name, role, bio, photoUrl, order } = req.body;
  const member = await TeamMember.create({ name, role, bio, photoUrl, order });
  res.status(201).json({ success: true, data: member });
});
