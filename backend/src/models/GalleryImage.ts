import { Schema, model, Document } from "mongoose";

export type GalleryCategory = "campus" | "classroom" | "events" | "sports" | "feeding-program" | "community";

export interface IGalleryImage extends Document {
  title: string;
  imageUrl: string;
  category: GalleryCategory;
  caption?: string;
  createdAt: Date;
}

const galleryImageSchema = new Schema<IGalleryImage>(
  {
    title: { type: String, required: [true, "Title is required"], trim: true, maxlength: 120 },
    imageUrl: { type: String, required: [true, "Image URL is required"], trim: true },
    category: {
      type: String,
      enum: ["campus", "classroom", "events", "sports", "feeding-program", "community"],
      default: "campus",
    },
    caption: { type: String, trim: true, maxlength: 300 },
  },
  { timestamps: true }
);

export default model<IGalleryImage>("GalleryImage", galleryImageSchema);
