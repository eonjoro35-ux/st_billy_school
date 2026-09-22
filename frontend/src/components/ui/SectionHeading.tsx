interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      <h2 className="text-3xl sm:text-4xl font-semibold text-forest-900 leading-tight">{title}</h2>
      {subtitle && <p className="text-base text-ink/70 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
