import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { useFetch } from "../../lib/useFetch";
import { api } from "../../lib/api";
import { ApiListResponse, Program } from "../../types";

const localPrograms: Program[] = [
  { _id: "education", name: "Education", ageRange: "Ages 4–15", description: "Alternative basic education helping every learner build confidence, knowledge, and a path beyond poverty.", icon: "book-open", order: 1 },
  { _id: "counselling", name: "Psycho-counselling services", ageRange: "Learner support", description: "Psychosocial support helps students navigate challenges, stay engaged, and grow in wellbeing.", icon: "heart", order: 2 },
  { _id: "feeding", name: "Feeding programme", ageRange: "Daily meals", description: "Nutritious meals help children arrive ready to concentrate, learn, and thrive.", icon: "utensils", order: 3 },
];

const accentByIndex = ["border-forest-600", "border-marigold-500", "border-brick-500"];

export default function ProgramsPreview() {
  const { data, loading } = useFetch(() => api.get<ApiListResponse<Program>>("/programs"), []);
  const programs = (data?.data?.length ? data.data : localPrograms).slice(0, 6);

  return (
    <section className="py-20 bg-forest-50/50 border-y border-line">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            title="How we teach and support our learners"
            subtitle="From early childhood through to life skills training, each programme meets learners where they are."
          />
          <Button to="/academics" variant="ghost" className="shrink-0">
            View all academics
          </Button>
        </div>

        {loading ? (
          <ProgramsSkeleton />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((program, i) => (
              <div
                key={program._id}
                className={`bg-paper border-l-4 ${accentByIndex[i % 3]} border-t border-r border-b border-line rounded-r-lg p-6 flex flex-col gap-3`}
              >
                <Icon name={program.icon} className="w-7 h-7 text-forest-700" />
                <h3 className="font-semibold text-forest-900 text-lg leading-snug">{program.name}</h3>
                <p className="text-sm font-medium text-marigold-700">{program.ageRange}</p>
                <p className="text-sm text-ink/70 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function ProgramsSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-44 rounded-r-lg bg-forest-100/60 animate-pulse border-l-4 border-forest-200" />
      ))}
    </div>
  );
}
