import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import { Program } from "../types";

const accentByIndex = ["border-forest-600", "border-marigold-500", "border-brick-500"];

const programs: Program[] = [
  {
    _id: "education",
    name: "Education",
    ageRange: "Ages 4–15",
    description:
      "Alternative basic education for children from vulnerable families, helping every learner build confidence, knowledge, and a path beyond poverty.",
    icon: "book-open",
    order: 1,
  },
  {
    _id: "psycho-counselling",
    name: "Psycho-counselling services",
    ageRange: "Learner support",
    description:
      "Psychosocial support groups and counselling help students navigate emotional challenges, stay engaged in learning, and grow in wellbeing.",
    icon: "heart",
    order: 2,
  },
  {
    _id: "feeding-programme",
    name: "Feeding programme",
    ageRange: "Daily meals",
    description:
      "Porridge at 10 AM, lunch, and a 4:30 PM meal help children who face food insecurity arrive ready to concentrate and thrive.",
    icon: "utensils",
    order: 3,
  },
];

export default function Academics() {
  return (
    <>
      <PageHeader
        title="Education, wellbeing, and nourishment for every learner."
        subtitle="Our programmes combine alternative basic education with psycho-counselling and daily meals for children aged 4 to 15."
      />

      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <div
                key={program._id}
                className={`reveal-card bg-paper/90 border-l-4 ${accentByIndex[i]} border-t border-r border-b border-line rounded-r-lg p-7 flex flex-col gap-3 shadow-card`}
              >
                <Icon name={program.icon} className="w-8 h-8 text-forest-700" />
                <h2 className="text-xl font-semibold text-forest-900">{program.name}</h2>
                <p className="text-sm font-medium text-marigold-700">{program.ageRange}</p>
                <p className="text-sm text-ink/70 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-forest-800">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-paper mb-2">Wondering which programme fits your child?</h2>
            <p className="text-paper/70 max-w-lg">
              Tell us a bit about your child's age and background, and our team will guide you to the right
              starting point.
            </p>
          </div>
          <Button to="/admissions" variant="secondary" className="shrink-0">
            Start an inquiry
          </Button>
        </Container>
      </section>
    </>
  );
}
