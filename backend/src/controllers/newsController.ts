import { Request, Response } from "express";
import NewsEvent from "../models/NewsEvent";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";

// @route  GET /api/news
// @desc   List all news & events (newest first), optionally ?limit=3
export const getNewsEvents = asyncHandler(async (req: Request, res: Response) => {
  const limit = req.query.limit ? Number(req.query.limit) : 0;
  let query = NewsEvent.find().sort({ createdAt: -1 });
  if (limit) query = query.limit(limit);
  const items = await query;
  res.status(200).json({ success: true, count: items.length, data: items });
});

// @route  GET /api/news/:slug
// @desc   Get a single news/event article by its slug
export const getNewsEventBySlug = asyncHandler(async (req: Request, res: Response) => {
  const item = await NewsEvent.findOne({ slug: req.params.slug });
  if (!item) throw new ApiError(404, "Article not found");
  res.status(200).json({ success: true, data: item });
});

// @route  POST /api/news
// @desc   Create a news/event article — for internal/admin use
export const createNewsEvent = asyncHandler(async (req: Request, res: Response) => {
  const { title, slug, summary, body, coverImageUrl, eventDate, isEvent } = req.body;
  const item = await NewsEvent.create({ title, slug, summary, body, coverImageUrl, eventDate, isEvent });
  res.status(201).json({ success: true, data: item });
});
