/** HomePage.tsx
 * @author Dibyasmita
 * @date 18-1-2026
 * @description This file is the Home Page file and renders all the components.
 * @returns A TSX Page
 */


// Rules
"use client";

// Imports
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/Products';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


// Exports
export default function LandingPage() {
  return (
    <>
      <Header />  

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

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
};
