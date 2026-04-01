# Kyo Kimono Project Structure

This document provides a breakdown of the project's architecture and folder structure to assist in development and maintenance.

## Project Tree (Excluding `node_modules`)

```text
/
├── public/                 # Static assets (favicons, global icons)
├── src/
│   ├── assets/             # Images, SVGs, and visual content
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Layout essentials (Navbar, Footer, TopBar, Sakura)
│   │   ├── Contact/        # Components for the Contact page
│   │   ├── Home/           # Sections for the Landing page (Hero, Reviews, etc.)
│   │   ├── PriceList/      # Components for pricing and services
│   │   └── Products/       # Components for product display and grids
│   ├── pages/              # Main view components for each route
│   │   ├── Contact.jsx
│   │   ├── Hairstyles.jsx
│   │   ├── Home.jsx
│   │   ├── PriceList.jsx
│   │   └── Products.jsx
│   ├── styles/             # Global CSS and animation definitions
│   │   ├── animation.css   # Keyframes for signature effects (Fade-in, Marquee)
│   │   └── index.css       # Main Tailwind entry point
│   ├── App.jsx             # Main routing and global layout wrapper
│   └── main.jsx            # React entry point
├── design.md               # Design system documentation (Colors, Fonts, Theme)
├── index.html              # HTML shell
├── tailwind.config.js      # Utility-first CSS configuration
└── vite.config.js          # Build tool configuration
```

## Folder Explanations

### `src/assets`
Contains all imagery for the site.
- **Product Images**: `japan.jpg`, `Slider_image_1.jpg`, etc.
- **Service Images**: `pricelist.jpg`, hairstyle gallery (`ảnh_tóc...`).
- **Brand Assets**: `hero.png`, `kimonostore.jpg`.

### `src/components`
Follows a feature-based organization.
- **`common/`**: Houses components that appear on almost every page (e.g., `Navbar`, `Footer`, and the `Sakura` petal effect).
- **`Home/`, `Contact/`, `Products/`, `PriceList/`**: Each folder contains specialized sections for its respective page to keep page files lean.

### `src/pages`
The top-level components that the router (`App.jsx`) renders. 
- These files orchestrate the layout by pulling in smaller components from `src/components`.
- Use `useEffect` with `window.scrollTo(0, 0)` on page load to ensure proper navigation behavior.

### `src/styles`
- **`animation.css`**: Defines high-end motion effects like `animate-fade-in-up`, `animate-slow-zoom`, and `animate-marquee`. These are essential for the "Kyoto Luxury" vibe.
- **Tailwind**: Used extensively for layout and responsive design.

### `App.jsx`
The central hub for routing. It wraps all pages with:
1. `<Sakura />` (Background effect)
2. `<TopBar />` (Announcement bar)
3. `<Navbar />` (Navigation)
4. `<Routes>` (Main content)
5. `<Footer />` (Persistent footer)

## Key References for AI
- **Design System**: Refer to `design.md` for the official color palette (`#7F170E` Maroon, `#FCF9F7` Cream), typography, and spacing rules.
- **Style Guide**: Maintain the traditional-modern luxury aesthetic. Use light-weight serifs for emphasis and generous letter-spacing for headers.
