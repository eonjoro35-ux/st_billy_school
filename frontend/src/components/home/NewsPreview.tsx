import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { useFetch } from "../../lib/useFetch";
import { api } from "../../lib/api";
import { ApiListResponse, NewsEventItem } from "../../types";
import { assetPath, resolveAsset } from "../../lib/assets";

const localNews: NewsEventItem[] = [
  { _id: "local-sports-day", title: "Annual Sports Day brings the community together", slug: "annual-sports-day", summary: "Learners, teachers, and parents gathered for football, athletics, and music.", body: "Our school community came together for a joyful day of sport and celebration.", coverImageUrl: assetPath("images/school-sports.jpg"), isEvent: true, createdAt: "2026-09-22" },
  { _id: "local-classroom", title: "Learning in a welcoming classroom", slug: "learning-in-a-welcoming-classroom", summary: "Small classes help every learner receive attention, encouragement, and room to grow.", body: "Our classrooms are built around patient teaching and practical support.", coverImageUrl: assetPath("images/classroom.jpg"), isEvent: false, createdAt: "2026-09-15" },
  { _id: "local-admissions", title: "Admissions open for the new intake", slug: "admissions-open", summary: "We welcome admission inquiries for children aged 4 to 15.", body: "Admissions are open for vulnerable and underprivileged learners in Dandora.", coverImageUrl: assetPath("images/students-uniform.jpg"), isEvent: false, createdAt: "2026-09-08" },
];

export default function NewsPreview() {
  const { data, loading } = useFetch(() => api.get<ApiListResponse<NewsEventItem>>("/news?limit=3"), []);
  const items = data?.data?.length ? data.data : localNews;

  return (
    <section className="py-20 bg-forest-50/50 border-y border-line">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading title="News from the school" subtitle="What's happening on campus and in the community." />
          <Button to="/news" variant="ghost" className="shrink-0">
            View all news
          </Button>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-56 rounded-lg bg-forest-100/60 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <Link
                key={item._id}
                to={`/news/${item.slug}`}
                className="group bg-paper border border-line rounded-lg overflow-hidden hover:shadow-card transition-shadow flex flex-col"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={resolveAsset(item.coverImageUrl || [assetPath("images/school-sports.jpg"), assetPath("images/classroom.jpg"), assetPath("images/students-uniform.jpg")][index % 3])}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-xs text-marigold-700 font-medium">
                    {new Date(item.createdAt).toLocaleDateString("en-KE", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="font-semibold text-forest-900 leading-snug group-hover:text-forest-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/65 leading-relaxed line-clamp-3">{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
