// Starter content so the site isn't empty on first run.
// Replace image URLs and bios with the school's real photos and details.

export const programs = [
  {
    name: "Early Childhood Development",
    ageRange: "Ages 4–6",
    description:
      "A gentle introduction to learning through play, songs, and hands-on activities that build early literacy, numeracy, and social skills.",
    icon: "sprout",
    order: 1,
  },
  {
    name: "Primary Education",
    ageRange: "Ages 7–13",
    description:
      "A full primary curriculum aligned with national standards, taught in small classes so every learner gets individual attention.",
    icon: "book-open",
    order: 2,
  },
  {
    name: "Bridging & Catch-Up Classes",
    ageRange: "Ages 10–15",
    description:
      "Focused support for learners who joined school late or fell behind, helping them close the gap and rejoin their age-appropriate grade.",
    icon: "compass",
    order: 3,
  },
  {
    name: "Life Skills & Vocational Training",
    ageRange: "Ages 13–15",
    description:
      "Practical skills — tailoring, carpentry, ICT basics, and entrepreneurship — that give older learners a path forward alongside academics.",
    icon: "tool",
    order: 4,
  },
  {
    name: "School Feeding Programme",
    ageRange: "All learners",
    description:
      "A daily nutritious meal for every child, because a learner who is well fed is a learner who can actually concentrate and thrive.",
    icon: "utensils",
    order: 5,
  },
  {
    name: "Sports & Talent Development",
    ageRange: "All learners",
    description:
      "Football, athletics, music, and art clubs that build confidence, teamwork, and a healthy outlet for youthful energy.",
    icon: "trophy",
    order: 6,
  },
];

export const team = [
  {
    name: "Grace Wanjiru",
    role: "Founder & Director",
    bio: "Started the school in 2008 with two students and a single classroom, and has led its growth ever since.",
    photoUrl: "",
    order: 1,
  },
  {
    name: "Samuel Otieno",
    role: "Head Teacher",
    bio: "Oversees the academic programme and coordinates the teaching staff across all grade levels.",
    photoUrl: "",
    order: 2,
  },
  {
    name: "Faith Achieng",
    role: "Welfare & Feeding Programme Coordinator",
    bio: "Runs the daily feeding programme and coordinates welfare support for learners and their families.",
    photoUrl: "",
    order: 3,
  },
  {
    name: "Board of Directors",
    role: "Governance",
    bio: "A volunteer board of community members, educators, and well-wishers overseeing the school's direction and accountability.",
    photoUrl: "",
    order: 4,
  },
];

export const newsEvents = [
  {
    title: "Annual Sports Day brings the whole community together",
    slug: "annual-sports-day-2026",
    summary: "Learners, teachers, and parents gathered for a day of football, athletics, and music.",
    body:
      "Our Annual Sports Day was held on the school grounds this term, with every class taking part in football, " +
      "athletics, and traditional games. Parents and community members joined in as spectators and volunteers, " +
      "and the day closed with a shared meal for all learners. Events like this help build school spirit and give " +
      "our learners a healthy, joyful outlet outside the classroom.",
    coverImageUrl: "/images/school-sports.jpg",
    eventDate: new Date(new Date().getFullYear(), 9, 15),
    isEvent: true,
  },
  {
    title: "New classroom block opens for upper primary learners",
    slug: "new-classroom-block-opens",
    summary: "Thanks to the support of our partners, three new classrooms are now in use.",
    body:
      "With support from our partner organisations and well-wishers, we have completed construction of three new " +
      "classrooms to serve our growing upper primary classes. This expansion allows us to keep class sizes small " +
      "and welcome more learners from the surrounding community. We are grateful to everyone who contributed " +
      "materials, labour, and funding to make this possible.",
    coverImageUrl: "/images/classroom.jpg",
    isEvent: false,
  },
  {
    title: "Admissions open for the new intake",
    slug: "admissions-open-new-intake",
    summary: "We are now accepting admission inquiries for children aged 4 to 15.",
    body:
      "Admissions for our next intake are now open. We welcome children between the ages of 4 and 15 from all " +
      "backgrounds, with priority given to vulnerable, orphaned, and underprivileged learners in the Dandora " +
      "community. Visit our Admissions page to learn about the process and submit an inquiry.",
    coverImageUrl: "/images/students-uniform.jpg",
    isEvent: false,
  },
];

export const gallery = [
  { title: "Morning assembly", imageUrl: "/images/students-uniform.jpg", category: "campus", caption: "Learners gathering for morning assembly." },
  { title: "Classroom lesson", imageUrl: "/images/classroom.jpg", category: "classroom", caption: "A primary class in session." },
  { title: "Sports Day", imageUrl: "/images/school-sports.jpg", category: "sports", caption: "Athletics at our Annual Sports Day." },
  { title: "Feeding programme", imageUrl: "/images/school-feeding.jpg", category: "feeding-program", caption: "Lunchtime through our daily feeding programme." },
  { title: "Community outreach", imageUrl: "/images/school-community.jpg", category: "community", caption: "Engaging with families in Dandora." },
  { title: "School event", imageUrl: "/images/school-lesson.jpg", category: "events", caption: "Celebrating with learners and parents." },
];
