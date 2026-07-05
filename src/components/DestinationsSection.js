'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import SectionHeading from './SectionHeading';

const destinationsData = [
    {
        name: 'Jaipur',
        tagline: 'The Pink City',
        rating: 5,
        description: 'Explore the pink-hued capital: majestic hill forts, grand palaces, and bustling bazaars where history comes alive at every corner.',
        image: '/assets/images/destinations/jaipur.webp',
        alt: 'Magnificent facade of Hawa Mahal in Jaipur under daylight',
        href: '/packages',
        gridClass: 'lg:col-span-7'
    },
    {
        name: 'Udaipur',
        tagline: 'City of Lakes',
        rating: 5,
        description: 'Wander marble palaces and shimmering lakes in Rajasthan\'s most romantic city.',
        image: '/assets/images/destinations/udaipur.webp',
        alt: 'Beautiful City Palace and Lake Pichola in Udaipur at sunset',
        href: '/hotels',
        gridClass: 'lg:col-span-5'
    },
    {
        name: 'Jaisalmer',
        tagline: 'The Golden City',
        rating: 4.5,
        description: 'A living fort of golden sandstone rising from the Thar Desert, gateway to dune safaris.',
        image: '/assets/images/destinations/jaisalmer.webp',
        alt: 'Golden Jaisalmer Fort standing high above the town and desert',
        href: '/packages',
        gridClass: 'lg:col-span-5'
    },
    {
        name: 'Jodhpur',
        tagline: 'The Blue City',
        rating: 5,
        description: 'Blue-washed lanes beneath the mighty Mehrangarh Fort, the soul of Marwar.',
        image: '/assets/images/destinations/jodhpur.webp',
        alt: 'Panoramic view of blue houses in Jodhpur seen from high ramparts',
        href: '/packages',
        gridClass: 'lg:col-span-7'
    }
];

export default function DestinationsSection() {
    // Star rating generator helper with accessibility labels
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;
        return (
            <div 
                className="flex gap-0.5 items-center text-gold" 
                aria-label={`Rated ${rating} out of 5 stars`}
            >
                {[...Array(fullStars)].map((_, i) => (
                    <i key={`full-${i}`} className="ri-star-fill text-[10px]" aria-hidden="true"></i>
                ))}
                {hasHalf && <i className="ri-star-half-line text-[10px]" aria-hidden="true"></i>}
                {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                    <i key={`empty-${i}`} className="ri-star-line text-[10px] text-white/20" aria-hidden="true"></i>
                ))}
            </div>
        );
    };

    // Stagger animation rules
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0.2, 
            y: 20 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 20
            }
        }
    };

    return (
        <Section 
            bg="dark" 
            id="destinations" 
            aria-labelledby="destinations-heading"
            className="relative"
        >
            <Container>
                {/* Header */}
                <SectionHeading
                    eyebrow="EXPLORE BY DESTINATION"
                    title="Explore Rajasthan by Destination"
                    align="center"
                    theme="dark"
                />

                {/* Bento Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mt-12"
                >
                    {destinationsData.map((dest, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className={`relative rounded-[2rem] overflow-hidden group shadow-lg min-h-[280px] lg:min-h-[340px] flex flex-col justify-end p-6 md:p-8 border border-white/5 ${dest.gridClass}`}
                        >
                            {/* Destination image background */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={dest.image}
                                    alt={dest.alt}
                                    fill
                                    sizes="(max-w-768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-750 group-hover:scale-105"
                                />
                                {/* Scrim gradient for contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 z-10" />
                            </div>

                            {/* Card content overlay */}
                            <div className="relative z-20 flex flex-col items-start">
                                <span className="text-[10px] text-gold font-bold uppercase tracking-wider block mb-2 font-mono">
                                    {dest.tagline}
                                </span>
                                
                                <h3 className="text-2xl md:text-3xl font-playfair-display font-bold text-text-hi uppercase leading-none tracking-tight mb-2.5 transition-colors group-hover:text-gold duration-300">
                                    {dest.name}
                                </h3>

                                {renderStars(dest.rating)}

                                <p className="text-text-mid font-inter text-xs md:text-sm leading-relaxed mt-4 max-w-[500px] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    {dest.description}
                                </p>

                                <Link 
                                    href={dest.href}
                                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-white mt-6 font-mono border-b border-transparent hover:border-white pb-0.5 transition-all duration-300 group/btn"
                                >
                                    <span>Explore {dest.name}</span>
                                    <i className="ri-arrow-right-up-line text-xs transition-transform duration-300 group-hover/btn:translate-y-[-1px] group-hover/btn:translate-x-[1px]"></i>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
