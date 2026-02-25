/** Hero.tsx
 * @author Dibyasmita
 * @description This is the Hero Component with an auto-sliding review carousel
 * @date 25-02-2026
 * @returns a TSX component
 */

// Rules
"use client";

// Imports
import { useState, useEffect, useRef } from "react";
import WhyChooseCard from "./WhyChooseCard";
import ReviewCard from "./ReviewCard";
import Reviews from "./Reviews";
import { MessageSquarePlus, X, ChevronLeft, ChevronRight } from "lucide-react";

// Content (Removed reviewsList)
import {
  whyChooseContent,
  whyChooseList,
  reviewsContent,
} from "@/lib/details";

// Type Hints
type DbReview = {
  review_id: number;
  user_name: string;
  stars: number;
  review: string;
  created_at: string;
};

// Strictly typed shape to satisfy TypeScript for DB reviews
type NormalizedReview = {
  id: string | number;
  name: string;
  stars?: number;
  message: string;
};

// Environment Variables
const REVIEWS_API_URL = import.meta.env.VITE_REVIEWS_API_URL || "";

// Exports
export default function Hero() {
  const [dbReviews, setDbReviews] = useState<DbReview[]>([]);
  const [loadingReviews, setLoadingReviews] = useState<boolean>(true);
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false); // Pauses auto-scroll on hover
  
  const carouselRef = useRef<HTMLDivElement>(null);

  // 1. Fetch from database
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${REVIEWS_API_URL}?min_stars=4`);
        if (response.ok) {
          const data = await response.json();
          setDbReviews(data);
        }
      } catch (error) {
        console.error("Failed to fetch reviews from database", error);
      } finally {
        setLoadingReviews(false);
      }
    };

    fetchReviews();
  }, [showReviewForm]);

  // 2. Normalize the DB data to prevent TypeScript errors
  const displayReviews: NormalizedReview[] = dbReviews.map((r) => ({
    id: r.review_id,
    name: r.user_name,
    stars: r.stars,
    message: r.review,
  }));

  // 3. Auto-scroll Logic
  useEffect(() => {
    // Do not auto-scroll if the user is hovering, or if there aren't enough reviews to scroll
    if (isPaused || displayReviews.length <= 1) return;

    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        // If we reached the end of the scrollable area, snap back to the start smoothly
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Otherwise, scroll right by roughly one card width (340px)
          carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 3500); // Slides every 3.5 seconds

    return () => clearInterval(intervalId);
  }, [isPaused, displayReviews.length]);

  // 4. Manual scroll function for arrows
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="why-us"
      className="py-20 px-6 md:px-12 transition-all duration-500"
      style={{ backgroundColor: "var(--color-bg-main)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ============================= */}
        {/* WHY CHOOSE US */}
        {/* ============================= */}

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-24">
          {whyChooseList.map((item, index) => (
            <WhyChooseCard
              key={index}
              icon={<item.icon size={28} />}
              title={item.title}
              description={item.description}
              colorIndex={index}
            />
          ))}
        </div>

        {/* ============================= */}
        {/* REVIEWS / TESTIMONIALS */}
        {/* ============================= */}

        <div className="text-center mb-10">
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
            {reviewsContent.badge}
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {reviewsContent.title}{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {reviewsContent.highlightedTitle}
            </span>
          </h2>
        </div>

        {/* --- AUTO-SLIDING REVIEWS CAROUSEL --- */}
        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow (Only show if there are reviews) */}
          {displayReviews.length > 0 && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 hover:text-blue-600 transition-all opacity-0 hover:opacity-100 md:opacity-100 hidden md:flex items-center justify-center focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow (Only show if there are reviews) */}
          {displayReviews.length > 0 && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 hover:text-blue-600 transition-all opacity-0 hover:opacity-100 md:opacity-100 hidden md:flex items-center justify-center focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Scrollable Container with Spotlight Group Class */}
          <div
            ref={carouselRef}
            className="group/carousel flex gap-6 overflow-x-auto snap-x snap-mandatory py-6 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {loadingReviews ? (
              <div className="w-full text-center py-10" style={{ color: "var(--color-text-muted)" }}>
                Loading latest reviews...
              </div>
            ) : displayReviews.length > 0 ? (
              displayReviews.map((review, index) => (
                <div 
                  key={review.id} 
                  /* The magic classes: Cards dim slightly on carousel hover, but active hovered card scales and brightens! */
                  className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start shrink-0 transition-all duration-300 md:group-hover/carousel:opacity-60 md:hover:opacity-100! md:hover:scale-105"
                >
                  <ReviewCard
                    name={review.name}
                    stars={review.stars}
                    message={review.message}
                    colorIndex={index}
                  />
                </div>
              ))
            ) : (
              <div className="w-full text-center py-10 font-medium" style={{ color: "var(--color-text-muted)" }}>
                Be the first to leave a review!
              </div>
            )}
          </div>
        </div>

        {/* --- ADD REVIEW ACTION AREA --- */}
        <div className="text-center flex flex-col items-center justify-center">
          {!showReviewForm ? (
            <button
              onClick={() => setShowReviewForm(true)}
              className="px-8 py-4 rounded-full font-semibold text-white flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
              }}
            >
              <MessageSquarePlus className="w-5 h-5" />
              Leave a Review
            </button>
          ) : (
            <div className="w-full relative animate-in fade-in slide-in-from-bottom-10 duration-500">
              <button
                onClick={() => setShowReviewForm(false)}
                className="absolute right-4 top-10 z-10 p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors dark:bg-red-900/30 dark:text-red-400 flex items-center gap-2 text-sm font-medium"
                aria-label="Close review form"
              >
                <X className="w-4 h-4" /> Close
              </button>
              
              <div className="mt-4 -mx-6 md:-mx-12">
                <Reviews />
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}