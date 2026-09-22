import Container from "../ui/Container";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const points = [
  {
    icon: "book-open",
    title: "EDUCATION",
    body: "We offer alternative basic education to students between the age of 4 and 15 years from poor backgrounds or vulnerable families. Our holistic education aims to help these students break out of the cycle of poverty and reach their full potential. Education is a powerful weapon of personal development that levels the playing field for children, regardless of their background.",
  },
  {
    icon: "heart",
    title: "PSYCHO-COUNSELLING SERVICES",
    body: "We provide psycho-counseling services to help students cope with psychological challenges. This enables them to focus on their studies and excel academically. Data suggests that maintaining good mental health is crucial for better performance outcomes. St. Bill Community runs sensitization programs and provides mental health services, including psychosocial support groups. We encourage students to participate in support groups for emotional well-being.",
  },
  {
    icon: "utensils",
    title: "FEEDING PROGRAM",
    body: "St. Bill serves as a feeding center, providing meals to students in need. We offer porridge at 10 AM, lunch, and a meal at 4:30 PM. Proper nutrition is essential for brain development, and we believe that a healthy diet contributes to improved academic performance. Due to financial difficulties faced by their families, many learners rely on these meals. We welcome food donations to support our feeding program.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="How we support our learners" subtitle="ST BILL COMMUNITY EDUCATION CENTRE" />
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {points.map((point) => (
            <div key={point.title} className="flex flex-col gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-forest-700 text-paper flex items-center justify-center">
                <Icon name={point.icon} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-forest-900 text-lg mb-2">{point.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
