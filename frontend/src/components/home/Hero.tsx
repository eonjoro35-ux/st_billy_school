import Container from "../ui/Container";
import Button from "../ui/Button";
import { assetPath } from "../../lib/assets";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-50/60 border-b border-line">
      <Container className="grid lg:grid-cols-2 gap-12 items-center py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-semibold text-forest-900 leading-[1.1]">
            A school built by the Dandora community, for its children.
          </h1>
          <p className="text-lg text-ink/75 leading-relaxed">
            St. Billy's Community School has offered free, quality education to children aged 4 to 15 since 2008 —
            starting with two students and one teacher, and growing into a home for hundreds of learners who might
            otherwise have none.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button to="/admissions">Apply for admission</Button>
            <Button to="/about" variant="ghost">
              Learn our story
            </Button>
          </div>
          <dl className="flex flex-wrap gap-x-8 gap-y-3 pt-6 mt-2 border-t border-line text-sm">
            <div>
              <dt className="text-ink/55">Founded</dt>
              <dd className="text-forest-800 font-semibold text-lg">2008</dd>
            </div>
            <div>
              <dt className="text-ink/55">Learners today</dt>
              <dd className="text-forest-800 font-semibold text-lg">300+</dd>
            </div>
            <div>
              <dt className="text-ink/55">Ages served</dt>
              <dd className="text-forest-800 font-semibold text-lg">4–15</dd>
            </div>
          </dl>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border-4 border-paper bg-black shadow-card aspect-[4/3]">
          <img
            src={assetPath("images/students-uniform.jpg")}
            alt="School children learning together"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 text-paper font-display text-xl sm:text-2xl">
            Learning with dignity, hope, and community.
          </p>
        </div>
      </Container>
    </section>
  );
}
