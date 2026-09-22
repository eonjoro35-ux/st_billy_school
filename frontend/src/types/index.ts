export interface Program {
  _id: string;
  name: string;
  ageRange: string;
  description: string;
  icon: string;
  order: number;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string;
  order: number;
}

export interface NewsEventItem {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  body: string;
  coverImageUrl?: string;
  eventDate?: string;
  isEvent: boolean;
  createdAt: string;
}

export type GalleryCategory = "campus" | "classroom" | "events" | "sports" | "feeding-program" | "community";

export interface GalleryImage {
  _id: string;
  title: string;
  imageUrl: string;
  category: GalleryCategory;
  caption?: string;
  createdAt: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface AdmissionFormValues {
  childName: string;
  childAge: number | "";
  guardianName: string;
  guardianPhone: string;
  guardianEmail?: string;
  desiredProgram: string;
  additionalNotes?: string;
}

export interface ApiListResponse<T> {
  success: boolean;
  count: number;
  data: T[];
}

export interface ApiItemResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
