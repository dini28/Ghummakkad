'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero({
    backgroundImage = '/assets/images/hero.webp',
    featuredImage = '/assets/images/destinations/jaipur.webp'
}) {
    // Animation variant matching motion rules and prefers-reduced-motion
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
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
        <section id="home" className="relative bg-cream p-4 md:p-6 lg:p-8 min-h-screen flex flex-col justify-between">
            {/* Outer Rounded Container */}
            <div className="relative flex-grow rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-ink-2 flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-24 min-h-[80vh] lg:min-h-[85vh]">
                
                {/* Cinematic Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt="Cinematic majestic Rajasthan Palace at golden hour"
                        fill
                        priority
                        quality={90}
                        className="object-cover object-center"
                    />
                    {/* Guaranteed readable text scrim overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent z-10"></div>
                </div>

                {/* Left Column (Content) */}
                <div className="relative z-20 w-full lg:max-w-[600px] flex flex-col items-start text-left mb-12 lg:mb-0">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-start"
                    >
                        {/* Subtitle */}
                        <motion.span 
                            variants={itemVariants} 
                            className="text-gold font-mono text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
                        >
                            #1 Heritage travel partner in Rajasthan
                        </motion.span>

                        {/* H1 Title with Sansation/Zalando */}
                        <motion.h1 
                            variants={itemVariants}
                            className="text-[clamp(2.2rem,5vw,3.8rem)] font-playfair-display font-bold text-text-hi leading-tight tracking-tight mb-6 drop-shadow-lg"
                        >
                            Experience Rajasthan's Royal Grandeur
                        </motion.h1>

                        {/* Sub-paragraph description */}
                        <motion.p 
                            variants={itemVariants}
                            className="text-text-mid font-inter text-base md:text-lg leading-relaxed mb-10 max-w-[540px] drop-shadow"
                        >
                            Discover palaces, desert safaris, royal cuisine, cultural trails, and handpicked stays crafted by local Rajasthan travel experts.
                        </motion.p>

                        {/* Inline links with arrows */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-8 font-mono text-xs uppercase tracking-widest font-bold"
                        >
                            <Link href="#packages" className="text-text-hi hover:text-gold transition-colors flex items-center gap-1.5 border-b border-white/20 pb-1">
                                Plan My Trip <i className="ri-arrow-right-up-line text-sm"></i>
                            </Link>
                            <Link href="#experiences" className="text-text-hi hover:text-gold transition-colors flex items-center gap-1.5 border-b border-white/20 pb-1">
                                Explore Experiences <i className="ri-arrow-right-up-line text-sm"></i>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Column (Floating Card) */}
                <div className="relative z-20 w-full lg:w-auto flex justify-center lg:justify-end pr-0 lg:pr-8">
                    <motion.div
                        initial={{ opacity: 0.2, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        className="relative bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-3xl w-full max-w-[280px] hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group"
                    >
                        {/* Image inside floating card */}
                        <div className="relative h-[220px] rounded-2xl overflow-hidden mb-4">
                            <Image
                                src={featuredImage}
                                alt="Jaipur City Palace heritage stay"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        
                        {/* Card Content */}
                        <div className="flex items-center justify-between px-1">
                            <div>
                                <span className="text-[10px] uppercase font-bold tracking-wider text-gold font-mono block mb-1">Featured Stays</span>
                                <h3 className="text-white text-sm font-semibold font-playfair-display">Discover Our Royal Palaces</h3>
                            </div>
                            <Link href="#hotels" className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold hover:text-ink flex items-center justify-center text-white transition-all">
                                <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Right Cutout (Desktop only, absolute) */}
                <div className="hidden lg:block absolute bottom-0 right-0 bg-cream pt-10 pl-14 z-30 w-[440px] rounded-tl-[3rem]">
                    
                    {/* Inverted Corner Top-Right */}
                    <div className="inverted-corner-top"></div>
                    {/* Inverted Corner Bottom-Left */}
                    <div className="inverted-corner-left"></div>

                    {/* Stats Layout inside Cutout */}
                    <div className="grid grid-cols-3 gap-6 pr-6 pb-2">
                        <div className="flex flex-col">
                            <span className="text-gold text-2xl font-mono font-bold">10K+</span>
                            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider font-mono mt-1">Travelers</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gold text-2xl font-mono font-bold">500+</span>
                            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider font-mono mt-1">Experiences</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gold text-2xl font-mono font-bold">12+</span>
                            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider font-mono mt-1">Cities</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Stats Panel (Displayed below hero image on small screens) */}
            <div className="block lg:hidden mt-6 bg-cream-2 rounded-3xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col">
                        <span className="text-gold text-2xl font-mono font-bold">10K+</span>
                        <span className="text-slate-500 text-[9px] uppercase font-bold tracking-wider font-mono mt-1">Travelers</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gold text-2xl font-mono font-bold">500+</span>
                        <span className="text-slate-500 text-[9px] uppercase font-bold tracking-wider font-mono mt-1">Experiences</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gold text-2xl font-mono font-bold">12+</span>
                        <span className="text-slate-500 text-[9px] uppercase font-bold tracking-wider font-mono mt-1">Cities</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
