'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import Button from './Button';
import Eyebrow from './Eyebrow';

// CONFIGURABLE CONSTANTS:
// WhatsApp Number configuration (Replace before launch)
const WHATSAPP_NUMBER = '918882221111';
const WHATSAPP_MESSAGE = "Hi Ghummakkad, I'd like to plan a Rajasthan trip";

export default function FinalCTA() {
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
            id="final-cta" 
            aria-labelledby="cta-heading"
            className="overflow-hidden"
        >
            {/* Subtle Gold Radial Ambient Glow (CSS only, passes AA contrast) */}
            <div 
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] aspect-square rounded-full bg-gold/5 blur-[120px] pointer-events-none z-0"
            />

            <Container className="relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-[720px] mx-auto text-center flex flex-col items-center"
                >
                    {/* Eyebrow */}
                    <motion.div variants={itemVariants}>
                        <Eyebrow>START YOUR JOURNEY</Eyebrow>
                    </motion.div>

                    {/* H2 Title */}
                    <motion.h2 
                        id="cta-heading"
                        variants={itemVariants}
                        className="text-[clamp(2.25rem,5vw,3.5rem)] font-cormorant-garamond font-bold text-text-hi leading-tight tracking-tight mb-6"
                    >
                        Ready for Your Next Royal Adventure?
                    </motion.h2>

                    {/* Paragraph */}
                    <motion.p 
                        variants={itemVariants}
                        className="text-text-mid font-inter text-base md:text-lg leading-relaxed mb-10 max-w-[600px]"
                    >
                        Tell us your dream Rajasthan experience and our local experts will craft a personalized itinerary for you.
                    </motion.p>

                    {/* Action CTAs: Systematic Button Layout */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4 mb-8 w-full sm:w-auto"
                    >
                        <Button 
                            href="/contact" 
                            variant="primary"
                            size="lg"
                            icon="ri-compass-3-line"
                            iconPosition="left"
                            className="w-full sm:w-auto"
                        >
                            Plan My Trip
                        </Button>
                        
                        <Button
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            size="lg"
                            icon="ri-whatsapp-line text-green-400"
                            iconPosition="left"
                            className="w-full sm:w-auto"
                        >
                            Talk to an Expert
                        </Button>
                    </motion.div>

                    {/* Reassurance text */}
                    <motion.p 
                        variants={itemVariants}
                        className="text-text-lo font-inter text-xs md:text-sm font-medium tracking-wide flex items-center justify-center flex-wrap gap-2 md:gap-3"
                    >
                        <span>Free consultation</span>
                        <span className="text-gold font-bold">•</span>
                        <span>Custom itinerary within 24 hours</span>
                        <span className="text-gold font-bold">•</span>
                        <span>No hidden charges</span>
                    </motion.p>
                </motion.div>
            </Container>
        </Section>
    );
}
