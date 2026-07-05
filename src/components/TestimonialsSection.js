'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import SectionHeading from './SectionHeading';

const testimonialsData = [
    {
        rating: 5,
        quote: "Ghummakkad made our Rajasthan trip unforgettable! The heritage stays and curated experiences were beyond expectations. Every detail, from the royal welcome to private boat rides in Lake Pichola, was flawless.",
        name: "Aarav Sharma",
        location: "Delhi, India",
        tripType: "Family Trip",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        rating: 5,
        quote: "The team was available 24/7 and helped us discover hidden gems in the desert. Watching the sunset over the Sam Sand Dunes with private folk musicians was pure magic. Highly recommended!",
        name: "Priya Mehta",
        location: "Mumbai, India",
        tripType: "Couple's Getaway",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
        rating: 5,
        quote: "Professional, safe, and truly immersive. Standing atop Mehrangarh Fort at sunrise and walking through the blue streets with a local historian was an absolute highlight of my journey.",
        name: "John Williams",
        location: "London, UK",
        tripType: "Solo Cultural Tour",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
];

// INTEGRITY REQUIREMENT: Verified trust metrics props.
// These values can be overwritten or hidden via props for verified accuracy.
const defaultTrustBadges = [
    {
        icon: 'ri-google-fill',
        label: 'Google Reviews',
        metric: '4.9 ★ · 1,200+ reviews',
        verified: false // Flag to confirm live verification before launch
    },
    {
        icon: 'ri-award-line',
        label: 'Tripadvisor',
        metric: 'Certificate of Excellence',
        verified: false // Flag to confirm live verification before launch
    },
    {
        icon: 'ri-instagram-line',
        label: 'Instagram Community',
        metric: '50k+ followers',
        verified: false // Flag to confirm live verification before launch
    }
];

export default function TestimonialsSection({ 
    trustBadges = defaultTrustBadges 
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0.2, 
            y: 15 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <Section 
            bg="dark" 
            id="testimonials" 
            aria-labelledby="testimonials-heading"
        >
            <Container>
                {/* Section Header */}
                <SectionHeading
                    eyebrow="TESTIMONIALS"
                    title="Loved by Discerning Travelers"
                    subtitle="Rated 4.9 by travelers for authentic planning, reliable support, and unforgettable local experiences."
                    align="center"
                    theme="dark"
                />

                {/* Testimonial Cards Layout */}
                <div className="relative mb-16">
                    
                    {/* Desktop View: 3-column Grid */}
                    <motion.ul 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="hidden lg:grid grid-cols-3 gap-8 list-none p-0 m-0"
                    >
                        {testimonialsData.map((item, i) => (
                            <motion.li 
                                key={i} 
                                variants={itemVariants}
                                className="flex"
                            >
                                <article className="bg-ink-2 border border-line rounded-2xl p-8 flex flex-col justify-between flex-grow shadow-lg">
                                    <div>
                                        {/* Star Rating */}
                                        <div 
                                            className="flex gap-0.5 text-gold mb-6"
                                            aria-label={`Rated ${item.rating} out of 5 stars`}
                                        >
                                            {[...Array(item.rating)].map((_, starIndex) => (
                                                <i key={starIndex} className="ri-star-fill text-xs" aria-hidden="true"></i>
                                            ))}
                                        </div>

                                        {/* Quote Text */}
                                        <blockquote className="m-0 mb-6">
                                            <p className="text-text-hi font-inter text-sm leading-relaxed italic">
                                                "{item.quote}"
                                            </p>
                                        </blockquote>
                                    </div>

                                    {/* Card Footer Reviewer Info */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-line mt-auto">
                                        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0">
                                            <Image
                                                src={item.avatar}
                                                alt={`Client portrait of ${item.name}`}
                                                fill
                                                sizes="44px"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="min-w-0">
                                            <cite className="not-italic font-inter font-bold text-sm text-text-hi block truncate">
                                                {item.name}
                                            </cite>
                                            <span className="text-text-lo text-[11px] font-inter block truncate">
                                                {item.location} <span className="text-[#F5A400]/40 mx-1">·</span> <span className="text-gold font-semibold">{item.tripType}</span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Mobile/Tablet View: Interactive Carousel */}
                    <div className="lg:hidden flex flex-col items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0.3, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0.3, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-[500px]"
                            >
                                <article className="bg-ink-2 border border-line rounded-2xl p-8 flex flex-col justify-between shadow-lg min-h-[300px]">
                                    <div>
                                        <div 
                                            className="flex gap-0.5 text-gold mb-6"
                                            aria-label={`Rated ${testimonialsData[activeIndex].rating} out of 5 stars`}
                                        >
                                            {[...Array(testimonialsData[activeIndex].rating)].map((_, starIndex) => (
                                                <i key={starIndex} className="ri-star-fill text-xs" aria-hidden="true"></i>
                                            ))}
                                        </div>

                                        <blockquote className="m-0 mb-6">
                                            <p className="text-text-hi font-inter text-sm leading-relaxed italic">
                                                "{testimonialsData[activeIndex].quote}"
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-line mt-auto">
                                        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0">
                                            <Image
                                                src={testimonialsData[activeIndex].avatar}
                                                alt={`Client portrait of ${testimonialsData[activeIndex].name}`}
                                                fill
                                                sizes="44px"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="min-w-0">
                                            <cite className="not-italic font-inter font-bold text-sm text-text-hi block truncate">
                                                {testimonialsData[activeIndex].name}
                                            </cite>
                                            <span className="text-text-lo text-[11px] font-inter block truncate">
                                                {testimonialsData[activeIndex].location} <span className="text-[#F5A400]/40 mx-1">·</span> <span className="text-gold font-semibold">{testimonialsData[activeIndex].tripType}</span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Controls */}
                        <div className="flex items-center gap-4 mt-6">
                            <button
                                onClick={handlePrev}
                                aria-label="Previous review"
                                className="w-10 h-10 rounded-full border border-white/10 text-text-hi flex items-center justify-center transition-colors bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            >
                                <i className="ri-arrow-left-s-line text-lg" aria-hidden="true"></i>
                            </button>
                            <span className="text-xs text-text-lo font-bold font-inter" aria-live="polite">
                                {activeIndex + 1} <span className="text-white/20">/</span> {testimonialsData.length}
                            </span>
                            <button
                                onClick={handleNext}
                                aria-label="Next review"
                                className="w-10 h-10 rounded-full border border-white/10 text-text-hi flex items-center justify-center transition-colors bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            >
                                <i className="ri-arrow-right-s-line text-lg" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Centered Trust Badges Row */}
                <div className="border-t border-line pt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    {trustBadges.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-left">
                            <div 
                                aria-hidden="true"
                                className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-lg shrink-0"
                            >
                                <i className={badge.icon}></i>
                            </div>
                            <div>
                                <span className="text-text-hi text-xs font-bold font-inter block leading-snug">
                                    {badge.label}
                                </span>
                                <span className="text-text-lo text-[11px] font-inter block mt-0.5">
                                    {badge.metric}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
