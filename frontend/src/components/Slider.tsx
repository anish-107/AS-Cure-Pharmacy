/** Slider.tsx
 * @author Dibyasmita
 * @description Slider Component with background carousel
 * @date 18-1-2026
 * @returns a TSX component
 */


// Rules
"use client";

// Imports
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Content Imports
import type { HeroSlide } from "@/lib/details";
import { heroSlides } from "@/lib/details";

// Exports
export default function Slider() {
  // Logic
  
  const [current, setCurrent] = useState<number>(0);

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* Navigation Helpers */
  const goTo = (index: number) => setCurrent(index);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const next = () =>
    setCurrent((prev) => (prev + 1) % heroSlides.length);

  // Return
  return (
    <section
      id="home"
      className="relative h-[90vh] w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-main)" }}
    >
      {/* Slides */}
      {heroSlides.map((slide: HeroSlide, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Gradient Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4), rgba(0,0,0,0.2))",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
            }}
          />

          {/* Decorative Glows */}
          <div
            className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-40"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          <div
            className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: "var(--color-secondary)" }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          {/* Accent Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            {heroSlides[current].accent}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            <span
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {heroSlides[current].title.split(" ")[0]}
            </span>{" "}
            {heroSlides[current].title.split(" ").slice(1).join(" ")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8">
            {heroSlides[current].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-medium transition-all hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                boxShadow: "0 10px 15px var(--color-shadow)",
              }}
            >
              View Products
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all text-white"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white"
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-white"
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <ChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_: HeroSlide, index: number) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="h-2 rounded-full transition-all"
            style={{
              width: index === current ? "32px" : "8px",
              backgroundColor:
                index === current
                  ? "var(--color-primary)"
                  : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
