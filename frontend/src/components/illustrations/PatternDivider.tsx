/** A thin repeating triangle band, evoking kitenge trim, used as a quiet section divider. */
export default function PatternDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 12" preserveAspectRatio="xMidYMid slice" className={`w-full h-3 ${className}`} aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <polygon
          key={i}
          points={`${i * 12},12 ${i * 12 + 6},0 ${i * 12 + 12},12`}
          fill={i % 2 === 0 ? "#76252A" : "#FFFFFF"}
        />
      ))}
    </svg>
  );
}
