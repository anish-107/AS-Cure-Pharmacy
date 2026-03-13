/** details.ts
 * @authors Dibyasmita
 * @date 18-1-2026
 * @description This file contains the text contents that is displayed on the page.
 *              All UI components should import content from here instead of hardcoding text.
 * @returns Content to render
 */


// Imports
import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Gauge,
  Heart,
  FlaskConical,
  Handshake,
  Sparkles,
} from "lucide-react";


// About Us Section

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
  badge: "Our Mission",
  title: "Delivering Trusted",
  highlightedTitle: "Healing & Care",
  description:
    "We believe that medicine is more than just a product—it is a promise of recovery. A S Cure Pharma is dedicated to enhancing lives by providing safe, reliable, and high-quality pharmaceutical treatments. By combining advanced manufacturing practices with a human-centric approach, we ensure that every formulation we craft meets the highest standards of scientific integrity and therapeutic value.",

  points: [
    "Crafting safe and effective medicines with scientific precision",
    "Guaranteed quality validation at every stage of production",
    "Built on a foundation of expert research and modern ethics",
    "Empowering communities through reliable healthcare access",
    "A legacy of trust, healing, and improved patient outcomes",
  ],

  image: {
    src: "assets/hero-1.png",
    alt: "A S Cure Pharma - Trusted Healthcare",
  },
};


// Hero / Slider Section

// Type Definitions
export type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
  accent: string;
};

// Content
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

// Type Definitions
export type ProductItem = {
  name: string;
  composition: string;
  description: string;
  highlights: string[];
  image: string;
  featured?: boolean;
};

// Content
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
    featured: false,
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
    featured: false,
  },
];

// Why Choose Us Section

// Type Definitions
export type WhyChooseItem = {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
};

// Content
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
