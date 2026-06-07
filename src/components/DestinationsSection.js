'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Parallax } from 'swiper/modules';
import Button from './Button';

import 'swiper/css';
import 'swiper/css/pagination';

const destinations = [
    {
        id: 1,
        title: "Hawa Mahal",
        location: "Jaipur",
        img: "/assets/images/destinations/jaipur.webp",
        badge: { icon: "ri-star-fill", text: "Must Visit" },
        desc: "Built in 1799, the Palace of Winds features a unique honeycomb façade with 953 jharokhas.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "953 Jharokhas" },
            { icon: "ri-time-line", label: "Best Time", value: "Oct - Mar" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "₹50 (Ind) | ₹200 (For)" }
        ]
    },
    {
        id: 2,
        title: "Mehrangarh Fort",
        location: "Jodhpur",
        img: "/assets/images/destinations/jodhpur.webp",
        badge: { icon: "ri-shield-check-fill", text: "Fort" },
        desc: "One of the largest forts in India, standing 410 feet above the city and enclosed by imposing thick walls.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Museum & Architecture" },
            { icon: "ri-time-line", label: "Best Time", value: "Oct - Mar" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "₹200 (Ind) | ₹600 (For)" }
        ]
    },
    {
        id: 3,
        title: "Lake Pichola",
        location: "Udaipur",
        img: "/assets/images/destinations/udaipur.webp",
        badge: { icon: "ri-drop-fill", text: "Lake" },
        desc: "An artificial fresh water lake, created in the year 1362 AD, named after the nearby Picholi village.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Boat Ride & Sunset" },
            { icon: "ri-time-line", label: "Best Time", value: "Sep - Mar" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "Free (Boat Ride Paid)" }
        ]
    },
    {
        id: 4,
        title: "Bada Bagh",
        location: "Jaisalmer",
        img: "/assets/images/destinations/jaisalmer.webp",
        badge: { icon: "ri-ancient-pavilion-fill", text: "Heritage" },
        desc: "A garden complex about 6 km north of Jaisalmer, containing a set of royal cenotaphs.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Royal Cenotaphs" },
            { icon: "ri-time-line", label: "Best Time", value: "Oct - Mar" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "₹50 (Ind) | ₹100 (For)" }
        ]
    },
    {
        id: 5,
        title: "Pushkar Lake",
        location: "Pushkar",
        img: "/assets/images/destinations/pushkar.webp",
        badge: { icon: "ri-ancient-gate-fill", text: "Spiritual" },
        desc: "A sacred lake surrounded by 52 ghats and one of the few Brahma temples in the world.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Brahma Temple & Ghats" },
            { icon: "ri-time-line", label: "Best Time", value: "Nov (Fair)" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "Free" }
        ]
    },
    {
        id: 6,
        title: "Rampuria Haveli",
        location: "Bikaner",
        img: "/assets/images/destinations/bikaner.webp",
        badge: { icon: "ri-home-heart-fill", text: "Architecture" },
        desc: "Javed Rampuria Haveli is the most ornate and magnificent haveli in Bikaner, known for its red sandstone architecture.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Intricate Carvings" },
            { icon: "ri-time-line", label: "Best Time", value: "Oct - Mar" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "Free (External View)" }
        ]
    },
    {
        id: 7,
        title: "Meera Temple",
        location: "Chittorgarh",
        img: "/assets/images/destinations/chittorgarh.webp",
        badge: { icon: "ri-om-fill", text: "Spiritual" },
        desc: "A temple dedicated to Meera Bai, a Rajput princess and a devotee of Lord Krishna.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Indo-Aryan Architecture" },
            { icon: "ri-time-line", label: "Best Time", value: "Oct - Mar" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "Part of Fort Entry" }
        ]
    },
    {
        id: 8,
        title: "Ranthambore National Park",
        location: "Sawai Madhopur",
        img: "/assets/images/destinations/sawaimadhopur.webp",
        badge: { icon: "ri-bear-smile-fill", text: "Wildlife" },
        desc: "One of India’s most famous tiger reserves, known for wildlife safaris and ruins.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Royal Bengal Tigers" },
            { icon: "ri-time-line", label: "Best Time", value: "Oct - Apr" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "Safari Charges Apply" }
        ]
    },
    {
        id: 9,
        title: "Bharatpur Bird Sanctuary",
        location: "Bharatpur",
        img: "/assets/images/destinations/bharatpur.webp",
        badge: { icon: "ri-feather-fill", text: "Nature" },
        desc: "A UNESCO-listed bird sanctuary attracting migratory birds from across the world.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Migratory Birds" },
            { icon: "ri-time-line", label: "Best Time", value: "Nov - Feb" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "₹75 (Ind) | ₹500 (For)" }
        ]
    },
    {
        id: 10,
        title: "Shekhawati Havelis",
        location: "Mandawa",
        img: "/assets/images/destinations/mandawa.webp",
        badge: { icon: "ri-brush-fill", text: "Art" },
        desc: "Famous for fresco-painted havelis showcasing rich Rajasthani merchant history.",
        details: [
            { icon: "ri-check-double-line", label: "Highlights", value: "Painted Havelis" },
            { icon: "ri-time-line", label: "Best Time", value: "Oct - Feb" },
            { icon: "ri-money-dollar-circle-line", label: "Entry", value: "Free" }
        ]
    },
];

