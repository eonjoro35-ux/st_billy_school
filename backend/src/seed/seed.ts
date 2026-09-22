import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "../config/db";

import Program from "../models/Program";
import TeamMember from "../models/TeamMember";
import NewsEvent from "../models/NewsEvent";
import GalleryImage from "../models/GalleryImage";
import { programs, team, newsEvents, gallery } from "./seedData";

dotenv.config();

async function run() {
  await connectDB();

  const shouldDestroy = process.argv.includes("--destroy");

  if (shouldDestroy) {
    await Promise.all([
      Program.deleteMany({}),
      TeamMember.deleteMany({}),
      NewsEvent.deleteMany({}),
      GalleryImage.deleteMany({}),
    ]);
    console.log("All seeded collections cleared.");
    await mongoose.disconnect();
    process.exit(0);
  }

  await Promise.all([
    Program.deleteMany({}),
    TeamMember.deleteMany({}),
    NewsEvent.deleteMany({}),
    GalleryImage.deleteMany({}),
  ]);

  await Program.insertMany(programs);
  await TeamMember.insertMany(team);
  await NewsEvent.insertMany(newsEvents);
  await GalleryImage.insertMany(gallery);

  console.log("Database seeded successfully:");
  console.log(`  Programs:    ${programs.length}`);
  console.log(`  Team:        ${team.length}`);
  console.log(`  News/Events: ${newsEvents.length}`);
  console.log(`  Gallery:     ${gallery.length}`);

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
