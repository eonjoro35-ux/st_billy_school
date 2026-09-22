import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import { useFetch } from "../lib/useFetch";
import { api } from "../lib/api";
import { ApiListResponse, NewsEventItem } from "../types";
import { assetPath, resolveAsset } from "../lib/assets";

const localNews: NewsEventItem[] = [
  { _id: "local-sports-day", title: "Annual Sports Day brings the community together", slug: "annual-sports-day", summary: "Learners, teachers, and parents gathered for football, athletics, and music.", body: "Our school community came together for a joyful day of sport and celebration.", coverImageUrl: assetPath("images/school-sports.jpg"), isEvent: true, createdAt: "2026-09-22" },
  { _id: "local-classroom", title: "Learning in a welcoming classroom", slug: "learning-in-a-welcoming-classroom", summary: "Small classes help every learner receive attention, encouragement, and room to grow.", body: "Our classrooms are built around patient teaching and practical support.", coverImageUrl: assetPath("images/classroom.jpg"), isEvent: false, createdAt: "2026-09-15" },
  { _id: "local-admissions", title: "Admissions open for the new intake", slug: "admissions-open", summary: "We welcome admission inquiries for children aged 4 to 15.", body: "Admissions are open for vulnerable and underprivileged learners in Dandora.", coverImageUrl: assetPath("images/students-uniform.jpg"), isEvent: false, createdAt: "2026-09-08" },
];

export default function News() {
  const { data, loading, error } = useFetch(() => api.get<ApiListResponse<NewsEventItem>>("/news"), []);
  const items = data?.data?.length ? data.data : localNews;

  return (
    <>
      <PageHeader title="News & Events" subtitle="Updates from the classroom, the community, and everything in between." />

      <section className="py-16">
        <Container>
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-56 rounded-lg bg-forest-100/60 animate-pulse" />
              ))}
            </div>
          )}

          {error && <p className="text-brick-600">Could not load news right now. Please try again shortly.</p>}

          {!loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <Link
                  key={item._id}
                  to={`/news/${item.slug}`}
                  className="group bg-paper border border-line rounded-lg overflow-hidden hover:shadow-card transition-shadow flex flex-col"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={resolveAsset(item.coverImageUrl || [assetPath("images/school-sports.jpg"), assetPath("images/classroom.jpg"), assetPath("images/students-uniform.jpg")][index % 3])}
                      alt=""
                      className="w-full h-full object-cover"
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
                    <h2 className="font-semibold text-forest-900 leading-snug group-hover:text-forest-700 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-ink/65 leading-relaxed line-clamp-3">{item.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
