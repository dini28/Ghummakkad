// Header Logic
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('open');

            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.classList.remove('ri-menu-line');
                icon.classList.add('ri-close-line');
                menuBtn.setAttribute('aria-expanded', 'true');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function () {

                if (window.innerWidth < 992 && navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');

                    const icon = menuBtn.querySelector('i');
                    icon.classList.remove('ri-close-line');
                    icon.classList.add('ri-menu-line');
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});

// Rajasthan Section Logic
document.addEventListener("DOMContentLoaded", () => {
    const stickySection = document.getElementById('sticky');
    const introText = document.querySelector('.intro-text');
    const outroText = document.querySelector('.outro-text');
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const stickyHeader = document.querySelector('.sticky-header');
    const cardContainer = document.querySelector('.card-container');
    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const card3 = document.getElementById('card-3');
    const cards = [card1, card2, card3];

    function isMobile() {
        return window.innerWidth <= 999;
    }

    function handleScroll() {
        if (isMobile()) return;

        const rect = stickySection.getBoundingClientRect();
        const sectionHeight = stickySection.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress through the section (0 to 1)
        const scrolled = -rect.top;
        const scrollRange = sectionHeight - viewportHeight;
        const progress = Math.max(0, Math.min(1, scrolled / scrollRange));

        // Intro text (0 to 0.15) - fades out
        if (progress <= 0.15) {
            const introProgress = 1 - (progress / 0.15);
            introText.style.opacity = introProgress;
            cardsWrapper.style.opacity = 0;
            outroText.style.opacity = 0;
        }
        // Cards section (0.15 to 0.85)
        else if (progress > 0.15 && progress <= 0.85) {
            introText.style.opacity = 0;
            outroText.style.opacity = 0;

            // Fade in cards wrapper
            if (progress <= 0.2) {
                const fadeProgress = (progress - 0.15) / 0.05;
                cardsWrapper.style.opacity = fadeProgress;
            } else {
                cardsWrapper.style.opacity = 1;
            }

            // Normalize progress for card animations (0.2 to 0.8 becomes 0 to 1)
            const cardProgress = (progress - 0.2) / 0.6;

            // Header fade in (0 to 0.25 of card section)
            const headerProgress = Math.max(0, Math.min(1, cardProgress / 0.25));
            stickyHeader.style.opacity = headerProgress;
            stickyHeader.style.transform = `translate(-50%, -50%) translateY(${40 - (40 * headerProgress)}px)`;

            // Card container width (0 to 0.25 of card section)
            const widthProgress = Math.min(1, cardProgress / 0.25);
            const width = 75 - (15 * widthProgress);
            cardContainer.style.width = `${width}%`;

            // Gap animation (starts at 0.4 of card section)
            if (cardProgress >= 0.4) {
                const gapProgress = Math.min(1, (cardProgress - 0.4) / 0.2);
                const gap = 30 * gapProgress;
                cardContainer.style.gap = `${gap}px`;

                const translateX = 30 * gapProgress;
                card1.style.transform = `translateX(-${translateX}px)`;
                card3.style.transform = `translateX(${translateX}px)`;

                const radius = 20 * gapProgress;
                cards.forEach(card => {
                    card.style.borderRadius = `${radius}px`;
                });
            } else {
                cardContainer.style.gap = '0px';
                card1.style.transform = 'translateX(0px)';
                card3.style.transform = 'translateX(0px)';
                card1.style.borderRadius = 'var(--radius-lg) 0 0 var(--radius-lg)';
                card2.style.borderRadius = '0';
                card3.style.borderRadius = '0 var(--radius-lg) var(--radius-lg) 0';
            }

            // Flip animation (starts at 0.7 of card section)
            if (cardProgress >= 0.7) {
                const flipProgress = Math.min(1, (cardProgress - 0.7) / 0.25);

                cards.forEach((card, i) => {
                    const delay = i * 0.1;
                    const adjustedProgress = Math.max(0, Math.min(1, (flipProgress - delay) / 0.9));
                    const cardRotate = 180 * adjustedProgress;

                    let transform = `rotateY(${cardRotate}deg)`;

                    if (i === 0 || i === 2) {
                        const yOffset = 30 * adjustedProgress;
                        transform += ` translateY(${yOffset}px)`;
                    }

                    card.style.transform = transform;
                });
            } else {
                cards.forEach(card => {
                    card.style.transform = 'rotateY(0deg)';
                });
            }
        }
        // Outro text (0.85 to 1) - fades in
        else {
            introText.style.opacity = 0;
            const outroProgress = (progress - 0.85) / 0.15;
            cardsWrapper.style.opacity = 1 - outroProgress;
            outroText.style.opacity = outroProgress;
        }
    }

    // Smooth scroll handling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call
    handleScroll();

    // Handle resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            handleScroll();
        }, 250);
    });
});

