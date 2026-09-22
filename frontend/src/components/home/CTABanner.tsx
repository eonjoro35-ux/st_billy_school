import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTABanner() {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-forest-800 rounded-2xl px-8 py-12 sm:px-14 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-paper leading-tight mb-3">
              Know a child who needs a place like this?
            </h2>
            <p className="text-paper/70 leading-relaxed">
              Admissions are open year-round for children aged 4 to 15. Reach out and our team will walk you through
              the process, no matter your circumstances.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button to="/admissions" variant="secondary">
              Start an inquiry
            </Button>
            <Button to="/contact" variant="ghost" className="border-paper/30 text-paper hover:bg-paper/10">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
