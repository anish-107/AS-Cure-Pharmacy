/** ReviewCard.tsx
 * @author Dibyasmita
 * @description This is the Review Card Component
 * @date 25-02-2026
 * @returns a TSX component
 */

// Imports
import type { ReactNode } from "react";
import { Quote, Star } from "lucide-react";

// Type Hints
interface ReviewCardProps {
  name: string;
  role?: string;
  message: string;
  stars?: number; // Added stars for the DB reviews
  icon?: ReactNode;
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
export default function ReviewCard({
  name,
  role,
  message,
  stars,
  icon,
  colorIndex = 0,
}: ReviewCardProps) {
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
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon / Quote */}
        <div
          className="
            w-12 h-12 rounded-xl flex items-center justify-center mb-5
            text-white
            group-hover:scale-110 transition-transform duration-300
          "
          style={{
            background: `linear-gradient(to bottom right, ${color.bg}, ${color.secondary})`,
          }}
        >
          {icon ?? <Quote className="w-5 h-5" />}
        </div>

        {/* Stars (Only renders if stars prop is passed) */}
        {stars !== undefined && (
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 transition-colors duration-300 group-hover:text-white"
                fill={i < stars ? "currentColor" : "transparent"}
                style={{ 
                  color: i < stars ? "var(--color-primary)" : "var(--color-border)",
                }}
              />
            ))}
          </div>
        )}

        {/* Message */}
        <p
          className="
            leading-relaxed mb-6
            transition-colors duration-300
            group-hover:text-white/90
          "
          style={{ color: "var(--color-text-secondary)" }}
        >
          “{message}”
        </p>

        {/* Divider */}
        <div
          className="h-px w-16 mb-4 transition-all duration-300 group-hover:w-24 group-hover:bg-white/50"
          style={{
            background:
              "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
          }}
        />

        {/* Author */}
        <div>
          <p
            className="
              font-semibold transition-colors duration-300
              group-hover:text-white
            "
            style={{ color: "var(--color-text-primary)" }}
          >
            {name}
          </p>

          {role && (
            <p
              className="
                text-sm transition-colors duration-300
                group-hover:text-white/80
              "
              style={{ color: "var(--color-text-muted)" }}
            >
              {role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}