// Destination Section Logic
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.destination_card');
    const slideCount = slides.length;

    const enableLoop = slideCount >= 3;

    const swiper = new Swiper('.cards_wrapper', {
        loop: enableLoop,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        ...(enableLoop && { loopedSlides: slideCount }),

        on: {
            slideChange: function () {
                document.querySelectorAll('.destination_card.is-flipped').forEach(card => {
                    card.classList.remove('is-flipped');
                });
            }
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    const cards = document.querySelectorAll('.destination_card');

    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.closest('a') || e.target.closest('button')) {
                return;
            }

            cards.forEach(c => {
                if (c !== this) c.classList.remove('is-flipped');
            });

            this.classList.toggle('is-flipped');
        });
    });
});

// Custom Authentication Logic
function switchAuthTab(tab) {
    const tabs = document.querySelectorAll('.auth_tab');
    const forms = document.querySelectorAll('.auth_form');

    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    if (tab === 'login') {
        tabs[0].classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        tabs[1].classList.add('active');
        document.getElementById('register-form').classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const errorDiv = document.getElementById('login-error');

            try {
                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.message || 'Login failed');

                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', data.token);
                window.location.href = '/hotel.html';
            } catch (err) {
                errorDiv.textContent = err.message;
                errorDiv.classList.remove('hidden');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const errorDiv = document.getElementById('register-error');

            try {
                const res = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.message || 'Registration failed');

                // Success - switch to login
                alert('Account created! Please login.');
                switchAuthTab('login');
            } catch (err) {
                errorDiv.textContent = err.message;
                errorDiv.classList.remove('hidden');
            }
        });
    }
});



