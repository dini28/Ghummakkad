'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero({
    tagline = 'Padharo Mhare Desh!',
    titlePrefix = (
        <>
            Experience Rajasthan&apos;s Royal Grandeur Through
        </>
    ),
    phrases = [
        'Curated Journeys',
        'Heritage Palace Stays',
        'Magical Desert Safaris',
        'Deep Cultural Immersions',
        'Exclusive Village Tours',
        'Bespoke Royal Adventures'
    ],
    backgroundImage = '/assets/images/hero.webp',
    buttonText = 'Book Now',
    buttonHref = '/packages'
}) {
    const [typedText, setTypedText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const currentPhrase = phrases[currentPhraseIndex];

        if (!isDeleting && typedText === currentPhrase) {
            // Reached the end of typing, pause before deleting
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && typedText === '') {
            // Finished deleting, transition to next phrase immediately
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
            // Typing or deleting in progress
            const speed = isDeleting ? 40 : 80;
            timer = setTimeout(() => {
                const nextText = isDeleting
                    ? currentPhrase.substring(0, typedText.length - 1)
                    : currentPhrase.substring(0, typedText.length + 1);
                setTypedText(nextText);
            }, speed);
        }

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentPhraseIndex, phrases]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center bg-center bg-cover bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Enhanced Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#05090f] via-transparent to-black/20 z-0"></div>

            {/* Decorative Light Element */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f6ac0f]/8 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">

                {/* Social Proof Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8"
                >
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-[#f6ac0f] text-xs" />
                        ))}
                    </div>
                    <span className="text-white/80 text-xs font-medium">
                        Rated <span className="text-white font-bold">4.9/5</span> by 10,000+ travelers
                    </span>
                </motion.div>

                {/* Animated Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="font-cursive text-xl lg:text-3xl text-[#f6ac0f] mb-6 tracking-[3px]"
                >
                    {tagline}
                </motion.p>

                {/* Dynamic Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl lg:text-7xl font-black text-white leading-tight mb-12 drop-shadow-2xl"
                >
                    {titlePrefix}
                    <span className="block text-[#f6ac0f] drop-shadow-[0_0_15px_rgba(246,172,15,0.4)] mt-2">
                        {typedText}
                        <span className="inline-block w-[3px] h-[0.9em] bg-white ml-2 animate-pulse align-middle"></span>
                    </span>
                </motion.h1>

                {/* Innovative CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-wrap gap-5"
                >
                    <Link href={buttonHref}>
                        <button className="px-10 py-5 bg-[#f6ac0f] text-slate-900 text-lg font-bold rounded-2xl shadow-[0_8px_30px_rgba(246,172,15,0.3)] hover:shadow-[0_12px_40px_rgba(246,172,15,0.5)] hover:-translate-y-1 transition-all duration-300">
                            {buttonText}
                        </button>
                    </Link>

                    <Link href="/about">
                        <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white text-lg font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                            Discover More
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Stats Overlay Bar — pinned to hero bottom */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-0 left-0 right-0 z-20"
            >
                <div className="max-w-5xl mx-auto px-6 mb-6 lg:mb-10">
                    <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-5 border border-white/10">
                        {[
                            { value: '12+', label: 'Cities' },
                            { value: '500+', label: 'Tours' },
                            { value: '10K+', label: 'Travelers' },
                            { value: '4.9', label: 'Rating' },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3 shrink-0">
                                <span className="text-[#f6ac0f] text-2xl lg:text-3xl font-black font-outfit">
                                    {stat.value}
                                </span>
                                <span className="text-white/60 text-[11px] font-medium uppercase tracking-widest">
                                    {stat.label}
                                </span>
                                {i < 3 && (
                                    <div className="w-px h-8 bg-white/10 ml-4 lg:ml-6" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
            >
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <i className="ri-arrow-down-s-line text-white/30 text-xl" />
                </motion.div>
            </motion.div>
        </section>
    );
}
