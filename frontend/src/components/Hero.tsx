/** Hero.tsx
 * @author Dibyasmita
 * @description This is the Hero Component (Why Choose Us Section)
 * @date 26-02-2026
 * @returns a TSX component
 */

"use client";

import { useState } from "react";
import { whyChooseContent, whyChooseList } from "@/lib/details";

export default function Hero() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="why-us"
      className="py-20 px-6 md:px-12 transition-all duration-500"
      style={{ backgroundColor: "var(--color-bg-main)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* WHY CHOOSE US */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: "var(--color-primary-light)",
              color: "var(--color-primary-dark)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            {whyChooseContent.badge}
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {whyChooseContent.title}{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {whyChooseContent.highlightedTitle}
            </span>
            ?
          </h2>
        </div>

        {/* ICON + TITLE + TOGGLE DESCRIPTION */}
        <div className="flex flex-wrap justify-center gap-16">
          {whyChooseList.map((item, index) => {
            const isOpen = activeCard === index;

            return (
              <div
                key={index}
                className="flex flex-col items-center max-w-xs text-center"
              >
                {/* ICON */}
                <button
                  onClick={() => toggleCard(index)}
                  className="p-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                    color: "white",
                  }}
                >
                  <item.icon size={32} />
                </button>

                {/* TITLE ALWAYS VISIBLE */}
                <h3
                  className="mt-4 text-lg font-semibold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION (TOGGLE) */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