const DestinationsSection = () => {
    return (
        <section className="py-20 relative overflow-hidden" id="destinations">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6ac0f]/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            {/* Section Header */}
            <div className="text-center mb-14 px-6">
                <p className="text-[#f6ac0f] font-semibold tracking-widest uppercase text-sm mb-3">Top Destinations</p>
                <h2 className="text-4xl md:text-5xl font-extrabold font-playfair-display text-slate-900">
                    Explore Rajasthan
                </h2>
            </div>

            <div className="pl-6 lg:pl-12">
                <Swiper
                    modules={[Pagination, Autoplay, Parallax]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.5 },
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="pb-16"
                >
                    {destinations.map((dest) => (
                        <SwiperSlide key={dest.id} className="group h-[450px] perspective-1000">
                            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">

                                {/* FRONT */}
                                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-white/10 bg-[#05090f]">
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                        <i className={`${dest.badge.icon} text-[#f6ac0f]`}></i>
                                        <span className="text-xs font-bold uppercase tracking-wider text-white">{dest.badge.text}</span>
                                    </div>

                                    {/* Image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={dest.img}
                                            alt={dest.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <h4 className="text-2xl font-playfair-display font-bold text-white mb-1">{dest.title}</h4>
                                        <p className="flex items-center gap-2 text-slate-300 text-sm">
                                            <i className="ri-map-pin-line text-[#f6ac0f]"></i> {dest.location}
                                        </p>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div
                                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-[#0a0f18] p-8 flex flex-col justify-center border border-[#f6ac0f]/20 rotate-y-180"
                                >
                                    {/* Decorative bg */}
                                    <div className="absolute inset-0 opacity-5" style={{
                                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(246,172,15,0.5) 1px, transparent 0)`,
                                        backgroundSize: '24px 24px'
                                    }}></div>

                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-playfair-display font-bold text-[#f6ac0f] mb-4">{dest.title}</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                            {dest.desc}
                                        </p>

                                        <ul className="space-y-4 mb-8">
                                            {dest.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                                                    <i className={`${detail.icon} text-[#f6ac0f] mt-1`}></i>
                                                    <span>
                                                        <strong className="text-white block">{detail.label}:</strong>
                                                        {detail.value}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            variant="primary"
                                            className="w-full text-black font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors duration-300"
                                        >
                                            View Itinerary
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                /* Swiper Pagination Customization */
                .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.2) !important;
                    opacity: 1 !important;
                }
                .swiper-pagination-bullet-active {
                    background: #f6ac0f !important;
                    width: 24px !important;
                    border-radius: 999px !important;
                }
            `}</style>
        </section>
    );
};

export default DestinationsSection;
