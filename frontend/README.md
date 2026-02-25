<!-- README.md
@author Dibyasmita
@date 18-1-2026
@description This file contains the basic documentation for the website.
@returns Markdown Page
-->


# AS Cure Pharma

**Official Website Repository**

---

## Table of Contents

1. Overview
2. Technology Stack
3. Project Architecture
4. Website Structure
5. Local Development Setup
6. File Locations
7. Build & Deployment
8. Changes Guidelines
9. Contact Information
10. Developer Details

---

## 1. Overview

This repository contains the frontend source code for the **AS Cure Pharma official website**.

The website is designed to be:

* Professional and minimal
* Fully responsive across devices
* Easy to maintain and scale
* Built using modern frontend standards

The project follows a **component-driven architecture** with clear separation of concerns.

---

## 2. Technology Stack

The application is built using the following technologies:

| Technology       | Purpose                         |
| ---------------- | ------------------------------- |
| **React**        | UI development                  |
| **Vite**         | Development & build tooling     |
| **Tailwind CSS** | Styling and layout              |
| **shadcn/ui**    | Accessible UI components        |
| **TypeScript**   | Type safety and maintainability |

---

## 3. Project Architecture

The project follows a **modular and scalable structure**:

```plaintext
as-cure-pharma/
├── node_modules/                 # Installed project dependencies (auto-generated)
│
├── public/                       # Publicly served static files
│   └── assets/                   # Static assets accessible directly via URL
│
├── src/                          # Application source code
│   ├── assets/                   # Images, icons, logos used inside the app
│
│   ├── components/               # Reusable UI components
│   │   ├── AboutUs.tsx           # About Us section component
│   │   ├── Contact.tsx           # Contact section and form
│   │   ├── Footer.tsx            # Website footer
│   │   ├── Header.tsx            # Top navigation header
│   │   ├── Hero.tsx              # Hero / landing section
│   │   ├── ProductCard.tsx       # Individual product display card
│   │   ├── Products.tsx          # Products listing section
│   │   ├── Reviews.tsx           # Customer reviews / testimonials section
│   │   ├── Slider.tsx            # Carousel / slider component
│   │   └── WhyChooseCard.tsx     # Card for "Why Choose Us" section
│   |
│   ├── layouts/                  # Layout wrappers
│   │   └── MainLayout.tsx        # Main page layout (Header + Footer + Content)
|   |
│   ├── lib/                      # Utility and helper functions
│   │   └── utils.ts              # Common reusable utility functions
│   |
│   ├── pages/                    # Route-level pages
│   │   └── HomePage.tsx          # Homepage composed of multiple sections
│   |
│   ├── App.css                   # App-level styles (minimal, Tailwind preferred)
│   ├── App.tsx                   # Root React component
│   ├── index.css                 # Global styles and Tailwind imports
│   └── main.tsx                  # Application entry point
│
├── .gitignore                    # Files and folders ignored by Git
├── .env                          # Environment Variables
├── components.json               # shadcn/ui configuration
├── eslint.config.js              # ESLint rules and configuration
├── index.html                    # HTML entry template for Vite
├── LICENSE                       # Proprietary license file
├── package.json                  # Project metadata, scripts, dependencies
├── package-lock.json             # Locked dependency versions
├── README.md                     # Project documentation
├── tsconfig.json                 # Base TypeScript configuration
├── tsconfig.app.json             # TypeScript config for app source
├── tsconfig.node.json            # TypeScript config for Node/Vite
└── vite.config.ts                # Vite build and dev server configuration

```

This structure ensures:

* Code readability
* Reusability
* Easy onboarding for new developers

---

## 4. Website Structure

The website is divided into the following core sections:

* **Home**
  Overview of the company and key highlights

* **About Us**
  Company background, mission, and values

* **Products**
  Pharmaceutical product information

* **Why AS Cure Pharma**
  Certifications, strengths, reviews, and quality assurance

* **Contact**
  Business inquiries and communication details

Each section is implemented using reusable components to maintain consistency.

---

## 5. Local Development Setup

### Prerequisites

* Node.js (v18 or later)
* npm 

### Installation

```bash
git clone https://github.com/<your-username>/as-cure-pharma.git
cd as-cure-pharma
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 6. File Locations

### UI Components

```plaintext
src/components/
```

### Pages & Content

```plaintext
src/pages/
```

### Styling

* Tailwind utility classes
* Global styles in `src/index.css`

### Configuration

* Vite → `vite.config.ts`

---

## 7. Build & Deployment

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

The output will be generated in the `dist/` directory.

---

## 8. Changes Guidelines

* Follow existing folder structure
* Write clean, readable code
* Use reusable components where possible
* Ensure responsiveness on all screen sizes

---

## 9. Contact Information

**AS Cure Pharma**

* **Email**: *[Official email]*

* **Address**: *[Office address]*

---

## 10. Developer Details

**Dibyasmita Hati**
Frontend Developer

* **GitHub**: *[GitHub profile]*
* **Email**: *[Developer email]*

---

## License

This project is proprietary and owned by **AS Cure Pharma**.
Unauthorized distribution or reuse is not permitted.

---