/** AboutUs.tsx
 * @author Dibyasmita
 * @description This is the About Us Component
 * @date 25-02-2026
 * @returns a TSX component
 */

// Rules
"use client";

// Imports
import { CheckCircle2 } from "lucide-react";
import { aboutUsContent } from "@/lib/details";

// Exports
export default function AboutUs() {
  // Logic
  // If neeeded in future
  
  // Return
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-main)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 25px 50px var(--color-shadow)" }}
            >
              <img
                src={aboutUsContent.image.src}
                alt={aboutUsContent.image.alt}
                className="w-full h-100 lg:h-125 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
                }}
              />
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-primary-dark)" }}
              />
              {aboutUsContent.badge}
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              {aboutUsContent.title}{" "}
              <span
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {aboutUsContent.highlightedTitle}
              </span>
            </h2>

            <p
              className="leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {aboutUsContent.description}
            </p>

            <ul className="space-y-3 mb-8">
              {aboutUsContent.points.map(
                (item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>

            <p
              className="text-lg font-semibold"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              You Deserve The Best In Quality With Care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
