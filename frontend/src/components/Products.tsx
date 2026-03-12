/** Product.tsx
 * @author Dibyasmita
 * @description This is the Products Component
 * @date 18-1-2026
 * @returns a TSX component
 */

// Rules
"use client";

// Imports
import ProductCard from "./ProductCard";
import { Package } from "lucide-react";

// Content
import { productsList } from "@/lib/details";

// Exports
export default function Products() {
  // Logic
  // If needed in future
  
  // Return
  return (
    <section
      id="products"
      className="py-20 px-6 md:px-12"
      style={{ backgroundColor: "var(--color-bg-main)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: "var(--color-primary-light)",
              color: "var(--color-primary-dark)",
            }}
          >
            <Package className="w-4 h-4" />
            Our Products
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            Quality{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Medicines
            </span>{" "}
            You Can Trust
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsList.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
