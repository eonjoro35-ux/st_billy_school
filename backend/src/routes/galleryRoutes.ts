import { Router } from "express";
import { getGalleryImages, createGalleryImage, deleteGalleryImage } from "../controllers/galleryController";

const router = Router();

router.route("/").get(getGalleryImages).post(createGalleryImage);
router.route("/:id").delete(deleteGalleryImage);

export default router;
