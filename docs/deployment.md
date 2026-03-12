<!-- frontend.md
@author Dibyasmita
@date 20-02-2026
@description Simple explanation of how the frontend works and how to update it.
@returns Markdown Page
-->

# Frontend Guide

This document explains **how the frontend of the website works** and how simple changes can be made.

The frontend is responsible for:

- Displaying the website pages
- Showing company information
- Showing products and reviews
- Sending contact form data to the backend

The frontend is built using:

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vite**

---

# 1. Frontend Location

The frontend code is located in:

```

/frontend

```

Inside this folder you will find all files related to the website interface.

---

# 2. Frontend Folder Structure

Main folders inside the frontend:

```

frontend/src

```

Important folders:

| Folder | Purpose |
|------|------|
| components | Website sections |
| pages | Main page layout |
| layouts | Page structure |
| assets | Images and logos |
| lib | Website content and utilities |

---

# 3. Components

All visible sections of the website are stored in:

```

frontend/src/components

```

Examples:

```

Hero.tsx
AboutUs.tsx
Products.tsx
Reviews.tsx
Contact.tsx
Footer.tsx

```

Each file represents **one section of the website**.

Example:

```

Hero.tsx

```

Controls the **main landing section**.

---

# 4. Pages

Pages combine multiple components.

Location:

```

frontend/src/pages

```

Example:

```

HomePage.tsx

```

This file includes components like:

```

Hero
AboutUs
Products
Contact
Footer

```

---

# 5. Layouts

Layouts define the **overall page structure**.

Location:

```

frontend/src/layouts

```

Example:

```

MainLayout.tsx

```

This usually contains:

- Header
- Footer
- Page content

---

# 6. Images and Assets

Images are stored in:

```

frontend/src/assets

```

Examples:

```

logo.png
product-image.png
hero-background.jpg

```

To change an image:

1. Replace the file
2. Keep the same file name

The website will automatically use the new image.

---

# 7. Website Content

Most text content is stored in:

```

frontend/src/lib/details.ts

````

This file contains:

- Section titles
- Product information
- Descriptions
- "Why Choose Us" content

Example:

```ts
export const whyChooseContent = {
  badge: "Why Choose Us",
  title: "Why Choose",
  highlightedTitle: "AS Cure Pharma"
};
````

You can edit these values to change the text shown on the website.

---

# 8. Environment Variables

Frontend configuration is stored in:

```
frontend/.env
```

Example variables:

```
VITE_COMPANY_EMAIL=
VITE_COMPANY_PHONE=
VITE_COMPANY_ADDRESS=
VITE_CONTACT_API_URL=
```

These values control:

* Contact information
* Backend API address

---

# 9. Running the Frontend

To run the frontend locally:

Open the frontend folder and run:

```
npm install
npm run dev
```

The website will start at:

```
http://localhost:5173
```

---

# 10. Building the Website

To create the production build:

```
npm run build
```

The final files will be generated in:

```
frontend/dist
```

These files are used for deployment.

---

# 11. Deployment

The frontend can be deployed using platforms like:

* **Vercel**
* **Netlify**
* **Cloud hosting**
* **Static server**

The deployed frontend connects to the backend using the API URL.

---

# Developer

Frontend developed by:

**Dibyasmita Hati**

```
