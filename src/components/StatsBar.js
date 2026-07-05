'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: 10000, suffix: '+', label: 'Happy Travelers' },
    { value: 500, suffix: '+', label: 'Curated Experiences' },
    { value: 12, suffix: '+', label: 'Cities Covered' },
    { value: 4.9, suffix: '', label: 'Average Rating', isDecimal: true },
];

function AnimatedNumber({ value, suffix, isDecimal = false, duration = 1500 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const startTime = performance.now();
                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(isDecimal ? +(eased * value).toFixed(1) : Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, isDecimal, duration]);

    return (
        <span ref={ref} className="text-gold text-[clamp(2rem,4vw,3rem)] font-mono font-bold leading-none tabular-nums">
            {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
        </span>
    );
}

export default function StatsBar() {
    return (
        <section className="bg-ink relative z-20 -mt-16 pb-20">
            <div className="max-w-[1200px] mx-auto px-[clamp(1rem,5vw,2rem)]">
                <div className="bg-ink-2 border border-line rounded-2xl py-8 px-6 md:px-12 shadow-2xl relative overflow-hidden">
                    
                    {/* Subtle traditional jaali background touch */}
                    <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #E8A63D 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }} />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 relative z-10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0.2, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                className="flex flex-col items-center text-center relative group"
                            >
                                {/* Stat Number */}
                                <div className="mb-2">
                                    <AnimatedNumber
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        isDecimal={stat.isDecimal}
                                    />
                                </div>
                                
                                {/* Label */}
                                <span className="text-text-mid text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] font-inter">
                                    {stat.label}
                                </span>

                                {/* Vertical divider on desktop */}
                                {i < stats.length - 1 && (
                                    <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-px h-12 bg-line" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
