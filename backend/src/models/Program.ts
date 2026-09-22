import { Schema, model, Document } from "mongoose";

export interface IProgram extends Document {
  name: string;
  ageRange: string;
  description: string;
  icon: string;
  order: number;
}

const programSchema = new Schema<IProgram>(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    ageRange: { type: String, required: true, trim: true, maxlength: 40 },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    icon: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model<IProgram>("Program", programSchema);
