'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import SectionHeading from './SectionHeading';

const cardsData = [
    {
        icon: 'ri-compass-3-line',
        title: 'Curated Journeys',
        body: 'Handpicked routes and activities customized to showcase the true soul of Rajasthan beyond standard tourist trails.',
        href: '/packages'
    },
    {
        icon: 'ri-hotel-line',
        title: 'Heritage Stays',
        body: 'Stay in centuries-old havelis, fortresses, and luxury palaces, experiencing the authentic hospitality of royalty.',
        href: '/hotels'
    },
    {
        icon: 'ri-user-star-line',
        title: 'Private Tours',
        body: 'Explore at your own pace with private luxury vehicles, expert local storytellers, and fully private excursions.',
        href: '/packages'
    }
];

export default function MagicSection() {
    // Animation stagger settings
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
            id="experiences" 
            aria-labelledby="magic-heading"
        >
            <Container>
                {/* Centered Section Header */}
                <SectionHeading
                    eyebrow="WHAT WE OFFER"
                    title="Experience the Magic of Rajasthan"
                    subtitle="From royal palaces to golden deserts, every journey is crafted to make you feel the soul of Rajasthan."
                    align="center"
                    theme="light"
                />

                {/* Cards List Grid */}
                <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 list-none p-0 m-0"
                >
                    {cardsData.map((card, i) => {
                        // Apply asymmetrical border radii for a premium custom feel
                        const borderClasses = [
                            'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl',
                            'rounded-[2rem]',
                            'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl'
                        ][i % 3];

                        return (
                            <motion.li 
                                key={i} 
                                variants={cardVariants}
                                className="flex"
                            >
                                <article className={`relative bg-white border border-cream-2/80 ${borderClasses} p-8 lg:p-10 flex flex-col items-start justify-between flex-grow shadow-[0_15px_45px_rgba(11,12,16,0.015)] hover:shadow-[0_20px_50px_rgba(232,166,61,0.08)] hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden`}>
                                    
                                    {/* Subtle inner radial glow effect on hover */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(232,166,61,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="w-full relative z-10">
                                        {/* Gold Icon Box with pulsate hover */}
                                        <div 
                                            aria-hidden="true"
                                            className="w-14 h-14 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold text-2xl mb-8 transition-all duration-500 group-hover:bg-gold group-hover:text-ink group-hover:scale-105 group-hover:border-gold"
                                        >
                                            <i className={card.icon}></i>
                                        </div>

                                        {/* Card Title */}
                                        <h3 className="text-2xl font-playfair-display font-bold text-ink mb-4 transition-colors group-hover:text-gold duration-300">
                                            <Link 
                                                href={card.href}
                                                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm after:absolute after:inset-0 after:z-10"
                                            >
                                                {card.title}
                                            </Link>
                                        </h3>

                                        {/* Card Body */}
                                        <p className="text-slate-500 font-inter text-sm leading-relaxed mb-6 opacity-95">
                                            {card.body}
                                        </p>
                                    </div>

                                    {/* Learn More affordance */}
                                    <div 
                                        aria-hidden="true"
                                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mt-4 font-mono relative z-10"
                                    >
                                        <span>Learn More</span>
                                        <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1.5"></i>
                                    </div>
                                </article>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </Container>
        </Section>
    );
}
