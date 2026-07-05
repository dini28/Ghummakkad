'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Button from './Button';

const packagesData = [
    {
        title: 'Royal Rajasthan Getaway',
        region: 'JAIPUR & PUSHKAR',
        duration: '4 DAYS',
        price: '₹18,999',
        image: '/assets/images/card_1.webp',
        alt: 'Majestic elephant procession at Amber Fort, Jaipur',
        highlights: [
            'Amber Fort elephant views',
            'Sacred Pushkar Lake tour',
            'Traditional palace dinner'
        ],
        href: '/packages/royal-getaway'
    },
    {
        title: 'Jaipur + Udaipur Heritage Escape',
        region: 'JAIPUR & UDAIPUR',
        duration: '5 DAYS',
        price: '₹24,999',
        image: '/assets/images/card_2.webp',
        alt: 'Luxury private cruise boat at sunset in Udaipur Lake Pichola',
        highlights: [
            'Lake Pichola private cruise',
            'Hawa Mahal sunrise photography',
            'Bagore ki Haveli folk show'
        ],
        href: '/packages/heritage-escape'
    },
    {
        title: 'Jaisalmer Desert Luxury Experience',
        region: 'JAISALMER & THAR DESERT',
        duration: '5 DAYS',
        price: '₹27,999',
        image: '/assets/images/card_3.webp',
        alt: 'Beautiful glamping tents in Sam Sand Dunes of Jaisalmer desert',
        highlights: [
            'Luxury glamping in sand dunes',
            'Private camel safari at sunset',
            'Traditional Kalbeliya dance'
        ],
        href: '/packages/desert-luxury'
    },
    {
        title: 'Complete Rajasthan Circuit',
        region: 'JAIPUR, JODHPUR, UDAIPUR & JAISALMER',
        duration: '9 DAYS',
        price: '₹45,999',
        image: '/assets/images/rajasthan.webp',
        alt: 'Scenic overlook of Mehrangarh Fort towering above Jodhpur blue city',
        highlights: [
            'Mehrangarh Fort private tour',
            'Thar desert overnight camp',
            'Udaipur boat cruise & palaces'
        ],
        href: '/packages/rajasthan-circuit'
    }
];

export default function PackagesSection() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const cardVariants = {
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
            bg="cream" 
            id="packages" 
            aria-labelledby="packages-heading"
        >
            <Container>
                {/* Section Header */}
                <SectionHeading
                    eyebrow="RECOMMENDED ITINERARIES"
                    title="Handpicked Rajasthan Travel Packages"
                    subtitle="Fully customizable private journeys led by local experts and designed to match your budget and interests."
                    align="center"
                    theme="light"
                />

                {/* Packages Grid */}
                <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0 m-0"
                >
                    {packagesData.map((pkg, i) => (
                        <motion.li 
                            key={i} 
                            variants={cardVariants}
                            className="flex animate-fade-in"
                        >
                            <Link href={pkg.href} className="flex flex-col w-full group cursor-pointer">
                                {/* Image Container with Overlays */}
                                <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-ink shadow-[0_10px_30px_rgba(11,12,16,0.02)] group-hover:shadow-[0_15px_35px_rgba(232,166,61,0.08)] transition-all duration-500">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.alt}
                                        fill
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    {/* Duration Badge */}
                                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-ink text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full z-20 shadow-sm font-mono">
                                        {pkg.duration}
                                    </span>

                                    {/* Wishlist Heart Icon */}
                                    <button 
                                        aria-label="Add to wishlist" 
                                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/35 backdrop-blur-sm hover:bg-white/20 text-white hover:text-gold flex items-center justify-center transition-all duration-300 z-20 cursor-pointer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <i className="ri-heart-line text-lg"></i>
                                    </button>
                                </div>

                                {/* Text Content below Image */}
                                <div className="mt-4 px-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-gold font-bold uppercase tracking-wider font-mono">
                                            {pkg.region}
                                        </span>
                                        <span className="text-[11px] text-slate-500 font-medium font-mono flex items-center gap-1">
                                            <i className="ri-star-fill text-[#F5A400]"></i> 4.9
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-base md:text-lg font-playfair-display font-bold text-ink mt-1.5 leading-snug group-hover:text-gold transition-colors">
                                        {pkg.title}
                                    </h3>

                                    {/* Pricing Line */}
                                    <p className="text-xs text-slate-600 font-inter mt-1.5">
                                        <span className="font-mono font-bold text-gold text-sm">{pkg.price}</span> / person · customizable
                                    </p>
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Custom Package CTA */}
                <div className="text-center mt-12">
                    <Button 
                        href="/contact" 
                        variant="ghost" 
                        className="min-h-[48px] text-ink hover:text-gold border border-ink/10 hover:border-gold"
                    >
                        Request a Custom Package
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