// Hotel Booking Flow Logic
const HOTEL_DATA = {
    'udaipur': {
        name: 'Udaipur',
        image: '/assets/images/Place/udaipur.jpg',
        hotels: [
            {
                id: 'udaipur-1',
                name: 'The Royal Lake Palace',
                image: '/assets/images/Hotel/TheRoyalLakePalace.jpg',
                price: 15500,
                rating: 4.9,
                location: 'Udaipur, Rajasthan',
                amenities: ['Free WiFi', 'Spa', 'Fine Dining']
            },
            {
                id: 'udaipur-2',
                name: 'Fateh Garh Heritage',
                image: '/assets/images/Hotel/FatehGarhHeritage.jpg',
                price: 9800,
                rating: 4.6,
                location: 'Near City Palace, Udaipur',
                amenities: ['Free Breakfast', 'Parking', 'Kid Friendly']
            },
            {
                id: 'udaipur-3',
                name: 'Taj Lake Palace',
                image: '/assets/images/Hotel/TajLakePalace.jpg',
                price: 48000,
                rating: 5.0,
                location: 'Lake Pichola, Udaipur',
                amenities: ['Lake View', 'Butler Service', 'Boat Ride']
            },
            {
                id: 'udaipur-4',
                name: 'The Oberoi Udaivilas',
                image: '/assets/images/Hotel/OberoiUdaivilas.jpg',
                price: 52000,
                rating: 5.0,
                location: 'Haridasji Ki Magri, Udaipur',
                amenities: ['Private Pool', 'Luxury Spa', 'Garden Walk']
            }
        ]
    },
    'jaisalmer': {
        name: 'Jaisalmer',
        image: '/assets/images/Place/jaisalmer.jpg',
        hotels: [
            {
                id: 'jaisalmer-1',
                name: 'Jaisalmer Marriott Resort',
                image: '/assets/images/Hotel/JaisalmerMarriottResort&Spa.jpg',
                price: 12200,
                rating: 4.5,
                location: 'Dhanana Rd, Jaisalmer',
                amenities: ['Private Tents', 'Camel Safari', 'Bonfire']
            },
            {
                id: 'jaisalmer-2',
                name: 'Mandir Palace',
                image: '/assets/images/Hotel/WelcomHeritageMandirPalace.jpeg',
                price: 8500,
                rating: 4.5,
                location: 'Gandhi Chowk Rd, Jaisalmer',
                amenities: ['Heritage Rooms', 'Folk Music', 'Buffet']
            },
            {
                id: 'jaisalmer-3',
                name: 'Suryagarh Jaisalmer',
                image: '/assets/images/Hotel/Suryagarh.jpg',
                price: 22000,
                rating: 4.8,
                location: 'Sam Road, Jaisalmer',
                amenities: ['Desert Spa', 'Haveli Design', 'Cultural Evenings']
            }
        ]
    },
    'jaipur': {
        name: 'Jaipur',
        image: '/assets/images/Place/jaipur.jpg',
        hotels: [
            {
                id: 'jaipur-1',
                name: 'Rambagh Palace',
                image: '/assets/images/Hotel/rambagh.jpg',
                price: 45000,
                rating: 4.9,
                location: 'Jaipur, Rajasthan',
                amenities: ['Royal Gardens', 'Luxury Spa', 'Butler Service']
            },
            {
                id: 'jaipur-2',
                name: 'Samode Haveli',
                image: '/assets/images/Hotel/samode.jpg',
                price: 18500,
                rating: 4.7,
                location: 'Old City, Jaipur',
                amenities: ['Heritage Courtyard', 'Pool', 'Puppet Show']
            },
            {
                id: 'jaipur-3',
                name: 'ITC Rajputana',
                image: '/assets/images/Hotel/ITC_Rajputana.jpg',
                price: 10500,
                rating: 4.6,
                location: 'Palace Road, Jaipur',
                amenities: ['Luxury Stay', 'Mughal Architecture', 'Pool']
            }
        ]
    },
    'jodhpur': {
        name: 'Jodhpur',
        image: '/assets/images/Place/jodhpur.jpg',
        hotels: [
            {
                id: 'jodhpur-1',
                name: 'RAAS Jodhpur',
                image: '/assets/images/Hotel/raas.jpg',
                price: 16500,
                rating: 4.8,
                location: 'Toorji Ka Jhalra, Jodhpur',
                amenities: ['Fort View', 'Stepwell Access', 'Rooftop Bar']
            },
            {
                id: 'jodhpur-2',
                name: 'Pal Haveli',
                image: '/assets/images/Hotel/pal.jpg',
                price: 6500,
                rating: 4.6,
                location: 'Near Clock Tower, Jodhpur',
                amenities: ['Heritage Rooms', 'Sunset Dining', 'Market Access']
            },
            {
                id: 'jodhpur-3',
                name: 'Umaid Bhawan Palace',
                image: '/assets/images/Hotel/UmaidBhawan.jpg',
                price: 65000,
                rating: 5.0,
                location: 'Circuit House Rd, Jodhpur',
                amenities: ['Museum', 'Royal Suites', 'Champagne Walk']
            }
        ]
    },
    'bikaner': {
        name: 'Bikaner',
        image: '/assets/images/Place/bikaner.jpg',
        hotels: [
            {
                id: 'bikaner-1',
                name: 'Narendra Bhawan',
                image: '/assets/images/Hotel/NarendraBhawan.jpg',
                price: 13500,
                rating: 4.7,
                location: 'Gandhi Colony, Bikaner',
                amenities: ['Infinity Pool', 'Curated Dining', 'Museum']
            },
            {
                id: 'bikaner-2',
                name: 'Laxmi Niwas Palace',
                image: '/assets/images/Hotel/LaxmiNiwas.jpg',
                price: 11000,
                rating: 4.6,
                location: 'Lalgarh Palace Complex, Bikaner',
                amenities: ['Heritage Decor', 'Stone Carving', 'Courtyard']
            }
        ]
    },
    'chittorgarh': {
        name: 'Chittorgarh',
        image: '/assets/images/Place/chittorgarh.jpg',
        hotels: [
            {
                id: 'chittorgarh-1',
                name: 'Castle Bijaipur',
                image: '/assets/images/Hotel/CastleBijaipur.jpg',
                price: 6500,
                rating: 4.4,
                location: 'Bijaipur, Chittorgarh',
                amenities: ['Horse Safari', 'Village Walk', 'Heritage Stay']
            },
            {
                id: 'chittorgarh-2',
                name: 'Bassi Fort Palace',
                image: '/assets/images/Hotel/BassiFort.jpg',
                price: 5800,
                rating: 4.3,
                location: 'Bassi, Chittorgarh',
                amenities: ['Boating', 'Wildlife Spotting', 'Traditional Food']
            }
        ]
    },
    'pushkar': {
        name: 'Pushkar',
        image: '/assets/images/Place/pushkar.jpg',
        hotels: [
            {
                id: 'pushkar-1',
                name: 'Ananta Spa & Resort',
                image: '/assets/images/Hotel/AnantaResort.jpg',
                price: 8500,
                rating: 4.5,
                location: 'Village Leela Sevri, Pushkar',
                amenities: ['Cottage Rooms', 'Spa', 'Nature Walk']
            },
            {
                id: 'pushkar-2',
                name: 'The Westin Pushkar Resort',
                image: '/assets/images/Hotel/WestinPushkar.jpg',
                price: 14500,
                rating: 4.7,
                location: 'Surajkund, Pushkar',
                amenities: ['Private Pool', 'Floating Breakfast', 'Luxury']
            }
        ]
    },
    'kota': {
        name: 'Kota',
        image: '/assets/images/Place/kota.jpg',
        hotels: [
            {
                id: 'kota-1',
                name: 'Umed Bhawan Palace',
                image: '/assets/images/Hotel/UmedBhawanKota.jpg',
                price: 7500,
                rating: 4.4,
                location: 'Palace Road, Kota',
                amenities: ['Royal Architecture', 'Garden', 'Billiards']
            },
            {
                id: 'kota-2',
                name: 'Country Inn & Suites',
                image: '/assets/images/Hotel/CountryInnKota.jpg',
                price: 5500,
                rating: 4.3,
                location: 'Rajeev Gandhi Nagar, Kota',
                amenities: ['Modern Rooms', 'Rooftop Pool', 'Gym']
            }
        ]
    }
};

