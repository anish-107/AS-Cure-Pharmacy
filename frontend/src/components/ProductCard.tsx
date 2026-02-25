/** ProductCard.tsx
 * @author Dibyasmita
 * @description This is the Project Card Component
 * @date 18-1-2026
 * @returns a TSX component
 */


// Rules
"use client";

// Imports
import { useState } from "react";
import { X, MessageCircle, Sparkles, ExternalLink } from "lucide-react";

// Type Hints
import type { ProductItem } from "@/lib/details";

// Exports
export default function ProductCard({
  name,
  composition,
  description,
  image,
  featured,
}: ProductItem) {
  const [open, setOpen] = useState<boolean>(false);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `I am interested in ${name}`
  )}`;

  return (
    <>
      {/* Card */}
      <div
        className="group relative rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        style={{
          backgroundColor: "var(--color-bg-card)",
          borderColor: "var(--color-border)",
        }}
      >
        {/* Featured Badge */}
        {featured && (
          <div
            className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{
              background:
                "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
            }}
          >
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Image */}
        <div
          className="relative h-56 flex items-center justify-center"
          style={{ backgroundColor: "var(--color-bg-muted)" }}
        >
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-lg font-semibold mb-1"
            style={{ color: "var(--color-text-primary)" }}
          >
            {name}
          </h3>

          <p
            className="text-sm mb-4 line-clamp-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {composition}
          </p>

          <div className="flex gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium text-white transition-all"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                boxShadow: "0 10px 15px var(--color-shadow)",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Buy Now
            </a>

            <button
              onClick={() => setOpen(true)}
              className="flex-1 rounded-xl border py-2.5 text-sm font-medium transition-all hover:bg-primary/10"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="max-w-lg w-full rounded-2xl p-6 shadow-2xl"
            style={{ backgroundColor: "var(--color-bg-card)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {name}
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-bg-muted)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <img
              src={image}
              alt={name}
              className="h-48 mx-auto object-contain mb-4"
            />

            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {description}
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
