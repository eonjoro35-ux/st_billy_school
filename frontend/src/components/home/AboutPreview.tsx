import Container from "../ui/Container";
import Button from "../ui/Button";
import PatternDivider from "../illustrations/PatternDivider";

export default function AboutPreview() {
  return (
    <section className="py-20">
      <Container className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <PatternDivider className="mb-6 max-w-[120px]" />
          <h2 className="text-3xl sm:text-4xl font-semibold text-forest-900 leading-tight">
            Every child deserves a desk, a teacher, and a warm meal.
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-ink/75 leading-relaxed">
          <p>
            We are a non-profit community day school offering alternative basic education to children between the
            ages of 4 and 15 who face diverse learning challenges. We welcome students from every socio-economic,
            cultural, and religious background, and work to give each one an environment where they can grow —
            academically and personally.
          </p>
          <p>
            Alongside the classroom, we run a daily feeding programme, community outreach, sports and talent
            development, and support for the rehabilitation of vulnerable children and youth — working hand in hand
            with local authorities, well-wishers, and government partners.
          </p>
          <div>
            <Button to="/about" variant="ghost">
              Read our full story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
