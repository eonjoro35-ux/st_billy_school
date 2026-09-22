interface IconProps {
  name: string;
  className?: string;
}

/**
 * A small hand-picked set of line icons (not a full library) covering
 * everything the site's programs and feature sections need.
 */
const paths: Record<string, React.ReactNode> = {
  sprout: (
    <>
      <path d="M12 20V11" />
      <path d="M12 11C12 7 8 6 5 6c0 4 2 7 7 7Z" />
      <path d="M12 11c0-4.5 4-5.5 7-5.5 0 4.2-2.2 7.3-7 7.5" />
    </>
  ),
  "book-open": (
    <>
      <path d="M12 6.5C10.3 5 8 4.3 4 4.5v13c4 -.2 6.3.5 8 2 1.7-1.5 4-2.2 8-2v-13c-4-.2-6.3.5-8 2Z" />
      <path d="M12 6.5v13" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13.7 13.7 8.5 15.5 10.3 10.3z" />
    </>
  ),
  tool: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.1L4 16.5V20h3.5l5.1-5.1a4 4 0 0 0 5.1-5.6l-2.9 2.9-2-2Z" />
    </>
  ),
  utensils: (
    <>
      <path d="M7 3v7a2 2 0 0 0 4 0V3" />
      <path d="M9 10v11" />
      <path d="M17 3c-1.7 0-3 1.6-3 4.5S15.3 12 17 12v9" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M5 5H3v2a4 4 0 0 0 4 4" />
      <path d="M19 5h2v2a4 4 0 0 1-4 4" />
      <path d="M12 13v4" />
      <path d="M9 21h6" />
      <path d="M10 17h4v4h-4z" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-9.3-8.8C1.2 8 2.6 5 6 5c2 0 3.4 1.2 4 2.3C10.6 6.2 12 5 14 5c3.4 0 4.8 3 3.3 6.2C15 15.6 12 20 12 20Z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.6-3.3 2.7-5 5.5-5s4.9 1.7 5.5 5" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M15.5 14c2.3.2 3.9 1.7 4.5 5" />
    </>
  ),
  shield: <path d="M12 3 5 6v5c0 4.8 3 8.3 7 10 4-1.7 7-5.2 7-10V6l-7-3Z" />,
  home: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m4 17 4.5-4 3 2.5 2-2 4.5 3.5" />
    </>
  ),
  newspaper: (
    <>
      <path d="M5 4h14v16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
};

export default function Icon({ name, className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || paths.heart}
    </svg>
  );
}
