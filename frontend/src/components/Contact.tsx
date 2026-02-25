/** Contact.tsx
 * @author Dibyasmita
 * @description This is the Contact Component
 * @date 18-1-2026
 * @returns a TSX component
 */

// Rules
"use client";

// Imports
import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

// Type Hints
type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type FormField = keyof ContactFormData;

// Environment Variables
const COMPANY_EMAIL = import.meta.env.VITE_COMPANY_EMAIL;
const COMPANY_PHONE = import.meta.env.VITE_COMPANY_PHONE;
const COMPANY_ADDRESS = import.meta.env.VITE_COMPANY_ADDRESS;
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "https://as-cure-pharmacy-backend.vercel.app/api/contact/";

// Constants
const textFields: FormField[] = ["firstName", "lastName"];
const singleFields: FormField[] = ["email", "subject"];

// Exports
export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<FormField | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /* Handle Input Change */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Actual API Submit Handler */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      // 1. Map frontend React state to the FastAPI backend schema
      const payload = {
        form_name: `${formData.firstName} ${formData.lastName}`.trim(),
        form_email: formData.email,
        form_subject: formData.subject,
        form_content: formData.message,
      };

      // 2. Send the POST request to the Vercel backend
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 3. Handle errors (including the SlowAPI Rate Limiter)
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("You have sent too many messages. Please try again later.");
        }
        throw new Error("Failed to send message. Please verify your connection.");
      }

      // 4. Success Reset
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
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

  const contactCards = [
    { icon: Mail, label: "Email Us", value: COMPANY_EMAIL },
    { icon: Phone, label: "Call Us", value: COMPANY_PHONE },
    { icon: MapPin, label: "Visit Us", value: COMPANY_ADDRESS },
  ];

  return (
    <section
      className="relative min-h-screen p-6 md:p-12"
      style={{
        background:
          "linear-gradient(to bottom right, var(--color-bg-section), var(--color-bg-main))",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--color-primary-light)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--color-secondary-light)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "var(--color-primary-light)",
              color: "var(--color-primary-dark)",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Let's Connect
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Get in{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </span>
          </h1>

          <p
            className="max-w-md mx-auto text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Ready to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-5">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 border shadow-sm border-gray-300 dark:border-gray-700"
                style={{
                  backgroundColor: "var(--color-bg-card)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                    }}
                  >
                    <card.icon className="w-5 h-5" />
                  </div>

                  <div>
                    <p
                      className="text-xs font-semibold uppercase"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {card.label}
                    </p>
                    <p
                      className="font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {card.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-3xl p-10 shadow-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 backdrop-blur-sm"
              style={{
                backgroundColor: "var(--color-bg-card)",
              }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                Send a Message
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {textFields.map((field) => (
                    <input
                      key={field}
                      type="text"
                      name={field}
                      placeholder={field === "firstName" ? "First Name" : "Last Name"}
                      value={formData[field]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl outline-none border-2 transition-all placeholder-gray-500"
                      style={{
                        backgroundColor: "var(--color-bg-section)",
                        color: "var(--color-text-primary)",
                        borderColor:
                          focusedField === field
                            ? "var(--color-primary)"
                            : "var(--color-border, #d1d5db)",
                      }}
                      required
                    />
                  ))}
                </div>

                {singleFields.map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field === "email" ? "Email Address" : "Subject"}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl outline-none border-2 transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500"
                    style={{
                      backgroundColor: "var(--color-bg-section)",
                      color: "var(--color-text-primary)",
                      borderColor:
                        focusedField === field
                          ? "var(--color-primary)"
                          : "var(--color-border, #d1d5db)",
                    }}
                    required
                  />
                ))}

                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl outline-none min-h-35 resize-none border-2 transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500"
                  style={{
                    backgroundColor: "var(--color-bg-section)",
                    color: "var(--color-text-primary)",
                    borderColor:
                      focusedField === "message"
                        ? "var(--color-primary)"
                        : "var(--color-border, #d1d5db)",
                  }}
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>

                {success && (
                  <p className="text-sm font-medium text-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 py-2 rounded-lg">
                    Message sent successfully! We will get back to you shortly.
                  </p>
                )}

                {error && (
                  <p className="text-sm font-medium text-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 py-2 rounded-lg">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}