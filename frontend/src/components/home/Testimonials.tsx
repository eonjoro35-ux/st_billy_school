import Container from "../ui/Container";

const quotes = [
  {
    quote:
      "My daughter used to stay home while I looked for work. Now she has a uniform, a desk, and teachers who know her by name.",
    name: "A parent in Dandora",
  },
  {
    quote:
      "I joined at nine years old, unable to read. By the time I finished here, I was tutoring the younger learners.",
    name: "A former student",
  },
  {
    quote: "The feeding programme alone has changed how our children show up to learn — fed, focused, and ready.",
    name: "A community volunteer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((q) => (
            <figure key={q.name} className="flex flex-col gap-4">
              <blockquote className="text-lg font-display text-forest-900 leading-snug">"{q.quote}"</blockquote>
              <figcaption className="text-sm text-ink/60">{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
