'use client';

import React, { useState, useEffect, useRef } from 'react';

const trustItems = [
    {
        icon: 'ri-government-fill',
        title: 'Govt. Registered',
        subtitle: 'Recognized Tour Operator',
    },
    {
        icon: 'ri-star-smile-fill',
        title: '4.9/5 Rating',
        subtitle: '10,000+ verified reviews',
        hasCounter: true,
        counterEnd: 10000,
        counterSuffix: '+',
    },
    {
        icon: 'ri-group-fill',
        title: '500+ Travelers',
        subtitle: 'Happy customers this year',
        hasCounter: true,
        counterEnd: 500,
        counterSuffix: '+',
    },
    {
        icon: 'ri-secure-payment-fill',
        title: '100% Secure',
        subtitle: 'Encrypted payments',
    },
    {
        icon: 'ri-google-fill',
        title: 'Google 4.9★',
        subtitle: 'Top rated on Google',
    },
];

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
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
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * end));
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

const TrustSection = () => {
    return (
        <section className="py-8 bg-slate-950 border-y border-white/5 relative overflow-hidden">
            {/* Subtle gold ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#f6ac0f]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#f6ac0f]/30 transition-all duration-300 group cursor-default"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#f6ac0f]/10 flex items-center justify-center text-[#f6ac0f] text-xl group-hover:scale-110 group-hover:bg-[#f6ac0f]/20 transition-all duration-300">
                                <i className={item.icon}></i>
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-sm font-outfit leading-tight">
                                    {item.hasCounter ? (
                                        <AnimatedCounter end={item.counterEnd} suffix={item.counterSuffix} />
                                    ) : (
                                        item.title
                                    )}
                                    {item.hasCounter && (
                                        <span className="text-white/60 text-xs font-normal ml-1">
                                            {item.title.includes('Rating') ? 'reviews' : 'travelers'}
                                        </span>
                                    )}
                                </h5>
                                {!item.hasCounter && (
                                    <p className="text-slate-500 text-xs leading-tight">{item.subtitle}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