let currentBookingState = {
    step: 1,
    cityId: null,
    hotel: null,
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0
};

document.addEventListener('DOMContentLoaded', () => {
    // Only run on hotel page
    const bookingSection = document.querySelector('.booking_section');
    if (!bookingSection) return;

    // Initialize Step 1
    renderCities();

    // Set min dates
    const today = new Date().toISOString().split('T')[0];
    const checkInInput = document.getElementById('checkin-date');
    const checkOutInput = document.getElementById('checkout-date');

    if (checkInInput) checkInInput.min = today;
    if (checkOutInput) checkOutInput.min = today;
});

function renderCities() {
    const grid = document.getElementById('city-grid');
    if (!grid) return;

    grid.innerHTML = '';
    Object.keys(HOTEL_DATA).forEach(cityKey => {
        const city = HOTEL_DATA[cityKey];
        const card = document.createElement('div');
        card.className = 'city_select_card';
        card.onclick = () => selectCity(cityKey);
        card.innerHTML = `
            <img src="${city.image}" alt="${city.name}">
            <div class="city_select_overlay">
                <h3>${city.name}</h3>
            </div>
        `;
        grid.appendChild(card);
    });
}

function selectCity(cityId) {
    currentBookingState.cityId = cityId;
    document.getElementById('selected-city-name').textContent = HOTEL_DATA[cityId].name;
    renderHotels(cityId);
    goToStep(2);
}

