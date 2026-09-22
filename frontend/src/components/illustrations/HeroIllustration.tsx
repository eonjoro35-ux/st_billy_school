/**
 * A hand-built SVG scene (sun, rolling hills, a tree, and children holding hands)
 * standing in for site photography until the school supplies its own images.
 * Colors are pulled from the Tailwind theme rather than hardcoded hexes.
 */
export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 560 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" role="img" aria-label="Illustration of children playing under a tree with the sun rising over rolling hills">
      <circle cx="420" cy="120" r="86" fill="#76252A" opacity="0.9" />
      <g stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round">
        <line x1="420" y1="10" x2="420" y2="34" />
        <line x1="510" y1="45" x2="494" y2="63" />
        <line x1="528" y1="120" x2="502" y2="120" />
      </g>

      <path d="M0 300 C 90 250, 180 340, 280 300 C 380 260, 470 330, 560 290 V480 H0 Z" fill="#D9A8AC" opacity="0.55" />
      <path d="M0 340 C 100 300, 210 380, 320 335 C 410 300, 500 360, 560 330 V480 H0 Z" fill="#76252A" opacity="0.8" />
      <path d="M0 390 C 120 360, 240 420, 360 385 C 440 360, 500 400, 560 380 V480 H0 Z" fill="#40151C" />

      {/* Tree */}
      <rect x="118" y="280" width="14" height="90" rx="4" fill="#000000" />
      <circle cx="125" cy="250" r="58" fill="#76252A" />
      <circle cx="85" cy="270" r="38" fill="#9A4A52" />
      <circle cx="165" cy="268" r="42" fill="#9A4A52" />

      {/* Children holding hands, simple rounded silhouettes */}
      <g fill="#000000">
        <circle cx="260" cy="330" r="16" />
        <rect x="246" y="348" width="28" height="44" rx="10" />
        <circle cx="315" cy="316" r="19" />
        <rect x="297" y="337" width="36" height="55" rx="12" fill="#FFFFFF" />
        <circle cx="370" cy="332" r="15" />
        <rect x="357" y="349" width="26" height="42" rx="10" />
      </g>
      <g stroke="#000000" strokeWidth="6" strokeLinecap="round">
        <line x1="274" y1="370" x2="298" y2="365" />
        <line x1="333" y1="365" x2="357" y2="370" />
      </g>

      {/* Simple bird shapes for life */}
      <g stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M60 90 q10 -10 20 0 q10 -10 20 0" />
        <path d="M470 210 q8 -8 16 0 q8 -8 16 0" />
      </g>
    </svg>
  );
}
