<!-- README.md
@author Dibyasmita
@date 18-1-2026
@description This file contains the basic documentation for the website.
@returns Markdown Page
-->


# AS Cure Pharma

**Official Website Repository (Frontend)**

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

---

## 1. Overview

This repository contains the **frontend source code** for the **AS Cure Pharma official website**.

The frontend is responsible for:

* Rendering the user interface
* Displaying company and product information
* Handling contact form submissions
* Communicating with the backend API

The backend service is built using **FastAPI** and exposes APIs used by the frontend (such as the contact form endpoint).

The website is designed to be:

* Professional and minimal
* Fully responsive across desktop, tablet, and mobile
* Easy to maintain and scale
* Built using modern frontend standards

The project follows a **component-driven architecture** with clear separation between:

* UI components
* Pages
* Layouts
* Utilities

---

## 2. Technology Stack

The frontend application is built using the following technologies:

| Technology       | Purpose |
|-----------------|--------|
| **React** | Component-based UI framework |
| **Vite** | Fast development server and build tool |
| **TypeScript** | Static typing and improved maintainability |
| **Tailwind CSS** | Utility-first styling system |
| **shadcn/ui** | Accessible UI component library |
| **Lucide Icons** | Modern icon system used across UI |

### Backend Integration

The frontend communicates with a **FastAPI backend** using REST APIs.

Example:

* Contact form submission
* Future product data APIs

The API URL is configured through environment variables.

---

## 3. Project Architecture

The project follows a **modular and scalable structure**.

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
│   │   ├── Associates.tsx        # Manufacturer associates section
│   │   ├── Contact.tsx           # Contact section and form
│   │   ├── Footer.tsx            # Website footer
│   │   ├── Header.tsx            # Top navigation header
│   │   ├── Hero.tsx              # Hero / landing section
│   │   ├── ProductCard.tsx       # Individual product display card
│   │   ├── Products.tsx          # Products listing section
│   │   ├── Reviews.tsx           # Customer reviews / testimonials
│   │   ├── Slider.tsx            # Carousel / slider component
│   │   └── WhyChooseCard.tsx     # Card for "Why Choose Us"
│   |
│   ├── layouts/                  # Layout wrappers
│   │   └── MainLayout.tsx        # Page layout (Header + Footer + Content)
│   |
│   ├── lib/                      # Utility functions and constants
│   │   ├── details.ts            # Static content used across components
│   │   └── utils.ts              # General helper utilities
│   |
│   ├── pages/                    # Route-level pages
│   │   └── HomePage.tsx          # Homepage composed of sections
│   |
│   ├── App.css                   # Minimal CSS overrides
│   ├── App.tsx                   # Root React component
│   ├── index.css                 # Global styles and Tailwind configuration
│   └── main.tsx                  # Application entry point
│
├── .gitignore                    # Files ignored by Git
├── .env                          # Environment variables
├── components.json               # shadcn/ui configuration
├── eslint.config.js              # ESLint configuration
├── index.html                    # Vite HTML entry file
├── LICENSE                       # Proprietary license
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── README.md                     # Project documentation
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # App TypeScript config
├── tsconfig.node.json            # Node TypeScript config
└── vite.config.ts                # Vite configuration
````

This structure ensures:

* Clear separation of responsibilities
* Reusable UI components
* Easy scalability
* Maintainability for future developers

---

## 4. Website Structure

The website consists of the following major sections:

### Home

Landing section introducing the company.

### About Us

Company information, mission, and values.

### Products

Displays pharmaceutical products using reusable **ProductCard components**.

### Manufacturer Associates

Displays pharmaceutical partners and manufacturing associations.

### Why Choose AS Cure Pharma

Highlights:

* Product quality
* Certifications
* Industry expertise
* Customer trust

### Reviews

Customer feedback and testimonials.

### Contact

Includes:

* Contact details
* Business address
* Contact form connected to the backend API

---

## 5. Local Development Setup

### Prerequisites

Make sure the following tools are installed:

* **Node.js v18+**
* **npm**

### Clone the Repository

```bash
git clone https://github.com/<your-username>/as-cure-pharma.git
cd as-cure-pharma
```

### Install Dependencies

```bash
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

### Page-level Components

```plaintext
src/pages/
```

### Layout Wrappers

```plaintext
src/layouts/
```

### Utility Functions

```plaintext
src/lib/
```

### Global Styling

```plaintext
src/index.css
```

### Environment Variables

```plaintext
.env
```

Example variables:

```
VITE_CONTACT_API_URL=
VITE_COMPANY_EMAIL=
VITE_COMPANY_PHONE=
VITE_COMPANY_ADDRESS=
```

---

## 7. Build & Deployment

### Production Build

```bash
npm run build
```

This generates optimized production files inside:

```
dist/
```

### Preview Production Build

```bash
npm run preview
```

### Deployment

The frontend can be deployed to any static hosting provider such as:

* Vercel
* Netlify
* AWS S3 + CloudFront
* Nginx server

---

## 8. Changes Guidelines

When contributing or modifying the project:

* Follow the existing **folder structure**
* Use **reusable components**
* Maintain **TypeScript type safety**
* Ensure **responsive design**
* Avoid unnecessary inline styles
* Prefer **Tailwind utilities**

Before pushing changes:

```
npm run build
```

to ensure the project builds correctly.

---

## License

This project is proprietary and owned by **AS Cure Pharma**.

Unauthorized distribution, modification, or reuse of this software is not permitted without written permission.

```