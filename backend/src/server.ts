import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import { connectDB } from "./config/db";
import { notFound, errorHandler } from "./middleware/errorHandler";

import contactRoutes from "./routes/contactRoutes";
import admissionRoutes from "./routes/admissionRoutes";
import galleryRoutes from "./routes/galleryRoutes";
import newsRoutes from "./routes/newsRoutes";
import programRoutes from "./routes/programRoutes";
import teamRoutes from "./routes/teamRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Core middleware ---
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// --- CORS: only allow the configured frontend origin(s) ---
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// --- Rate limiting on form-submission endpoints to deter spam/abuse ---
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { success: false, message: "Too many requests. Please try again later." },
});
app.use("/api/contact", formLimiter);
app.use("/api/admissions", formLimiter);

// --- Health check ---
app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "St. Billy's Community School API is running" });
});

// --- Routes ---
app.use("/api/contact", contactRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/team", teamRoutes);

// --- Error handling (must be last) ---
app.use(notFound);
app.use(errorHandler);

// --- Start server after DB connects ---
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
  });
});

export default app;
