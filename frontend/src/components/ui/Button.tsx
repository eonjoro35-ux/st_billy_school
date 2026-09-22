import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  "aria-label"?: string;
  title?: string;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends BaseProps {
  to?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<Variant, string> = {
  primary: "bg-forest-700 text-paper hover:bg-forest-800",
  secondary: "bg-marigold-400 text-forest-900 hover:bg-marigold-500",
  ghost: "bg-transparent text-forest-700 border border-forest-700/30 hover:bg-forest-50",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-150 disabled:opacity-60 disabled:pointer-events-none";

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  onClick,
  type,
  disabled,
  "aria-label": ariaLabel,
  title,
}: ButtonProps & { disabled?: boolean }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} title={title}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel} title={title}>
      {children}
    </button>
  );
}
