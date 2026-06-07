'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Aarav Sharma",
        location: "Delhi, India",
        text: "Ghummakkad made our Rajasthan trip unforgettable! The heritage stays and curated experiences were beyond expectations. Every detail, from the royal welcome to private boat rides in Lake Pichola, was flawless.",
        rating: 5,
        tripType: "Family Trip",
        destination: "Udaipur",
        tripImg: "/assets/images/destinations/udaipur.webp",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        date: "Oct 2025"
    },
    {
        name: "Priya Mehta",
        location: "Mumbai, India",
        text: "The team was available 24/7 and helped us discover hidden gems in the desert. Watching the sunset over the Sam Sand Dunes with private folk musicians was pure magic. Highly recommended!",
        rating: 5,
        tripType: "Couple's Getaway",
        destination: "Jaisalmer",
        tripImg: "/assets/images/destinations/jaisalmer.webp",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        date: "Nov 2025"
    },
    {
        name: "John Williams",
        location: "London, UK",
        text: "Professional, safe, and truly immersive. Standing atop Mehrangarh Fort at sunrise and walking through the blue streets with a local historian was an absolute highlight of my journey.",
        rating: 5,
        tripType: "Solo Cultural Tour",
        destination: "Jodhpur",
        tripImg: "/assets/images/destinations/jodhpur.webp",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        date: "Jan 2026"
    },
    {
        name: "Sneha Patel",
        location: "Ahmedabad, India",
        text: "From hot air ballooning in Jaipur to heritage palaces — every moment was magical. Ghummakkad understood exactly what our group wanted and delivered a luxurious, stress-free adventure.",
        rating: 5,
        tripType: "Friends' Group",
        destination: "Jaipur",
        tripImg: "/assets/images/destinations/jaipur.webp",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        date: "Dec 2025"
    },
];

const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <i
                key={i}
                className={`ri-star-fill text-xs ${i < rating ? 'text-[#f6ac0f]' : 'text-slate-600'}`}
            />
        ))}
    </div>
);

const TestimonialsSection = () => (
    <section className="py-28 bg-[#030712] relative overflow-hidden" id="testimonials">
        {/* Ambient premium glow layers */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#f6ac0f]/5 blur-[160px] rounded-full pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#f6ac0f]/3 blur-[140px] rounded-full pointer-events-none translate-y-1/2" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
            
            {/* Section Header */}
            <div className="text-center mb-20">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#f6ac0f] font-cursive text-xl lg:text-2xl tracking-[3px] mb-3"
                >
                    Real Stories, Royal Stays
                </motion.p>
                
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black font-playfair-display text-white mb-5 leading-tight"
                >
                    Loved by Discerning Travelers
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-slate-400 text-base md:text-lg max-w-xl mx-auto font-outfit"
                >
                    Ranked <span className="text-[#f6ac0f] font-black">4.9/5 stars</span> with a{' '}
                    <span className="text-white font-bold">98% client satisfaction</span> rate across India and abroad.
                </motion.p>

                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f6ac0f] to-transparent mx-auto mt-8 rounded-full" 
                />
            </div>

            {/* Testimonials Magazine-Style Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.1 }}
                        className="group flex flex-col md:flex-row bg-[#0b0f19]/60 backdrop-blur-md rounded-3xl overflow-hidden border border-white/[0.04] hover:border-[#f6ac0f]/30 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                    >
                        {/* Split-Screen Image representation */}
                        <div className="relative h-48 md:h-auto md:w-44 shrink-0 overflow-hidden">
                            <Image
                                src={t.tripImg}
                                alt={t.destination}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                            
                            {/* Trip Location Tag overlay */}
                            <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-1.5">
                                <i className="ri-map-pin-2-fill text-[#f6ac0f]" />
                                {t.destination}
                            </div>
                        </div>

                        {/* Review Content column */}
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative">
                            {/* Top decorative quote mark */}
                            <div className="absolute top-4 right-6 text-[#f6ac0f]/10 text-6xl font-serif pointer-events-none select-none">
                                &ldquo;
                            </div>

                            <div className="relative z-10">
                                {/* Rating and verification row */}
                                <div className="flex items-center justify-between mb-4">
                                    <StarRating rating={t.rating} />
                                    <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-[#f6ac0f] bg-[#f6ac0f]/10 px-2.5 py-1 rounded-md border border-[#f6ac0f]/20">
                                        <i className="ri-verified-badge-fill" />
                                        Verified Trip
                                    </span>
                                </div>

                                {/* Review quote text */}
                                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium font-outfit">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                            </div>

                            {/* Author Info row */}
                            <div className="flex items-center gap-4 pt-5 border-t border-white/5 relative z-10">
                                <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden border border-[#f6ac0f]/30">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-bold text-sm tracking-wide">{t.name}</div>
                                    <div className="text-slate-500 text-xs flex items-center gap-1.5 mt-0.5">
                                        <span>{t.location}</span>
                                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                                        <span className="text-[10px] uppercase font-bold text-[#f6ac0f]/80">{t.tripType}</span>
                                    </div>
                                </div>
                                <div className="text-[9px] font-extrabold text-slate-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                                    {t.date}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Premium Multi-Platform Review Board */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
            >
                <span className="text-xs font-black uppercase tracking-[3px] text-slate-500 font-outfit">
                    Highly Rated Across Prestigious Platforms:
                </span>
                
                <div className="flex flex-wrap items-center gap-8 text-slate-400">
                    <a href="#" className="flex items-center gap-2 hover:text-[#f6ac0f] transition-all duration-300 group">
                        <i className="ri-google-fill text-2xl text-slate-500 group-hover:text-amber-500 transition-colors" />
                        <div className="text-left leading-none">
                            <div className="text-xs font-black text-white group-hover:text-[#f6ac0f]">Google Review</div>
                            <span className="text-[10px] text-slate-500">4.9/5 (2,450+ reviews)</span>
                        </div>
                    </a>

                    <div className="hidden md:block w-px h-6 bg-white/10" />

                    <a href="#" className="flex items-center gap-2 hover:text-[#f6ac0f] transition-all duration-300 group">
                        <i className="ri-trip-advisor-fill text-2xl text-slate-500 group-hover:text-emerald-500 transition-colors" />
                        <div className="text-left leading-none">
                            <div className="text-xs font-black text-white group-hover:text-[#f6ac0f]">TripAdvisor</div>
                            <span className="text-[10px] text-slate-500">5.0/5 (1,820+ reviews)</span>
                        </div>
                    </a>

                    <div className="hidden md:block w-px h-6 bg-white/10" />

                    <a href="#" className="flex items-center gap-2 hover:text-[#f6ac0f] transition-all duration-300 group">
                        <i className="ri-facebook-fill text-2xl text-slate-500 group-hover:text-blue-500 transition-colors" />
                        <div className="text-left leading-none">
                            <div className="text-xs font-black text-white group-hover:text-[#f6ac0f]">Facebook Ratings</div>
                            <span className="text-[10px] text-slate-500">4.8/5 (980+ reviews)</span>
                        </div>
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

export default TestimonialsSection;

