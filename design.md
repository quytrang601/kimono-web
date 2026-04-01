# Kyo Kimono Design Documentation

This document outlines the design system, themes, colors, typography, and visual patterns used in the Kyo Kimono web project.

## 1. Design Philosophy
- **Theme**: Traditional Japanese Elegance & Modern Luxury.
- **Concept**: "Kyoto Vibe" — combining minimalist layouts with rich, traditional accents.
- **Key Traits**: High-end, serene, detailed, and visually immersive.

## 2. Color Palette

### Primary Colors
| Color | Hex | Usage |
| :--- | :--- | :--- |
| **Deep Red (Maroon)** | `#7F170E` | Brand color, buttons, highlights, accent borders, icons. |
| **Cream White** | `#FCF9F7` | Primary background color for most sections. |

### Secondary & Accent Colors
| Color | Hex | Usage |
| :--- | :--- | :--- |
| **Deep Black-Brown** | `#1a1111` | Footer background, luxury dark sections. |
| **Dark Maroon** | `#2D1B1B` | CTA backgrounds, button hover states. |
| **Pale Pink** | `#F8D7D9` | Accent text on dark backgrounds, hover states. |
| **Sakura Pink** | `#FFC0CB` | Sakura petals, soft accents. |
| **Gold** | `#B38B59` | Star ratings, premium accents. |

### Functional Colors
- **Text (Main)**: `#1f2937` (Gray-800)
- **Text (Secondary)**: `#4b5563` (Gray-600)
- **Text (Muted)**: `#6b7280` (Gray-500)
- **White**: `#ffffff`

---

## 3. Typography

### Primary Font: Serif
- **Family**: `Playfair Display` (implied/used for elegance)
- **Usage**: Main headings, titles, and italicized emphasis.
- **Characteristics**: Light weights (300/400), often italicized for a "luxury" feel.

### Secondary Font: Sans-Serif
- **Family**: System default / Inter
- **Usage**: Body text, navigation links, and small labels.

### Text Styling Patterns
- **Subtitles**: Small font size (`10px` to `12px`), `uppercase`, extreme letter-spacing (`0.3em` to `0.6em`).
- **Heading Accents**: Often paired with a `1px` thin line (`bg-[#7F170E]/30`).
- **Emphasis**: Combining bold text with light-weight italics (e.g., `Mẫu Làm <span class="italic font-light">Tóc</span>`).

---

## 4. Visual Elements & UI Components

### Shapes & Borders
- **Rounded Corners**: Large radius for containers (`rounded-[2.5rem]`) and pills for buttons (`rounded-full`).
- **Borders**: Extremely thin (`1px`), frequently using low-opacity primary colors (e.g., `border-[#7F170E]/10`).
- **Dividers**: Short, centered horizontal lines used to separate sections.

### Effects
- **Shadows**: Subtle, soft shadows often tinted with the primary color (e.g., `shadow-[#7F170E]/5`).
- **Gradients**: Vertical or horizontal fades from primary colors to transparent.

---

## 5. Animations & Motion

### Global Animations
- **Sakura Fall**: Petals drifting, rotating, and swaying across the screen.
- **Marquee**: Continuous horizontal scrolling for news or TopBar announcements.
- **Slow Zoom**: Gentle image scaling (1.1 to 1.0) on page load.

### Component Transitions
- **Button Fill**: Background color slides in from the left on hover (`btn-fill-effect`).
- **Fade-In Up**: Content slides up and fades in smoothly.
- **Link Underline**: Border-bottom expanding from right to left on hover.

---

## 6. Iconography
- **Library**: `react-icons` (FontAwesome, etc.)
- **Style**: Thin or regular weights, often colored in `#7F170E`.
- **Social Icons**: Simple, minimalist icons in gray, turning red on hover.
