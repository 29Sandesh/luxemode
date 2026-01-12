# LUXEMODE

![Version](https://img.shields.io/badge/version-4.12.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Author](https://img.shields.io/badge/author-Sandesh%20Agrawal-red.svg)

**LUXEMODE** is a premium, high-fidelity fashion e-commerce application engineered by **Sandesh Agrawal**. 

Designed to bridge the gap between digital convenience and luxury aesthetics, LUXEMODE offers an immersive shopping experience. Built with the latest web technologies, it features fluid animations, a robust state management system, and a pixel-perfect responsive design that adapts seamlessly from mobile devices to large desktop screens.

---

## 🌟 Features

### 🛍️ Immersive Shopping Experience
*   **Dynamic Home Feed:** Features a curated "Summer Collection" hero section, trending products, and category browsing.
*   **Advanced Product Discovery:** Real-time search functionality with instant filtering.
*   **Rich Product Details:** High-resolution image galleries, color/size selection, and customer review summaries.

### 💼 Smart Cart & Checkout
*   **Interactive Cart:** Real-time updates for quantity, price calculation, and tax estimation.
*   **Seamless Checkout:** A simulated, multi-step checkout process including address selection, payment method management, and order confirmation.
*   **Promo Code System:** UI support for applying discount codes.

### 👤 User Personalization
*   **Persistent Profile:** Manage personal details, shipping addresses, and payment methods.
*   **Wishlist:** Save favorite items for later with a single tap.
*   **Order History:** detailed tracking of past purchases with status indicators.

### 🎨 UI/UX Excellence
*   **Dark Mode Support:** Fully integrated system-wide dark mode with persisted user preference.
*   **Micro-interactions:** Smooth transitions, active states, and loading animations (including a custom splash screen).
*   **Responsive Architecture:** Mobile-first approach with a max-width constraint for a native-app feel on desktop.

---

## 🛠️ Technology Stack

*   **Core:** React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM v7
*   **State Management:** React Context API (StoreContext)
*   **Icons:** Google Material Symbols
*   **Fonts:** Plus Jakarta Sans

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   Node.js (v16.0.0 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sandesh-agrawal/luxemode.git
    cd luxemode
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 📂 Project Structure

```
luxemode/
├── src/
│   ├── components/     # Reusable UI components (BottomNav, etc.)
│   ├── context/        # Global state management (StoreContext)
│   ├── screens/        # Page views (Home, ProductDetails, Cart, etc.)
│   ├── services/       # Mock data and service logic
│   ├── types.ts        # TypeScript interface definitions
│   ├── App.tsx         # Main application wrapper and routing
│   └── index.tsx       # Entry point
├── public/
├── index.html
└── package.json
```

---

## 👨‍💻 Author

**Sandesh Agrawal**

*   **GitHub:** [github.com/sandesh-agrawal](https://github.com/sandesh-agrawal)
*   **Email:** contact@sandeshagrawal.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright © 2024 Sandesh Agrawal. All rights reserved.
