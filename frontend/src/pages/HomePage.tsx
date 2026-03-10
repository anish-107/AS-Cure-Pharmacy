/** HomePage.tsx
 * @author Dibyasmita
 * @date 18-1-2026
 * @description This file is the Home Page file and renders all the components.
 * @returns A TSX Page
 */


"use client";

import { useEffect, useState } from "react";

import Header from '@/components/Header';
import Slider from '@/components/Slider';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/Products';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ReviewsSection from "@/components/ReviewSection";

export default function LandingPage() {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />

      <section id="home">
        <Slider />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="why-us">
        <Hero />
      </section>

      {/* <section id="review">
        <ReviewsSection />
      </section> */} {/* In case reviews section is ever needed just uncomment this line */}

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
