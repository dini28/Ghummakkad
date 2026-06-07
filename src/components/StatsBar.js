'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
    { icon: 'ri-map-pin-fill', end: 12, suffix: '+', label: 'Cities Covered' },
    { icon: 'ri-compass-3-fill', end: 500, suffix: '+', label: 'Curated Experiences' },
    { icon: 'ri-group-fill', end: 10000, suffix: '+', label: 'Happy Travelers' },
    { icon: 'ri-star-fill', end: 4.9, suffix: '', label: 'Average Rating', isDecimal: true },
];

function AnimatedNumber({ end, suffix, isDecimal = false, duration = 2000 }) {
    const [value, setValue] = useState(0);
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
                        setValue(isDecimal ? +(eased * end).toFixed(1) : Math.floor(eased * end));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, isDecimal, duration]);

    return (
        <span ref={ref} className="text-[#f6ac0f] text-4xl md:text-5xl font-black font-outfit tabular-nums">
            {isDecimal ? value.toFixed(1) : value.toLocaleString()}{suffix}
        </span>
    );
}

const StatsBar = () => {
    return (
        <section className="relative py-20 bg-slate-950 overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(246,172,15,0.8) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />

            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6ac0f]/30 to-transparent" />
            {/* Bottom gold line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6ac0f]/30 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#f6ac0f]/10 flex items-center justify-center text-[#f6ac0f] text-2xl group-hover:scale-110 group-hover:bg-[#f6ac0f]/15 transition-all duration-300 border border-[#f6ac0f]/10">
                                <i className={stat.icon} />
                            </div>
                            <div className="mb-2">
                                <AnimatedNumber
                                    end={stat.end}
                                    suffix={stat.suffix}
                                    isDecimal={stat.isDecimal}
                                />
                            </div>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.15em]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
