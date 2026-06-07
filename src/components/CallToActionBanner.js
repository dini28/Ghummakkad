'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CallToActionBanner = () => (
    <section className="relative py-24 overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0" />

        {/* Decorative gold ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6ac0f]/8 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f6ac0f]/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(246,172,15,0.5) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
        }} />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center"
            >
                {/* Urgency Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#f6ac0f]/10 px-5 py-2 rounded-full border border-[#f6ac0f]/20 mb-8"
                >
                    <span className="text-[#f6ac0f] text-sm">🔥</span>
                    <span className="text-[#f6ac0f] text-xs font-bold uppercase tracking-widest">
                        Limited Season Deals Available
                    </span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair-display text-white mb-6 leading-tight">
                    Ready for Your Next{' '}
                    <span className="text-[#f6ac0f]">Adventure</span>?
                </h2>

                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-outfit">
                    Book your Rajasthan journey with Ghummakkad and unlock exclusive offers 
                    on heritage stays and curated experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Link
                        href="/packages"
                        className="px-10 py-5 bg-[#f6ac0f] text-slate-900 font-bold text-sm uppercase tracking-widest rounded-2xl shadow-[0_8px_30px_rgba(246,172,15,0.3)] hover:shadow-[0_12px_40px_rgba(246,172,15,0.5)] hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore Packages
                    </Link>
                    <Link
                        href="/contact"
                        className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white font-bold text-sm uppercase tracking-widest rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        Talk to an Expert
                    </Link>
                </div>

                {/* Social Proof Line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-500 text-sm mb-10"
                >
                    <i className="ri-fire-fill text-orange-400 mr-1" />
                    <span className="text-white font-semibold">23 people</span> booked in the last 24 hours
                </motion.p>

                {/* Trust Icons Row */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-8 border-t border-white/5">
                    {[
                        { icon: 'ri-shield-check-line', label: 'Secure Payment' },
                        { icon: 'ri-refund-2-line', label: 'Free Cancellation' },
                        { icon: 'ri-customer-service-2-line', label: '24/7 Support' },
                        { icon: 'ri-price-tag-3-line', label: 'Best Price Guarantee' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-500 hover:text-[#f6ac0f] transition-colors group">
                            <i className={`${item.icon} text-lg group-hover:scale-110 transition-transform`} />
                            <span className="text-xs font-medium uppercase tracking-wider">{item.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default CallToActionBanner;
