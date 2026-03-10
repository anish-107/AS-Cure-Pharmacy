/** Footer.tsx
 * @author Dibyasmita
 * @date 25-02-2026
 * @description This file is the Footer component.
 * @returns A TSX Component
 */

// Rules
"use client";

// Imports
import { Mail, Phone, MapPin } from "lucide-react";

// Constants
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

// Environment Variables
const COMPANY_EMAIL = import.meta.env.VITE_COMPANY_EMAIL;
const COMPANY_PHONE = import.meta.env.VITE_COMPANY_PHONE;
const COMPANY_ADDRESS = import.meta.env.VITE_COMPANY_ADDRESS;
const COMPANY_MAP_URL = import.meta.env.VITE_COMPANY_MAP_URL;

// Exports
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-main)",
        color: "var(--color-text-secondary)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* RESPONSIVE GRID: Centered on mobile, Left-aligned on Desktop */}
        <div className="grid gap-12 md:gap-8 text-center md:text-left md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h2
              className="text-2xl font-bold mb-3"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A S CURE PHARMA
            </h2>

            <p
              className="mb-6 max-w-sm text-center md:text-left"
              style={{ color: "var(--color-text-muted)" }}
            >
              You Deserve the Best in Care...
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className="font-semibold mb-4 text-lg"
              style={{ color: "var(--color-text-primary)" }}
            >
              Quick Links
            </h3>

            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 flex items-center gap-2 group hover:text-blue-500"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="w-0 h-0.5 group-hover:w-3 transition-all duration-300 rounded-full"
                      style={{
                        background:
                          "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                      }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className="font-semibold mb-4 text-lg"
              style={{ color: "var(--color-text-primary)" }}
            >
              Contact
            </h3>

            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {/* Email */}
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-blue-500 group"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: "var(--color-primary)" }} />
                  <span className="text-sm">{COMPANY_EMAIL}</span>
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-blue-500 group"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: "var(--color-primary)" }} />
                  <span className="text-sm">{COMPANY_PHONE}</span>
                </a>
              </li>

              {/* Address */}
              <li>
                <a
                  href={COMPANY_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors duration-200 hover:text-blue-500 group text-left"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <MapPin className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform shrink-0" style={{ color: "var(--color-primary)" }} />
                  <span className="text-sm max-w-50 md:max-w-xs text-center md:text-left">
                    {COMPANY_ADDRESS}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          backgroundColor: "var(--color-bg-section)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-center">
          <p
            className="text-sm text-center"
            style={{ color: "var(--color-text-muted)" }}
          >
            © {new Date().getFullYear()} A S Cure Pharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
