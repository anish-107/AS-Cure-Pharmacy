/** Reviews.tsx
 * @author Dibyasmita
 * @description This is the Review Submission Component
 * @date 25-02-2026
 * @returns a TSX component
 */

// Rules
"use client";

// Imports
import type React from "react";
import { useState } from "react";
import { Star, Send, MessageSquare } from "lucide-react";

// Type Hints matching the FastAPI backend schema
type ReviewFormData = {
  user_name: string;
  email: string;
  stars: number;
  review: string;
};

// Environment Variables
// Replace the fallback URL with your actual Vercel URL
const REVIEWS_API_URL = import.meta.env.VITE_REVIEWS_API_URL || "https://as-cure-pharmacy-backend.vercel.app/api/reviews/";

export default function Reviews() {
  const [formData, setFormData] = useState<ReviewFormData>({
    user_name: "",
    email: "",
    stars: 5, 
    review: "",
  });

  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<keyof ReviewFormData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /* Handle Text Input Change */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Handle Star Click */
  const handleStarClick = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      stars: rating,
    }));
  };

  /* Actual API Submit Handler */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      // 1. Map frontend React state to the exact schema
      const payload = {
        user_name: formData.user_name.trim(),
        email: formData.email.trim(),
        stars: formData.stars,
        review: formData.review.trim(),
      };

      // 2. Send the POST request to the backend
      const response = await fetch(REVIEWS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 3. Handle errors (including the 5/minute Rate Limiter)
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("You are submitting reviews too quickly. Please wait a moment.");
        }
        throw new Error("Failed to submit review. Please check your connection.");
      }

      // 4. Success Reset
      setSuccess(true);
      setFormData({
        user_name: "",
        email: "",
        stars: 5,
        review: "",
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 px-6 md:px-12"
      style={{
        background: "var(--color-bg-main)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "var(--color-secondary-light)",
              color: "var(--color-secondary-dark)",
            }}
          >
            <MessageSquare className="w-4 h-4" />
            Your Feedback Matters
          </div>

          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Leave a Review
          </h2>
          <p
            className="text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Help us improve by sharing your experience.
          </p>
        </div>

        <div
          className="rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 backdrop-blur-sm"
          style={{ backgroundColor: "var(--color-bg-card)" }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Interactive Star Rating */}
            <div className="flex flex-col items-center justify-center space-y-3 mb-6">
              <label 
                className="font-semibold text-lg"
                style={{ color: "var(--color-text-primary)" }}
              >
                How would you rate your experience?
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(null)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className="w-10 h-10 transition-colors duration-200"
                      fill={star <= (hoveredStar ?? formData.stars) ? "var(--color-primary)" : "transparent"}
                      color={star <= (hoveredStar ?? formData.stars) ? "var(--color-primary)" : "var(--color-border, #d1d5db)"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                onFocus={() => setFocusedField("user_name")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 rounded-xl outline-none border-2 transition-all placeholder-gray-500"
                style={{
                  backgroundColor: "var(--color-bg-section)",
                  color: "var(--color-text-primary)",
                  borderColor: focusedField === "user_name" ? "var(--color-primary)" : "var(--color-border, #d1d5db)",
                }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 rounded-xl outline-none border-2 transition-all placeholder-gray-500"
                style={{
                  backgroundColor: "var(--color-bg-section)",
                  color: "var(--color-text-primary)",
                  borderColor: focusedField === "email" ? "var(--color-primary)" : "var(--color-border, #d1d5db)",
                }}
                required
              />
            </div>

            <textarea
              name="review"
              placeholder="Tell us about your experience..."
              value={formData.review}
              onChange={handleChange}
              onFocus={() => setFocusedField("review")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 rounded-xl outline-none min-h-30 resize-none border-2 transition-all placeholder-gray-500"
              style={{
                backgroundColor: "var(--color-bg-section)",
                color: "var(--color-text-primary)",
                borderColor: focusedField === "review" ? "var(--color-primary)" : "var(--color-border, #d1d5db)",
              }}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
              style={{
                background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Submitting..." : "Submit Review"}
              <Send className="w-5 h-5" />
            </button>

            {success && (
              <p className="text-sm font-medium text-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 py-3 rounded-lg">
                Thank you! Your review has been submitted successfully.
              </p>
            )}

            {error && (
              <p className="text-sm font-medium text-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 py-3 rounded-lg">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}