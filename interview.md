# Interview Technical Deep-Dive: Kimono Rental System

## 1. Architectural Design & Decisions

### Structure: The Serverless Client-Side Monolith
The Kimono Rental system is architected as a **Serverless React Monolith**. This decision was driven by the need for **zero-cost infrastructure** and **rapid iteration** for a small-to-medium enterprise (SME).

*   **Frontend (React 19 + Vite):** The "Brain" of the application. It handles routing, complex state orchestration, and dynamic price calculations entirely on the client side.
*   **Backend-as-a-Service (Google Apps Script):** Acts as the API Gateway. I implemented a custom GAS endpoint to handle `doPost` requests, providing a REST-like interface without the overhead of a dedicated Node.js or Python server.
*   **Database (Google Sheets):** Used for real-time data persistence. This allows non-technical staff to manage bookings directly in a spreadsheet, eliminating the need for a custom Admin Dashboard.

## 2. Design Patterns & "The Why"

| Pattern | Implementation | The "Why" (Business Value) |
| :--- | :--- | :--- |
| **State Lifting** | `Booking.jsx` orchestrating `ServiceSelection` & `CartSummary` | Ensures data consistency. When a user changes a guest count, the price estimator updates instantly across all UI components. |
| **Controlled Components** | `BookingForm.jsx` | Mandatory for validating user input (phone/email) before data is sent to the backend. |
| **Composition Pattern** | `Reveal.jsx` wrapper | High-performance animation reusability. I can wrap any component in a physics-based fade-in without duplicating Framer Motion logic. |
| **Persistence Pattern** | `location.state` via Router v7 | Allows "Pre-filling." If a user views a "Luxury Furisode" and clicks "Book Now," the state is passed to the Booking page so they don't have to search for the item again. |

## 3. Core Features: Deep Engineering

### The Dynamic Price Estimation Engine
Unlike standard e-commerce, kimono rentals often involve price ranges (e.g., *¥ 30,000 ~ ¥ 45,000*).
*   **The Regex Pipeline:** I built a calculation engine that uses Regex (`/[\d,]+/g`) to parse formatted price strings, calculate both minimum and maximum possible totals, and format them back to human-readable currency in real-time.
*   **Complexity Handling:** The engine must react to three independent variables: **Package Selection**, **Guest Counts** (Men/Women/Kids), and **Add-ons** (Photography/Hair).

### The "Zero-Cost" Backend Integration
I bypassed traditional backend costs by engineering a direct pipeline to Google Workspace.
*   **The Bridge:** `handleSubmit` in `Booking.jsx` sends a JSON payload to a Google Apps Script URL.
*   **Concurrency Management:** Used `orderId: KYO-${Date.now()}` to ensure unique transaction identifiers in a non-relational database (Sheets).
*   **Asynchronous UX:** Implemented a "Fire and Forget" strategy with optimistic UI updates (Toasts) to keep the user experience smooth while the script writes to the spreadsheet.

## 4. UX, Animation & Performance

### Physics-Based Interaction
*   **Lookbook:** I implemented `react-pageflip` with physics-based math to mimic the tactile feel of a physical kimono catalog.
*   **Reveals:** Used `framer-motion` for viewport-aware animations. This ensures the browser only renders animation frames when they are visible, keeping the **Interaction to Next Paint (INP)** low.

### State Persistence across Navigation
By using **React Router v7's** `useLocation` and `navigate` state, I ensured that complex guest configurations are preserved. If a user refreshes or navigates back from a detail page, the project uses `window.history.replaceState` to clean up the URL while keeping the local cache "warm."

## 5. Categorized Interview Questions & Answers

### Group 1: Architecture & Trade-offs
**Why Google Apps Script instead of Firebase?**
*   **Ans:** For this specific business, Google Sheets was already the tool they used for daily operations. Using Apps Script allowed me to "meet the client where they are." It resulted in 0% hosting costs and 100% staff familiarity with the data.

**What are the limitations of using Sheets as a database?**
*   **Ans:** Rate limiting and lack of indexing. Apps Script is slower than a standard SQL DB. I mitigated this by performing all logic (filtering, pricing) on the **Client Side** and only using the backend for the final "Write" operation.

### Group 2: React Concepts (Hooks & State)
**When do you choose `useRef` over `useState`?**
*   **Ans:** In this project, I used `useRef` for the `toastTimeout`. If I used state, every second of the timer would trigger a re-render of the whole page. `useRef` allows me to manage the timer's lifecycle without impacting performance.

**Explain your `useEffect` strategy in the Booking flow.**
*   **Ans:** I used `useEffect` to pre-fill the cart. It watches `location.state`. If it detects a `prefillProduct`, it updates the cart state and then immediately calls `history.replaceState` to prevent a "double-add" bug if the user refreshes the page.

### Group 3: Frontend Performance
**How did you optimize the "Lookbook" feature?**
*   **Ans:** The Lookbook uses many high-resolution images. I implemented **Lazy Loading** and ensured `react-pageflip` was only initialized after the critical CSS path was loaded. I also offloaded the "flip" sound effects/animations to the GPU using Framer Motion.

## 6. Final Technical Polish Tip
If asked about **Scalability**: "The project is currently a serverless monolith. If we scaled to 10,000 bookings a day, the transition path would be to swap the Google Apps Script fetch call for a Node.js/PostgreSQL backend. Because my frontend logic is decoupled from the API structure, we only need to change one `handleSubmit` function."
