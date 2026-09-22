import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import AdmissionForm from "../components/admissions/AdmissionForm";

const steps = [
  {
    title: "Submit an inquiry",
    body: "Fill in the form below with your child's details. It takes about two minutes.",
  },
  {
    title: "We reach out",
    body: "Our admissions team contacts you within 2 working days to discuss next steps.",
  },
  {
    title: "Home or school visit",
    body: "Where needed, we arrange a short visit to understand your child's situation and needs.",
  },
  {
    title: "Welcome to St. Billy's",
    body: "Your child is placed in the right class and programme, and the school year begins.",
  },
];

export default function Admissions() {
  return (
    <>
      <PageHeader
        title="Admissions are open year-round."
        subtitle="We welcome children aged 4 to 15 from every background, with priority given to vulnerable and underprivileged learners in Dandora."
      />

      <section className="py-16">
        <Container className="grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-semibold text-forest-900 mb-6">How admission works</h2>
            <ol className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-forest-700 text-paper flex items-center justify-center font-semibold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-forest-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 p-5 rounded-lg bg-marigold-50 border border-marigold-200">
              <p className="text-sm text-forest-900 leading-relaxed">
                No documents on hand? No problem — reach out and our team will guide you through what's needed on a
                case-by-case basis. No child is turned away for lack of paperwork or fees.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-forest-900 mb-6">Start your inquiry</h2>
            <AdmissionForm />
          </div>
        </Container>
      </section>
    </>
  );
}
