import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { assetPath } from "../../lib/assets";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News & Events" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-paper/90 mt-24">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={assetPath("images/st-bill-logo.png")} alt="" width="40" height="40" className="w-10 h-10 object-contain" />
            <span className="font-display text-lg font-semibold text-paper">St. Billy's Community School</span>
          </Link>
          <p className="text-sm text-paper/70 leading-relaxed max-w-xs">
            A non-profit community school in Dandora, Nairobi, giving children a place to learn, grow, and be seen.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-paper mb-4">Quick links</h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-paper/70 hover:text-marigold-300 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-paper mb-4">Contact</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-paper/70">
            <li>Dandora, Nairobi, Kenya</li>
            <li>
              <a href="mailto:stbilleducationalcentre@gmail.com" className="hover:text-marigold-300 transition-colors">
                stbilleducationalcentre@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+254729974353" className="hover:text-marigold-300 transition-colors">
                +254 729 974 353
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-paper mb-4">Follow us</h3>
          <div className="flex items-center gap-3">
            <SocialIcon label="Facebook" href="#">
              <path d="M13 22v-8h2.7l.4-3H13V9.1c0-.9.2-1.5 1.5-1.5H16V5.1C15.7 5 14.8 5 13.8 5 11.6 5 10 6.3 10 8.8V11H7v3h3v8h3Z" />
            </SocialIcon>
            <SocialIcon label="YouTube" href="#">
              <path d="M21.6 8.2a2.8 2.8 0 0 0-2-2C17.9 5.7 12 5.7 12 5.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 3.8 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-3.8ZM10 15V9l5 3-5 3Z" />
            </SocialIcon>
            <SocialIcon label="LinkedIn" href="#">
              <path d="M6.9 8.6H4V19h2.9V8.6ZM5.4 4.2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 12.8c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5.9-3 1.6V8.6H10.4V19h2.9v-5.7c0-.5 0-1 .2-1.3.3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V19H20v-6.2Z" />
            </SocialIcon>
          </div>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} St. Billy's Community School. All rights reserved.</p>
          <p>Registered non-profit community school, Dandora, Nairobi.</p>
        </Container>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full bg-paper/10 hover:bg-marigold-400 hover:text-forest-900 flex items-center justify-center transition-colors"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