function renderHotels(cityId) {
    const grid = document.getElementById('hotel-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const hotels = HOTEL_DATA[cityId].hotels;

    hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel_card'; // Reusing style.css class

        // Generate amenities HTML
        const amenitiesHtml = hotel.amenities.map(a =>
            `<span class="amenity_item" title="${a}"><i class="ri-checkbox-circle-line"></i> ${a}</span>`
        ).join('');

        card.innerHTML = `
            <div class="hotel_image-wrapper">
                <img src="${hotel.image}" alt="${hotel.name}" class="hotel_img">
                <div class="hotel_price-badge">
                    <span>Starts at</span>
                    <h5 class="hotel_price">â‚¹${hotel.price.toLocaleString()}/Night</h5>
                </div>
            </div>
            <div class="hotel_content">
                <div class="hotel_header">
                    <h3 class="hotel_name">${hotel.name}</h3>
                    <div class="hotel_rating"><i class="ri-star-fill"></i> ${hotel.rating}</div>
                </div>
                <p class="hotel_location"><i class="ri-map-pin-line"></i> ${hotel.location}</p>
                <div class="hotel_amenities" style="gap: 10px; flex-wrap: wrap; margin-bottom: 1rem;">
                    ${amenitiesHtml}
                </div>
                <button onclick="selectHotel('${hotel.id}')" class="btn hotel_btn" style="width:100%">Select Hotel</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function selectHotel(hotelId) {
    const city = HOTEL_DATA[currentBookingState.cityId];
    const hotel = city.hotels.find(h => h.id === hotelId);
    currentBookingState.hotel = hotel;

    // Update Summary
    document.getElementById('summary-hotel-img').src = hotel.image;
    document.getElementById('summary-hotel-name').textContent = hotel.name;
    document.getElementById('summary-hotel-location').textContent = hotel.location;
    document.getElementById('summary-hotel-price').textContent = `â‚¹${hotel.price.toLocaleString()}/Night`;

    goToStep(3);
}

function checkAvailability() {
    const checkIn = document.getElementById('checkin-date').value;
    const checkOut = document.getElementById('checkout-date').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const errorMsg = document.getElementById('availability-error');

    if (!checkIn || !checkOut) {
        errorMsg.textContent = "Please select check-in and check-out dates.";
        return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
        errorMsg.textContent = "Check-out date must be after check-in date.";
        return;
    }

    // Verify Auth (Clerk or Local)
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        showToast("Please login to proceed with booking.");
        // Redirect to login if not authenticated
        setTimeout(() => window.location.href = '/login.html', 1000);
        return;
    }

    // Success
    errorMsg.textContent = "";
    currentBookingState.checkIn = checkIn;
    currentBookingState.checkOut = checkOut;
    currentBookingState.adults = adults;
    currentBookingState.children = children;

    goToStep(4); // Proceed to Payment
}

function togglePaymentMethod(method) {
    const cardForm = document.getElementById('payment-card');
    const qrForm = document.getElementById('payment-qr');

    if (method === 'card') {
        cardForm.classList.remove('hidden');
        cardForm.classList.add('active');
        qrForm.classList.add('hidden');
        qrForm.classList.remove('active');
    } else {
        qrForm.classList.remove('hidden');
        qrForm.classList.add('active');
        cardForm.classList.add('hidden');
        cardForm.classList.remove('active');
    }
}

async function processPayment() {
    const btn = document.querySelector('.payment_content.active .btn');
    const originalText = btn.textContent;
    btn.textContent = "Processing...";
    btn.disabled = true;

    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) throw new Error("User not found");

        // Calculate total days
        const start = new Date(currentBookingState.checkIn);
        const end = new Date(currentBookingState.checkOut);
        const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        const totalCost = nights * currentBookingState.hotel.price;

        const bookingData = {
            user: user._id,
            hotelName: currentBookingState.hotel.name,
            city: HOTEL_DATA[currentBookingState.cityId].name,
            checkIn: currentBookingState.checkIn,
            checkOut: currentBookingState.checkOut,
            guests: {
                adults: parseInt(currentBookingState.adults),
                children: parseInt(currentBookingState.children)
            },
            totalPrice: totalCost,
            paymentMethod: document.getElementById('payment-card').classList.contains('active') ? 'Card' : 'UPI'
        };

        const token = localStorage.getItem('token');

        const res = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify({
                destination: HOTEL_DATA[currentBookingState.cityId].name,
                checkIn: currentBookingState.checkIn,
                checkOut: currentBookingState.checkOut,
                guests: parseInt(currentBookingState.adults) + parseInt(currentBookingState.children),
                totalAmount: totalCost
            })
        });

        if (!res.ok) throw new Error('Booking failed');

        const data = await res.json();

        btn.textContent = "Success";
        setTimeout(() => showConfirmation(), 500);

    } catch (error) {
        console.error(error);
        alert("Payment/Booking failed. Please try again.");
        btn.textContent = originalText;
        btn.disabled = false;
    }
}

function showConfirmation() {
    const hotel = currentBookingState.hotel;

    // Calculate total days
    const start = new Date(currentBookingState.checkIn);
    const end = new Date(currentBookingState.checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const totalCost = nights * hotel.price;

    document.getElementById('confirm-hotel').textContent = hotel.name;
    document.getElementById('confirm-dates').textContent = `${currentBookingState.checkIn} to ${currentBookingState.checkOut} (${nights} Nights)`;
    document.getElementById('confirm-guests').textContent = `${currentBookingState.adults} Adults, ${currentBookingState.children} Children`;
    document.getElementById('confirm-price').textContent = `â‚¹${totalCost.toLocaleString()}`;

    goToStep(5);
}

function goToStep(step) {
    // Hide all steps
    document.querySelectorAll('.booking_step').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.booking_step').forEach(el => el.classList.remove('active'));

    // Show target step
    const targetStep = document.querySelector(`.booking_step:nth-of-type(${step + 1})`);
    // nth-of-type is 1-indexed. The container has unrelated 'progress' div first? No, progress is distinct container.
    // My HTML structure:
    // .booking_section
    //   .booking_progress
    //   #step-1-city
    //   #step-2-hotel
    //   #step-3-availability
    //   #step-4-confirm

    // Better to use IDs mapping
    const stepIds = {
        1: 'step-1-city',
        2: 'step-2-hotel',
        3: 'step-3-availability',
        4: 'step-4-payment',
        5: 'step-5-confirm'
    };

    const stepId = stepIds[step];
    if (stepId) {
        const stepEl = document.getElementById(stepId);
        stepEl.classList.remove('hidden');
        stepEl.classList.add('active');
    }

    // Update Progress Bar
    document.querySelectorAll('.progress_step').forEach(el => {
        const s = parseInt(el.getAttribute('data-step'));
        if (s <= step) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    currentBookingState.step = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple Toast Notification Function
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none;';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.innerHTML = `<i class="ri-information-line"></i> ${message}`;
    toast.style.cssText = 'background: #333; color: #fff; padding: 12px 24px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-size: 0.9rem; opacity: 0; transform: translateY(20px); transition: all 0.3s ease; display: flex; align-items: center; gap: 8px;';

    container.appendChild(toast);

    // Animate In
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });

    // Remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


// Authentication UI Updates
function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loginLinkLi = document.getElementById('login-link');

    if (user && loginLinkLi) {
        loginLinkLi.innerHTML = `
            <a href="#" onclick="logout(); return false;" class="nav_link nav_link-icon">
                <i class="ri-logout-circle-line"></i> Logout (${user.username.split(' ')[0]})
            </a>
        `;
    }
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    showToast("Logged out successfully!");
    setTimeout(() => {
        window.location.href = '/index.html';
    }, 1000);
}

// Update UI on load
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
});
