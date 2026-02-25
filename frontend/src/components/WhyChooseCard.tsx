/** WhyChooseCard.tsx
 * @author Dibyasmita
 * @description This is the Custom Card Component
 * @date 18-1-2026
 * @returns a TSX component
 */

// Imports
import type { ReactNode } from "react";

// Type Hints
interface WhyChooseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  colorIndex?: number;
}

// Color Presets (theme-safe)
const colors = [
  {
    bg: "var(--color-primary)",
    secondary: "var(--color-secondary)",
  },
  {
    bg: "var(--color-secondary)",
    secondary: "var(--color-primary)",
  },
  {
    bg: "var(--color-primary-dark)",
    secondary: "var(--color-secondary)",
  },
];

// Exports
export default function WhyChooseCard({
  icon,
  title,
  description,
  colorIndex = 0,
}: WhyChooseCardProps) {
  const color = colors[colorIndex % colors.length];

  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl p-8
        border shadow-md
        hover:shadow-2xl hover:-translate-y-1
        transition-all duration-300
      "
      style={{
        backgroundColor: "var(--color-bg-card)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Hover Gradient Background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom right, ${color.bg}, ${color.secondary})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
            w-14 h-14 rounded-xl flex items-center justify-center mb-5
            text-white
            group-hover:scale-110 transition-transform duration-300
          "
          style={{
            background: `linear-gradient(to bottom right, ${color.bg}, ${color.secondary})`,
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className="
            text-xl font-semibold mb-3
            transition-colors duration-300
            group-hover:text-white
          "
          style={{ color: "var(--color-text-primary)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            leading-relaxed transition-colors duration-300
            group-hover:text-white/90
          "
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
