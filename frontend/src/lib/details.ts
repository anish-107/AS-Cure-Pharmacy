/** details.ts
 * @authors Dibyasmita
 * @date 18-1-2026
 * @description This file contains the text contents that is displayed on the page.
 *              All UI components should import content from here instead of hardcoding text.
 * @returns Content to render
 */


// Imports
import type { LucideIcon } from "lucide-react";

// Type Definitions
export type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export type SectionContent = {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  points: string[];
  image: {
    src: string;
    alt: string;
  };
};


// About Us Content
export const aboutUsContent: SectionContent = {
  badge: "About Us",
  title: "Delivering Trusted",
  highlightedTitle: "Healthcare Solutions",
  description:
    "At A S Cure Pharma, our mission is to enhance lives by providing safe, reliable, and high-quality pharmaceutical products. We believe that healthcare should be accessible, trustworthy, and effective for everyone. Our team works with dedication and scientific precision to develop medicines that meet the highest standards of safety, efficacy, and quality. Through continuous innovation, advanced manufacturing practices, and strict regulatory compliance, we strive to deliver healthcare solutions that professionals and patients can depend on every day.",

  points: [
    "Manufacturing safe, effective, and high-quality pharmaceutical products",
    "Maintaining strict quality control and regulatory compliance at every stage",
    "Driven by experienced professionals and supported by modern infrastructure",
    "Committed to improving patient health and overall healthcare outcomes",
    "Focused on innovation, reliability, and long-term healthcare impact",
  ],

  image: {
    src: "assets/about-us.png",
    alt: "A S Cure Pharma Production Facility",
  },
};


// Hero / Slider Section
export type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
  accent: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "assets/hero-1.png",
    title: "A S CURE PHARMA",
    subtitle: "You Deserve The Best In Quality With Care",
    accent: "Quality Healthcare Solutions",
  },
  {
    image: "assets/hero-2.jpg",
    title: "TRUSTED MEDICINES",
    subtitle: "Committed to Quality & Care",
    accent: "GMP Certified Products",
  },
  {
    image: "assets/hero-3.png",
    title: "ASSURED HEALTHCARE",
    subtitle: "Because Your Health Matters",
    accent: "Patient-First Approach",
  },
];


// Products Section
export type ProductItem = {
  name: string;
  composition: string;
  description: string;
  highlights: string[];
  image: string;
  featured?: boolean;
};

export const productsList: ProductItem[] = [
  {
    name: "RABTORIN DSR",
    composition: "Domperidone (30mg) + Rabeprazole (20mg)",
    description:
      "RABTORIN DSR provides dual-action relief for acid-related gastrointestinal disorders. Its advanced release technology ensures effective and sustained control of symptoms.",
    highlights: [
      "Provides dual-action relief for acid reflux and GERD",
      "Advanced release technology for sustained symptom control",
      "Helps reduce stomach acid and improves digestion",
      "Effective in treating gastric discomfort and heartburn",
    ],
    image: "products/rabtorin-dsr.jpg",
    featured: true,
  },
  {
    name: "FLEMIREX SP",
    composition:
      "Aceclofenac (100mg) + Paracetamol (325mg) + Serratiopeptidase (15mg)",
    description:
      "FLEMIREX SP offers triple-action pain control with anti-inflammatory, analgesic, and enzyme-based support for faster recovery.",
    highlights: [
      "Triple-action formula for pain and inflammation",
      "Reduces swelling and improves mobility",
      "Provides fast and effective pain relief",
      "Commonly used for joint pain, muscle pain, and post-surgical recovery",
    ],
    image: "products/flemirex-sp.jpg",
    featured: true,
  },
  {
    name: "GABINOXIN-300 NT",
    composition: "Gabapentin (300mg) + Nortriptyline (10mg)",
    description:
      "GABINOXIN-300 NT is formulated for powerful neuropathic pain relief using a complementary dual-mechanism approach.",
    highlights: [
      "Effective treatment for neuropathic pain",
      "Dual-mechanism approach for improved nerve pain relief",
      "Supports management of chronic nerve-related conditions",
      "Helps improve patient comfort and quality of life",
    ],
    image: "products/gabinoxin-300-nt.jpg",
    featured: true,
  },
  {
    name: "GABINOXIN-100 NT",
    composition: "Gabapentin (100mg) + Nortriptyline (10mg)",
    description:
      "GABINOXIN-100 NT delivers targeted nerve-pain control and is particularly beneficial in managing diabetic neuropathy.",
    highlights: [
      "Targeted relief for nerve-related pain",
      "Helps manage diabetic neuropathy symptoms",
      "Improves nerve stability and pain control",
      "Designed for consistent and reliable therapy",
    ],
    image: "products/gabinoxin-100-nt.jpg",
    featured: true,
  },
];

// Why Choose Us Section

import {
  ShieldCheck,
  Gauge,
  Heart,
  FlaskConical,
  Handshake,
  Sparkles,
} from "lucide-react";

export type WhyChooseItem = {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
};

export const whyChooseContent = {
  badge: "Our Advantages",
  title: "Why Choose",
  highlightedTitle: "A S Cure Pharma",
};

export const whyChooseList: WhyChooseItem[] = [
  {
    icon: ShieldCheck,
    title: "Tested Trust, Delivered",
    description:
      "At A S Cure Pharma, every medicine is backed by transparent laboratory testing reports to ensure purity, potency, and reliable performance. Our science-based assurance builds trust where it matters most.",
  },
  {
    icon: Gauge,
    title: "Stringent Quality Standards",
    description:
      "Our manufacturing and quality control processes strictly follow GLP (Good Laboratory Practice) and GMP (Good Manufacturing Practice) guidelines from raw material sourcing to final packaging.",
  },
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description:
      "Our formulations are designed for real patients, focusing on ease of administration, minimized side effects through optimized dosages, and improved recovery outcomes with higher bioavailability.",
  },
  {
    icon: FlaskConical,
    title: "Certified Lab Testing for Every Batch",
    description:
      "Each product undergoes rigorous analytical testing using validated scientific methods to ensure content uniformity, long-term stability, microbial safety, and chemical purity.",
  },
  {
    icon: Handshake,
    title: "Ethical & Transparent Practices",
    description:
      "We maintain complete transparency with healthcare professionals, pharmacists, and patients while upholding strong ethical standards that foster long-term trust with every stakeholder.",
  },
  {
    icon: Sparkles,
    title: "Innovation-Driven Excellence",
    description:
      "We continuously explore advanced formulation technologies, taste masking solutions, and patient-compliance innovations to make our medicines more effective and patient-friendly.",
  },
];

// Reviews / Testimonials Section
export type ReviewItem = {
  name: string;
  role: string;
  message: string;
};

export const reviewsContent = {
  badge: "Testimonials",
  title: "What People",
  highlightedTitle: "Say About Us",
};

export const reviewsList: ReviewItem[] = [
  {
    name: "Dr. Amit Sharma",
    role: "Consultant Physician",
    message:
      "A S Cure Pharma consistently delivers high-quality products that I confidently prescribe to my patients.",
  },
  {
    name: "Rahul Verma",
    role: "Pharma Distributor",
    message:
      "Their commitment to quality, timely supply, and transparent communication sets them apart in the market.",
  },
  {
    name: "Raman Patel",
    role: "Healthcare Partner",
    message:
      "Reliable formulations and ethical practices make A S Cure Pharma a trusted long-term partner.",
  },
];
