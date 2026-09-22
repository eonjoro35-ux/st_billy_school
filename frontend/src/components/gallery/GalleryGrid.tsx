import { useState } from "react";
import { useFetch } from "../../lib/useFetch";
import { api } from "../../lib/api";
import { ApiListResponse, GalleryCategory, GalleryImage } from "../../types";
import { assetPath, resolveAsset } from "../../lib/assets";

const categories: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "campus", label: "Campus" },
  { value: "classroom", label: "Classroom" },
  { value: "events", label: "Events" },
  { value: "sports", label: "Sports" },
  { value: "feeding-program", label: "Feeding programme" },
  { value: "community", label: "Community" },
];

const fallbackImages: Record<GalleryCategory, string> = {
  campus: assetPath("images/school-community.jpg"),
  classroom: assetPath("images/classroom.jpg"),
  events: assetPath("images/students-uniform.jpg"),
  sports: assetPath("images/school-sports.jpg"),
  "feeding-program": assetPath("images/school-feeding.jpg"),
  community: assetPath("images/school-community.jpg"),
};

const localGallery: GalleryImage[] = [
  { _id: "local-campus", title: "Morning assembly", imageUrl: assetPath("images/students-uniform.jpg"), category: "campus", caption: "Learners gathering for morning assembly.", createdAt: "" },
  { _id: "local-classroom", title: "Classroom lesson", imageUrl: assetPath("images/classroom.jpg"), category: "classroom", caption: "A primary class in session.", createdAt: "" },
  { _id: "local-sports", title: "Sports Day", imageUrl: assetPath("images/school-sports.jpg"), category: "sports", caption: "Athletics at our Annual Sports Day.", createdAt: "" },
  { _id: "local-feeding", title: "Feeding programme", imageUrl: assetPath("images/school-feeding.jpg"), category: "feeding-program", caption: "Nutritious meals for learners.", createdAt: "" },
  { _id: "local-community", title: "Community outreach", imageUrl: assetPath("images/school-community.jpg"), category: "community", caption: "Engaging with families in Dandora.", createdAt: "" },
  { _id: "local-events", title: "School event", imageUrl: assetPath("images/school-lesson.jpg"), category: "events", caption: "Celebrating with learners and parents.", createdAt: "" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "all">("all");
  const path = active === "all" ? "/gallery" : `/gallery?category=${active}`;
  const { data, loading } = useFetch(() => api.get<ApiListResponse<GalleryImage>>(path), [active]);
  const images = data?.data?.length ? data.data : localGallery.filter((image) => active === "all" || image.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${active === cat.value
              ? "bg-forest-700 text-paper border-forest-700"
              : "bg-paper text-ink/70 border-line hover:border-forest-400"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-forest-100/60 animate-pulse" />
          ))}
        </div>
      )}

      {!loading && images.length === 0 && (
        <div className="text-center py-16 border border-dashed border-line rounded-lg">
          <p className="text-ink/60">No photos in this category yet — check back soon.</p>
        </div>
      )}

      {!loading && images.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <figure key={image._id} className="rounded-lg overflow-hidden border border-line bg-forest-50 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={resolveAsset(image.imageUrl || fallbackImages[image.category] || fallbackImages.campus)}
                  alt={image.caption || image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              {image.caption && <figcaption className="text-xs text-ink/60 px-3 py-2">{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
