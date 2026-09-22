import Container from "./Container";
import PatternDivider from "../illustrations/PatternDivider";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-forest-50/60 border-b border-line">
      <Container className="py-14 sm:py-16">
        <PatternDivider className="mb-5 max-w-[100px]" />
        <h1 className="text-3xl sm:text-4xl font-semibold text-forest-900 leading-tight max-w-2xl">{title}</h1>
        {subtitle && <p className="mt-3 text-base text-ink/70 max-w-xl leading-relaxed">{subtitle}</p>}
      </Container>
    </section>
  );
}
