import { Schema, model, Document } from "mongoose";

export interface IContactMessage extends Document {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "new" | "read" | "responded";
  createdAt: Date;
}

const contactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: [true, "Name is required"], trim: true, maxlength: 100 },
    email: { type: String, required: [true, "Email is required"], trim: true, lowercase: true },
    phone: { type: String, trim: true, maxlength: 30 },
    subject: { type: String, required: [true, "Subject is required"], trim: true, maxlength: 150 },
    message: { type: String, required: [true, "Message is required"], trim: true, maxlength: 3000 },
    status: { type: String, enum: ["new", "read", "responded"], default: "new" },
  },
  { timestamps: true }
);

export default model<IContactMessage>("ContactMessage", contactMessageSchema);
