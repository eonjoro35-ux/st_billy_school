import { Schema, model, Document } from "mongoose";

export interface IAdmissionInquiry extends Document {
  childName: string;
  childAge: number;
  guardianName: string;
  guardianPhone: string;
  guardianEmail?: string;
  desiredProgram: string;
  additionalNotes?: string;
  status: "pending" | "contacted" | "enrolled" | "declined";
  createdAt: Date;
}

const admissionInquirySchema = new Schema<IAdmissionInquiry>(
  {
    childName: { type: String, required: [true, "Child's name is required"], trim: true, maxlength: 100 },
    childAge: {
      type: Number,
      required: [true, "Child's age is required"],
      min: [3, "Child must be at least 3 years old"],
      max: [20, "Child must be 20 years old or younger"],
    },
    guardianName: { type: String, required: [true, "Guardian's name is required"], trim: true, maxlength: 100 },
    guardianPhone: { type: String, required: [true, "Guardian's phone number is required"], trim: true, maxlength: 30 },
    guardianEmail: { type: String, trim: true, lowercase: true },
    desiredProgram: { type: String, required: [true, "Please select a program"], trim: true },
    additionalNotes: { type: String, trim: true, maxlength: 2000 },
    status: {
      type: String,
      enum: ["pending", "contacted", "enrolled", "declined"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default model<IAdmissionInquiry>("AdmissionInquiry", admissionInquirySchema);
