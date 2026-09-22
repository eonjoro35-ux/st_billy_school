import { Schema, model, Document } from "mongoose";

export interface ITeamMember extends Document {
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string;
  order: number;
}

const teamMemberSchema = new Schema<ITeamMember>(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    role: { type: String, required: true, trim: true, maxlength: 100 },
    bio: { type: String, trim: true, maxlength: 500 },
    photoUrl: { type: String, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model<ITeamMember>("TeamMember", teamMemberSchema);
