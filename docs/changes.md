<!-- changes.md
@author Dibyasmita
@date 20-02-2026
@description Guide for making simple content and component changes in the frontend.
@returns Markdown Page
-->

# Website Changes Guide

This document explains **how to make simple changes to the website**.

You can use this guide if you want to:

- Update text on the website
- Add or remove sections
- Change product details
- Edit company information

---

# 1. Changing Website Content

Most of the text content used in the website is stored in the following file:

```

frontend/src/lib/details.ts

```

This file contains the **main text used in different sections of the website**.

Examples of content stored here:

- Company description
- "Why Choose Us" section
- Product information
- Section titles
- Small descriptions

### How to change text

1. Open the file:

```

frontend/src/lib/details.ts

````

2. Find the text you want to change.

Example:

```ts
export const whyChooseContent = {
  badge: "Why Choose Us",
  title: "Why Choose",
  highlightedTitle: "AS Cure Pharma"
};
````

3. Edit the text.

Example:

```ts
badge: "Our Strengths"
```

4. Save the file.

The website will automatically show the updated content.

---

# 2. Adding or Removing Components

All visible sections of the website are inside the **components folder**.

Location:

```
frontend/src/components
```

Examples of components:

| Component    | Purpose              |
| ------------ | -------------------- |
| Hero.tsx     | Main landing section |
| AboutUs.tsx  | Company information  |
| Products.tsx | Product section      |
| Reviews.tsx  | Customer reviews     |
| Contact.tsx  | Contact form         |
| Footer.tsx   | Website footer       |

---

## Removing a Section

To remove a section from the homepage:

1. Open the homepage file:

```
frontend/src/pages/HomePage.tsx
```

2. Find the component.

Example:

```tsx
<Products />
```

3. Delete or comment the line.

Example:

```tsx
{/* <Products /> */}
```

4. Save the file.

The section will no longer appear on the website.

---

## Adding a Section

1. Create a new component inside:

```
frontend/src/components
```

Example:

```
NewSection.tsx
```

2. Add the component to the homepage.

Open:

```
frontend/src/pages/HomePage.tsx
```

Import the component:

```tsx
import NewSection from "@/components/NewSection";
```

Add it inside the page:

```tsx
<NewSection />
```

3. Save the file.

The new section will now appear on the website.

---

# 3. Updating Images

Images are stored in:

```
frontend/src/assets
```

To change an image:

1. Replace the existing image file.
2. Keep the same file name.

Example:

```
logo.png
```

If the file name stays the same, the website will automatically use the new image.

---

# 4. Updating Contact Information

Contact details are stored in environment variables.

Location:

```
frontend/.env
```

Example:

```
VITE_COMPANY_EMAIL=
VITE_COMPANY_PHONE=
VITE_COMPANY_ADDRESS=
```

Edit these values to update the contact information shown on the website.

---

# 5. Running the Website Locally

If you want to preview the changes locally:

Open the frontend folder and run:

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

# 6. Important Notes

* Always save files after making changes.
* Do not rename files unless necessary.
* If the website stops working, revert the last change.

---

# Developer

Frontend developed by:

**Dibyasmita Hati**

```