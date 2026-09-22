import { Link, useParams } from "react-router-dom";
import Container from "../components/ui/Container";
import { useFetch } from "../lib/useFetch";
import { api } from "../lib/api";
import { ApiItemResponse, NewsEventItem } from "../types";
import { assetPath, resolveAsset } from "../lib/assets";

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading, error } = useFetch(
    () => api.get<ApiItemResponse<NewsEventItem>>(`/news/${slug}`),
    [slug]
  );
  const item = data?.data;

  return (
    <section className="py-16">
      <Container className="max-w-prose">
        <Link to="/news" className="text-sm text-forest-700 hover:text-forest-900 mb-8 inline-block">
          ← Back to News & Events
        </Link>

        {loading && <div className="h-96 rounded-lg bg-forest-100/60 animate-pulse" />}

        {error && <p className="text-brick-600">This article could not be found.</p>}

        {item && (
          <article>
            <span className="text-xs text-marigold-700 font-medium">
              {new Date(item.createdAt).toLocaleDateString("en-KE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-forest-900 leading-tight mt-2 mb-6">
              {item.title}
            </h1>
            <div className="h-64 rounded-lg overflow-hidden mb-8">
              <img
                src={resolveAsset(item.coverImageUrl || assetPath(item.isEvent ? "images/school-sports.jpg" : "images/classroom.jpg"))}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-ink/80 leading-relaxed whitespace-pre-line">{item.body}</p>
          </article>
        )}
      </Container>
    </section>
  );
}
