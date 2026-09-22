import { Request, Response } from "express";
import GalleryImage from "../models/GalleryImage";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";

// @route  GET /api/gallery
// @desc   List gallery images, optionally filtered by ?category=
export const getGalleryImages = asyncHandler(async (req: Request, res: Response) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const images = await GalleryImage.find(filter).sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: images.length, data: images });
});

// @route  POST /api/gallery
// @desc   Add a new gallery image — for internal/admin use
export const createGalleryImage = asyncHandler(async (req: Request, res: Response) => {
  const { title, imageUrl, category, caption } = req.body;
  const image = await GalleryImage.create({ title, imageUrl, category, caption });
  res.status(201).json({ success: true, data: image });
});

// @route  DELETE /api/gallery/:id
// @desc   Remove a gallery image — for internal/admin use
export const deleteGalleryImage = asyncHandler(async (req: Request, res: Response) => {
  const image = await GalleryImage.findByIdAndDelete(req.params.id);
  if (!image) throw new ApiError(404, "Gallery image not found");
  res.status(200).json({ success: true, message: "Image removed", data: image });
});
