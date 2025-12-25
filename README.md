# Ghummakkad - Rajasthan Travel Experience

Ghummakkad is a premium travel booking platform designed to provide an immersive experience for travelers looking to explore the heritage and beauty of Rajasthan, India. The project features a modern, responsive user interface with a complete hotel booking wizard, authentication simulation, and a visually rich design aesthetic.

## 🚀 Features

### Core Functionality
-   **Immersive Home Page**: Features parallax scrolling, 3D card animations, and a "Sticky Scroll" Rajasthan showcase.
-   **Hotel Booking Wizard**: A comprehensive 5-step flow:
    1.  **Select City**: Choose from popular destinations like Udaipur, Jaipur, Jaisalmer, etc.
    2.  **Select Hotel**: View curated lists of hotels with amenities, ratings, and pricing.
    3.  **Check Availability**: Date selection with validation for check-in/out and guest count.
    4.  **Payment Processing**: Mock payment gateway supporting Credit/Debit Cards and QR Code scanning.
    5.  **Confirmation**: Instant booking summary and confirmation.
-   **User Authentication (Mock)**:
    -   Fully functional Login and Register forms with tab switching.
    -   **Split-Layout Design**: Modern login page with a thematic side image and focused form area.
    -   **Auth Guard**: Booking flow enforces user login before payment. Uses `localStorage` to simulate a session.

### Design & Tech
-   **Architecture**: Static HTML/CSS/JS (Serverless ready).
-   **Styling**:
    -   Vanilla CSS with CSS Variables for theming.
    -   Responsive Flexbox and Grid layouts.
    -   Glassmorphism and gradient effects.
    -   Custom animations (Fade-ins, Slide-ups).
-   **Icons**: Remix Icon integration.
-   **Fonts**: Google Fonts ('Mulish' and 'Nothing You Could Do').

## 🛠️ Project Structure

```
Ghummakkad/
├── index.html          # Landing Page
├── hotel.html          # Hotel Booking Wizard
├── login.html          # Authentication Page (Split Layout)
├── about.html          # About Us & Mission
├── contact.html        # Contact Form & Info
├── assets/
│   ├── css/
│   │   ├── style.css   # Core global styles
│   │   └── common.css  # Shared utilities
│   ├── js/
│   │   └── script.js   # Application logic (Auth, Booking, UI)
│   └── images/         # Assets for UI (Hero, Hotels, Cities)
└── README.md
```

## 📦 How to Run

Since this is a static web site, you can run it using any simple local server.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ghummakkad.git
    ```
2.  **Open in Browser**:
    -   Simply open `index.html` in your preferred web browser.
    -   OR use a VS Code extension like **Live Server** for the best development experience.

## 🔮 Future Roadmap

-   [ ] **Backend Integration**: Transition from `localStorage` auth to a real Node.js/Express backend.
-   [ ] **Database**: Connect to MongoDB/SQL to persist user bookings and hotel availability.
-   [ ] **Payment Gateway**: Integrate Stripe or Razorpay for real payments.
-   [ ] **Admin Dashboard**: Allow hotel managers to update prices and availability.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
