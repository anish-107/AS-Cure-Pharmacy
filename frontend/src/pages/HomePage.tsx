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
import Associates from '@/components/Associates';


// Exports
export default function LandingPage() {
  // Logic
  // If needed in future
  
  
  // Return
  return (
    <>
      {/* Header Section */}
      <Header />  

      {/*Sliding Images Section*/}
      <section id="home">
        <Slider />
      </section>

      {/*About Us Section*/}
      <section id="about">
        <AboutUs />
      </section>

      {/*Products Section*/}
      <section id="products">
        <Products />
      </section>

      {/*Hero Section*/}
      <section id="why-us">
        <Hero />
      </section>
      
      {/*Associate Manufacturer Section*/}
      <section id="associates">
        <Associates />
      </section>

      {/*Contact Section*/}
      <section id="contact">
        <Contact />
      </section>

      {/*Footer Section*/}
      <Footer />
    </>
  );
};
