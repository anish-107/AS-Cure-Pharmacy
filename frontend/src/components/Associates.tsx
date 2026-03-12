/** Associates.tsx
 * @author Dibyasmita
 * @date 18-2-2026
 * @description This file is the Associates component.
 * @returns A TSX Component
 */

// Rules
"use client";

// Function to export
export default function Associates() {
  // Logic


  // Return
  return (

    <section
      id="associates"
      className="py-20 px-6 md:px-12 transition-all duration-500"
      style={{ backgroundColor: "var(--color-bg-main)" }}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* BADGE */}
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
          Our Partners
        </div>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ color: "var(--color-text-primary)" }}
        >
          Manufacturer's{" "}
          <span
            style={{
              background:
                "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Associates
          </span>
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="./assets/associates.jpeg"
            alt="Manufacturer Associates"
            className="max-w-5xl w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>

  );
}