'use client';

import React from 'react';
import { motion } from 'framer-motion';

const trustItems = [
    {
        icon: 'ri-map-pin-user-line',
        title: 'Local Rajasthan Experts',
        subLabel: 'Born & raised guides'
    },
    {
        icon: 'ri-verified-badge-line',
        title: 'Verified Hotels & Guides',
        subLabel: '100% vetted properties'
    },
    {
        icon: 'ri-user-star-line',
        title: 'Custom Private Tours',
        subLabel: 'Tailored to your pace'
    },
    {
        icon: 'ri-price-tag-3-line',
        title: 'Transparent Pricing',
        subLabel: 'No hidden charges'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Travel Support',
        subLabel: 'Always by your side'
    }
];

export default function TrustSection() {
    // Stagger animation rules
    const listVariants = {
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
        <section className="bg-ink relative z-20 pb-16">
            <div className="max-w-[1200px] mx-auto px-[clamp(1rem,5vw,2rem)]">
                <motion.ul 
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 list-none p-0 m-0"
                >
                    {trustItems.map((item, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            className="bg-ink-2 border border-line rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(232,166,61,0.05)] hover:-translate-y-1 group"
                        >
                            {/* Gold Icon Box */}
                            <div 
                                aria-hidden="true"
                                className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-2xl mb-4 transition-transform duration-300 group-hover:scale-105"
                            >
                                <i className={item.icon}></i>
                            </div>

                            {/* Title (Text-Hi) */}
                            <h3 className="text-text-hi font-inter font-bold text-sm leading-snug mb-1">
                                {item.title}
                            </h3>

                            {/* Sub-label (Text-Lo) */}
                            <span className="text-text-lo font-inter text-xs leading-relaxed">
                                {item.subLabel}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
