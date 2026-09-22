import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { assetPath } from "../../lib/assets";

const links = [
  { to: "/", label: "Home", icon: "home" },
  { to: "/about", label: "About", icon: "users" },
  { to: "/academics", label: "Academics", icon: "book-open" },
  { to: "/admissions", label: "Admissions", icon: "mail" },
  { to: "/gallery", label: "Gallery", icon: "image" },
  { to: "/news", label: "News & Events", icon: "newspaper" },
  { to: "/contact", label: "Contact", icon: "heart" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("st-billy-theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("st-billy-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 border-b border-line">
      <Container className="flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <LogoMark />
          <span className="font-display text-lg sm:text-xl font-semibold text-forest-900 leading-tight">
            St. Billy's
            <span className="block text-xs font-body font-medium text-forest-600 tracking-normal">
              Community School
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar-link text-sm font-medium transition-colors ${isActive ? "text-forest-800" : "text-ink/70 hover:text-forest-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <div className="flex items-center gap-3">
            <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode((current) => !current)} />
            <Button to="/donate" variant="secondary">Donate</Button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <span className="text-xs font-medium text-forest-700">Dandora, Nairobi</span>
          <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode((current) => !current)} />
        </div>
      </Container>

      <div className="navbar-mobile-bar lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-line bg-paper/95 backdrop-blur shadow-[0_-8px_24px_rgba(18,51,29,0.12)]">
        <Container className="grid grid-cols-7 gap-0 py-2.5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar-mobile-link w-full h-10 inline-flex items-center justify-center rounded-full transition-colors ${isActive ? "bg-forest-800 text-paper" : "text-ink/70"
                }`
              }
              aria-label={link.label}
              title={link.label}
            >
              <Icon name={link.icon} className="w-5 h-5" />
            </NavLink>
          ))}
        </Container>
      </div>
    </header>
  );
}

function ThemeToggle({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="navbar-toggle inline-flex items-center justify-center w-10 h-10 rounded-full border border-line text-forest-700 hover:bg-forest-50 transition-colors"
    >
      <Icon name={darkMode ? "sun" : "moon"} className="w-5 h-5" />
    </button>
  );
}

function LogoMark() {
  return (
    <img src={assetPath("images/st-bill-logo.png")} alt="" width="44" height="44" className="w-11 h-11 object-contain" />
  );
}

