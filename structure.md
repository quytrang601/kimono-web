# Project Structure: Kimono Rental Web Application

This document provides a comprehensive overview of the project's directory structure and the technical purpose of each module.

```text
kimono-web/
├── interview.md              # Technical deep-dive for interview preparation
├── structure.md              # (You are here) Project map and explanations
├── design.md                 # UI/UX design specifications and color palettes
├── README.md                 # Basic project setup and overview
├── package.json              # Dependencies and scripts (React 19, Vite, Framer Motion)
├── tailwind.config.js        # Tailwind CSS styling configuration
├── vite.config.js            # Build tool configuration
├── public/                   # Static assets (images, icons, favicons)
└── src/                      # Source code
    ├── App.jsx               # Main Routing hub and Global Layout
    ├── main.jsx              # React DOM entry point
    ├── data/                 # Static data and configuration
    │   └── products.js       # Product packages and pricing data
    ├── pages/                # Page-level components (Route targets)
    │   ├── Home.jsx          # Landing page
    │   ├── Booking.jsx       # Core booking & price estimation engine
    │   ├── Products.jsx      # Kimono collection gallery
    │   ├── ProductDetail.jsx # Detailed view for specific items
    │   ├── PriceList.jsx     # Service pricing overview
    │   ├── Album.jsx         # Customer lookbook & testimonials
    │   ├── Hairstyles.jsx    # Hairstyle options gallery
    │   └── Contact.jsx       # Shop location and contact info
    ├── components/           # Modular, reusable UI components
    │   ├── Home/             # Landing page sections (Hero, Process, Reviews)
    │   ├── Booking/          # Booking logic (Cart, Forms, Service selection)
    │   ├── Products/         # Product filters and cards
    │   ├── Contact/          # Maps and info boxes
    │   ├── Album/            # Physics-based Flipbook sliders
    │   ├── PriceList/        # Pricing grids and add-on sections
    │   └── common/           # Shared components (Navbar, Footer, Sakura effects, Revelations)
    └── styles/               # Global styling
        ├── index.css         # Tailwind base and utility classes
        └── animation.css     # Custom CSS keyframes (Sakura falling, etc.)
```

## Module Explanations

### 📂 `src/pages/`
The "Views" of the application. Each file here represents a unique URL path handled by `react-router-dom`. 
*   **Booking.jsx**: The most complex page, orchestrating the state between guest counts, service selection, and the serverless Google Sheets integration.

### 📂 `src/components/`
Modular fragments of UI. Following the **Atomic Design** philosophy:
*   **common/**: Global components like the `Navbar`, `Footer`, and the `Sakura` falling petal effect.
*   **Feature-Specific Folders**: (e.g., `Booking/`, `Home/`) contain components that are logic-heavy or specific to one page, improving maintainability.

### 📂 `src/data/`
Acts as the "Local Database."
*   **products.js**: Contains the structured JSON for all rental packages. This centralizes content management, making it easy to update prices or images in one place.

### 📂 `src/styles/`
*   **animation.css**: Contains the math for the "Sakura Falling" effect and standard fade-in durations used by `Framer Motion`.

### 📂 `public/`
Stores all high-resolution imagery and SVG icons. This project relies heavily on visual storytelling, so this folder is optimized for asset delivery.

### 📄 `App.jsx`
The orchestrator. It uses `React Router v7` to manage navigation and includes the `Sakura` background effect globally so it persists across page transitions.
