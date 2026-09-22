import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".reveal-root section, .reveal-root article, .reveal-root footer, .reveal-root .reveal-card",
    );
    const revealImmediately = () => elements.forEach((element) => element.classList.add("is-visible"));
    if (!("IntersectionObserver" in window)) {
      revealImmediately();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    window.setTimeout(revealImmediately, 1200);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 reveal-root pb-16 lg:pb-0">{children}</main>
      <Footer />
    </div>
  );
}
