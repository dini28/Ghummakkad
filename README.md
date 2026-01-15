# Ghummakkad - Rajasthan Travel Experience

![Ghummakkad Preview](./frontend/assets/images/preview.png)

Ghummakkad is a premium travel booking platform designed to provide an immersive experience for travelers looking to explore the heritage and beauty of Rajasthan, India. The project features a modern, responsive user interface with a complete hotel booking wizard, authentication simulation, and a visually rich design aesthetic.

## 🚀 Features

### Core Functionality
-   **Immersive Home Page**: Features parallax scrolling, 3D card animations, and a rich media experience.
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

### 🎨 Special Animations (The "Blank Part")
You might notice a large section on the Home Page that acts as a scroll container. **This is intentional.**

*   **Sticky Scroll Storytelling**: The "Discover Rajasthan Magic" section (ID: `#sticky`) utilizes a `500vh` height container.
*   **How it works**: As you scroll through this "blank" looking space, you are actually scrubbing through a timeline animations. The content stays **sticky** (fixed in view) while your scroll position triggers the entrance of texts, cards, and 3D flip effects.
*   **Note**: If you see empty space, **keep scrolling!** The magic unfolds as you move down.

### Design & Tech
-   **Architecture**: Static HTML/CSS/JS (Serverless ready).
-   **Styling**:
    -   Vanilla CSS with CSS Variables for theming.
    -   Responsive Flexbox and Grid layouts.
    -   Glassmorphism and gradient effects.
    -   Custom animations (Fade-ins, Slide-ups).
    -   **Tech Stacks**:
     <p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> </p>
    
-   **Icons**: Remix Icon integration.
-   **Fonts**: Google Fonts ('Mulish' and 'Nothing You Could Do').

## 🛠️ Project Structure

```
Ghummakkad/
├── frontend/
│   ├── index.html          # Landing Page
│   ├── hotel.html          # Hotel Booking Wizard
│   ├── login.html          # Authentication Page
│   ├── assets/
│   │   ├── css/            # Stylings
│   │   ├── js/             # Application Logic
│   │   └── images/         # UI Assets & Preview.png
└── README.md
```

## 📦 How to Run

Since this is a static web site, you can run it using any simple local server.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ghummakkad.git
    ```
2.  **Open in Browser**:
    -   Simply open `frontend/index.html` in your preferred web browser.
    -   OR use a VS Code extension like **Live Server** for the best development experience.

## 🔮 Future Roadmap

-   [ ] **Backend Integration**: Transition from `localStorage` auth to a real Node.js/Express backend.
-   [ ] **Database**: Connect to MongoDB/SQL to persist user bookings and hotel availability.
-   [ ] **Payment Gateway**: Integrate Stripe or Razorpay for real payments.
-   [ ] **Admin Dashboard**: Allow hotel managers to update prices and availability.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
