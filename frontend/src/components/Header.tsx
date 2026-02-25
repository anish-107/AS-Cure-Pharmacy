/** Header.tsx
 * @author Dibyasmita
 * @date 18-1-2026
 * @description This file is the Header component.
 * @returns A TSX Component
 */

// Rules
"use client";

// Imports
import { useEffect, useState } from "react";

// Type Hints
type NavItem = {
  label: string;
  id: string;
};

// Constants
const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

// Exports
export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  /* Theme State */
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  /* Scroll Detection */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active Section Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* Apply Theme */
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : ""
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md"
      style={{
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--color-bg-main) 95%, transparent)"
          : "color-mix(in srgb, var(--color-bg-main) 80%, transparent)",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="./assets/logo.png" alt="As Cure Pharma Logo" className="h-11 w-auto" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, id }) => {
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className="relative px-4 py-2 rounded-lg font-medium transition-all duration-200"
                style={{
                  color: isActive
                    ? "var(--color-text-light)"
                    : "var(--color-text-secondary)",
                  backgroundColor: isActive
                    ? "var(--color-primary)"
                    : "transparent",
                }}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle (Icon Only) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 flex items-center justify-center rounded-full transition"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          style={{ color: "var(--color-text-primary)" }}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        } overflow-y-auto`}
      >
        <nav
          className="px-6 py-4 space-y-2 pb-6"
          style={{
            backgroundColor: "var(--color-bg-main)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {navItems.map(({ label, id }) => {
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl font-medium transition-all"
                style={{
                  backgroundColor: isActive
                    ? "var(--color-primary)"
                    : "transparent",
                  color: isActive
                    ? "var(--color-text-light)"
                    : "var(--color-text-primary)",
                }}
              >
                {label}
              </a>
            );
          })}

          {/* Mobile Theme Toggle (Icon Only) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-full py-3 rounded-xl mt-3 transition flex items-center justify-center text-xl"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center text-white py-3 rounded-xl font-medium shadow-lg mt-4"
            style={{
              background:
                "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
            }}
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  );
};
