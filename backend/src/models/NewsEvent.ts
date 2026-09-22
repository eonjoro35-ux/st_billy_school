import { Schema, model, Document } from "mongoose";

export interface INewsEvent extends Document {
  title: string;
  slug: string;
  summary: string;
  body: string;
  coverImageUrl?: string;
  eventDate?: Date;
  isEvent: boolean;
  createdAt: Date;
}

const newsEventSchema = new Schema<INewsEvent>(
  {
    title: { type: String, required: [true, "Title is required"], trim: true, maxlength: 180 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    summary: { type: String, required: [true, "Summary is required"], trim: true, maxlength: 300 },
    body: { type: String, required: [true, "Body content is required"] },
    coverImageUrl: { type: String, trim: true },
    eventDate: { type: Date },
    isEvent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Auto-generate a URL-friendly slug from the title if one wasn't provided
newsEventSchema.pre("validate", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }
  next();
});

export default model<INewsEvent>("NewsEvent", newsEventSchema);
