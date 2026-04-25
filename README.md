# Kimono Web Landing Page & Booking System

A modern, responsive landing page and booking management system designed for a premium Kimono rental shop. This platform allows customers to browse collections, view hairstyles, check pricing, and initiate rental bookings, while providing management with structured booking information.

## Key Features

- **Collection Showcase**: Beautifully displays various Kimono styles (Furisode, Houmongi, etc.).
- **Hairstyles Gallery**: Curated gallery of traditional Japanese hairstyles.
- **Dynamic Pricing**: Clear and accessible pricing information for rentals and add-ons.
- **Booking Management**: User-friendly booking form to gather customer details, service choices, and scheduling.
- **Fully Responsive**: Optimized for mobile and desktop viewing.

## Tech Stack

- **Framework**: Vite + React
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS (v4)
- **Routing**: React Router
- **Animation**: Framer Motion & AOS (Animate On Scroll)
- **Icons**: Lucide React & React Icons

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/kimono-web.git
cd kimono-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5174` (or as indicated in your terminal).

## Architecture Overview

### Directory Structure

```
├── public/           # Static images and assets
├── src/
│ ├── components/     # Reusable UI components
│ │ ├── Album/        # Gallery components
│ │ ├── Booking/      # Booking form and summary components
│ │ ├── Contact/      # Contact page sections
│ │ ├── Home/         # Homepage sections (Hero, Process, CTA)
│ │ ├── PriceList/    # Pricing display
│ │ └── Products/     # Collection filtering and display
│ ├── data/           # Data definitions (products.js)
│ ├── pages/          # Full page layouts
│ └── styles/         # CSS and animation definitions
└── index.html        # Main HTML entry point
```

### Key Components

- **Booking System**: The `BookingForm.jsx` handles customer data gathering, which is essential for the shop manager to finalize rentals.
- **Product Display**: The `ProductSection.jsx` and `ProductCard.jsx` dynamically render available Kimono collections from `data/products.js`.

## Environment Variables

This project currently uses local configuration and does not require complex environment variables for basic development. If you add backend services later, you can create a `.env` file in the root directory.

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

## Deployment

### Vercel / Netlify (Recommended)
This project is fully compatible with Vercel or Netlify:
1. Connect your GitHub repository to Vercel/Netlify.
2. Ensure the build command is `npm run build` and the output directory is `dist`.
3. Push to `main`, and it will auto-deploy.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
