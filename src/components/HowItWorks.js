'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Button from './Button';

const stepsData = [
    {
        number: '01',
        title: 'Tell Us Your Travel Style',
        body: 'Share your dates, interests, budget, and preferred destinations through our quick planning form.'
    },
    {
        number: '02',
        title: 'Get a Curated Itinerary',
        body: 'Our local experts design a personalized Rajasthan plan matching your taste and pace, usually within 24 hours.'
    },
    {
        number: '03',
        title: 'Travel & Explore Worry-Free',
        body: 'Set off on your private journey with vetted guides, comfort transport, and 24/7 on-trip support every step of the way.'
    }
];

export default function HowItWorks() {
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
            bg="cream" 
            id="how-it-works" 
            aria-labelledby="process-heading"
            className="relative"
        >
            <Container>
                {/* Centered Section Header */}
                <SectionHeading
                    eyebrow="THE PROCESS"
                    title="3 Simple Steps to Your Royal Journey"
                    subtitle="Planning your trip should be as enjoyable as the travel itself. Let our local experts handle all the details."
                    align="center"
                    theme="light"
                />

                {/* Steps Grid */}
                <div className="relative mb-16 mt-12">
                    
                    {/* Desktop Connector Line (Absolute behind nodes) */}
                    <div 
                        aria-hidden="true"
                        className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10 z-0"
                    />

                    <motion.ol 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0 relative z-10"
                    >
                        {stepsData.map((step, i) => (
                            <motion.li 
                                key={i}
                                variants={itemVariants}
                                className="flex"
                            >
                                <article className="relative bg-white/40 border border-cream-2/40 p-8 md:p-10 rounded-[2rem] hover:bg-white hover:shadow-[0_15px_40px_rgba(232,166,61,0.05)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center flex-grow group overflow-hidden">
                                    
                                    {/* Number Circle Node */}
                                    <div 
                                        aria-hidden="true"
                                        className="w-16 h-16 rounded-full border border-gold bg-white text-gold font-mono font-bold text-lg flex items-center justify-center shadow-md shrink-0 z-10 transition-all duration-500 group-hover:bg-gold group-hover:text-ink group-hover:scale-105 group-hover:shadow-[0_10px_25px_rgba(232,166,61,0.2)] mb-8"
                                    >
                                        {step.number}
                                    </div>

                                    {/* Step Info wrapper */}
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-xl font-playfair-display font-bold text-ink mb-3 transition-colors duration-300 group-hover:text-gold">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-500 font-inter text-xs md:text-sm leading-relaxed max-w-xs">
                                            {step.body}
                                        </p>
                                    </div>

                                </article>
                            </motion.li>
                        ))}
                    </motion.ol>
                </div>

                {/* Centered CTA */}
                <div className="text-center">
                    <Button 
                        href="/contact" 
                        variant="dark"
                        className="min-h-[48px] px-10"
                    >
                        Start Planning
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
