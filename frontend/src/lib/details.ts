/** details.ts
 * @authors Dibyasmita
 * @date 18-1-2026
 * @description This file contains the text contents that is displayed on the page.
 *              All UI components should import content from here instead of hardcoding text.
 * @returns Content to render
 */


// Imports
import type { LucideIcon } from "lucide-react";
import { Award, Users, Microscope } from "lucide-react";


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
  title: "Delivering Quality",
  highlightedTitle: "Healthcare Solutions",
  description:
    "At A S Cure Pharma, we are committed to delivering safe, effective, and high-quality pharmaceutical products that people can trust. Every product is developed and tested under strict quality standards to ensure consistency, safety, and reliability.",
  points: [
    "Safe, effective, and high-quality medicines",
    "Strict quality standards for safety and consistency",
    "Experienced professionals and modern facilities",
    "Focus on improving healthcare outcomes",
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
    image: "assets/hero-1.jpg",
    title: "A S CURE PHARMA",
    subtitle: "You Deserve the Best in Care...",
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
      "Dual-action relief",
      "Advanced release technology",
      "Broad GI coverage",
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
      "Triple-action pain control",
      "Faster recovery support",
      "Suitable for joint and muscle pain",
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
      "Powerful neuropathic pain relief",
      "Complementary dual mechanism",
    ],
    image: "products/gabinoxin-300-nt.jpg",
  },
  {
    name: "GABINOXIN-100 NT",
    composition: "Gabapentin (100mg) + Nortriptyline (10mg)",
    description:
      "GABINOXIN-100 NT delivers targeted nerve-pain control and is particularly beneficial in managing diabetic neuropathy.",
    highlights: [
      "Targeted nerve-pain control",
      "Benefits diabetic neuropathy",
    ],
    image: "products/gabinoxin-100-nt.jpg",
  },
];


// Why Choose Us Section
import {
  ShieldCheck,
  Gauge,
  Heart,
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
      "Every medicine undergoes strict laboratory testing to ensure purity, potency, and consistent performance.",
  },
  {
    icon: Gauge,
    title: "Stringent Quality Standards",
    description:
      "Our manufacturing processes strictly follow GLP and GMP guidelines at every stage.",
  },
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description:
      "Our formulations are designed for easier administration, optimized dosages, and faster recovery.",
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
