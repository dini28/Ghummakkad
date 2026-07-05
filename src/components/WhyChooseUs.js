'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';

const valuesData = [
    {
        icon: 'ri-book-open-line',
        title: 'Authentic Rajasthan Storytelling',
        body: 'Explore the history, folklore, and hidden stories of palaces and forts with native local guides who live the culture.'
    },
    {
        icon: 'ri-team-line',
        title: 'Verified Local Experts',
        body: 'Our on-ground coordinators and drivers are vetted for professional conduct, local knowledge, and absolute safety.'
    },
    {
        icon: 'ri-chat-settings-line',
        title: 'Personalized Itineraries',
        body: 'Tailor every single day of your journey choosing hotels, activities, and transport to fit your family or solo preferences.'
    },
    {
        icon: 'ri-price-tag-3-line',
        title: 'Transparent Pricing',
        body: 'Get clear, itemized pricing without any hidden broker fees, tourist traps, or unexpected commission stops.'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 On-Trip Support',
        body: 'Enjoy peace of mind with a dedicated trip manager available at all hours via phone or WhatsApp during your travel.'
    },
    {
        icon: 'ri-shield-check-line',
        title: 'Comfort, Safety & Quality',
        body: 'From sanitised luxury cars to handpicked heritage properties, your comfort and security are guaranteed.'
    }
];

export default function WhyChooseUs() {
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
            id="why-choose-us"
            aria-labelledby="values-heading"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Sticky Header & Brand Pitch */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start text-left">
                        <span className="text-gold font-mono text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                            — OUR VALUES
                        </span>
                        
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-playfair-display font-bold text-ink leading-tight mb-6">
                            Why Choose Ghummakkad?
                        </h2>
                        
                        <p className="text-slate-600 font-inter text-base md:text-lg leading-relaxed mb-8 max-w-[420px]">
                            We don't just sell travel packages — we design authentic, high-quality, private local experiences tailored to your dreams.
                        </p>

                        {/* Extra Visual Indicator */}
                        <div className="border-l-2 border-gold/40 pl-6 py-2 mt-2">
                            <span className="text-xs uppercase font-bold tracking-widest font-mono text-gold block mb-1">Guaranteed Satisfaction</span>
                            <p className="text-xs text-slate-500 font-inter leading-relaxed max-w-[320px]">
                                We coordinate every single detail so you can focus entirely on enjoying your journey.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Values Stack */}
                    <div className="lg:col-span-7">
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="space-y-6 list-none p-0 m-0"
                        >
                            {valuesData.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={cardVariants}
                                    className="flex w-full"
                                >
                                    <article className="flex gap-5 md:gap-6 p-6 md:p-8 rounded-[1.5rem] bg-white/40 border border-cream-2/40 hover:bg-white hover:shadow-[0_15px_40px_rgba(232,166,61,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex-grow group">
                                        {/* Icon container */}
                                        <div
                                            aria-hidden="true"
                                            className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold text-xl shrink-0 group-hover:bg-gold group-hover:text-ink group-hover:scale-105 group-hover:border-gold transition-all duration-300"
                                        >
                                            <i className={item.icon}></i>
                                        </div>

                                        {/* Text content */}
                                        <div className="flex flex-col items-start text-left">
                                            <h3 className="text-lg font-playfair-display font-bold text-ink mb-2 group-hover:text-gold transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-500 font-inter text-xs md:text-sm leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    </article>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
