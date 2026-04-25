# Kimono Web Application

A sophisticated web platform dedicated to showcasing and booking premium traditional Kimono services. This application provides a seamless user experience for browsing collections, viewing styles, and scheduling appointments.

## Key Features

- **Product Showcase**: Detailed catalog of various Kimono styles (Furisode, Houmongi, etc.).
- **Booking System**: Interactive appointment scheduling with add-on selection.
- **Visual Journey**: Immersive album and gallery views.
- **Responsive Design**: Mobile-first architecture optimized for all devices.

## Tech Stack

- **Framework**: Vite + React
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Icons**: React Icons (hi2)
- **Deployment**: Vercel

## Prerequisites

- Node.js 18 or higher
- npm or pnpm

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
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

The application will be available at `http://localhost:5173`.

## Architecture

### Directory Structure

```text
kimono-web/
├── conductor/        # Project management tracks
├── public/           # Static assets (images, fonts)
├── src/
│   ├── components/   # Reusable UI components
│   │   ├── Album/    # Album-related components
│   │   ├── Booking/  # Booking form and logic
│   │   ├── common/   # Shared components (Footer, Navbar, etc.)
│   │   ├── Contact/  # Contact page components
│   │   ├── Home/     # Homepage sections
│   │   ├── PriceList/# Pricing components
│   │   └── Products/ # Product display components
│   ├── data/         # Mock data (products.js)
│   ├── pages/        # Main application pages
│   └── styles/       # Global CSS and animations
├── index.html        # Entry point
├── tailwind.config.js# Tailwind configuration
└── vite.config.js    # Vite configuration
```

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run linter |

## Deployment

This project is configured for deployment on **Vercel**.

1. Connect your GitHub repository to Vercel.
2. Select the framework (Vite).
3. The build command is `npm run build` and output directory is `dist`.
4. Deploy!

## Troubleshooting

- **CSS Syntax Errors**: Ensure no trailing commas exist in CSS files (e.g., inside transition properties).
- **Redeclaration Errors**: Check for duplicate imports (e.g., importing React multiple times in the same file).
- **Vite/PostCSS Issues**: Ensure `@import` statements are placed at the very top of your CSS files before any other rules.
