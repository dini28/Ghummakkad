"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        title: "Heritage Living",
        desc: "Stay in 300-year-old palaces that whisper legends of royalty and valor. Experience the grandeur of Rajasthan's architectural marvels first-hand.",
        img: "/assets/images/card_1.webp",
        facts: [
            { icon: "ri-ancient-gate-line", label: "Age", value: "300+ Years" },
            { icon: "ri-hotel-line", label: "Type", value: "Palace Stay" },
            { icon: "ri-map-pin-2-line", label: "City", value: "Udaipur" }
        ]
    },
    {
        id: 2,
        title: "Desert Safaris",
        desc: "Witness the golden sunset over the Sam Sand Dunes on a majestic camel ride. A true Jaisalmer experience that stays with you forever.",
        img: "/assets/images/card_2.webp",
        facts: [
            { icon: "ri-sun-cloudy-line", label: "Best Time", value: "Sunset" },
            { icon: "ri-car-fill", label: "Mode", value: "Camel / 4x4" },
            { icon: "ri-map-pin-2-line", label: "City", value: "Jaisalmer" }
        ]
    },
    {
        id: 3,
        title: "Royal Cuisine",
        desc: "Indulge in authentic Dal Baati Churma cooked with centuries-old traditions. Taste the flavors that defined a kingdom's culinary heritage.",
        img: "/assets/images/card_3.webp",
        facts: [
            { icon: "ri-restaurant-2-line", label: "Cuisine", value: "Marwari" },
            { icon: "ri-fire-line", label: "Method", value: "Clay Oven" },
            { icon: "ri-map-pin-2-line", label: "City", value: "Jaipur" }
        ]
    }
];

const StickyScroll = () => {
    return (
        <section className="py-24 bg-slate-950 overflow-hidden" id="experiences">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <p className="text-[#f6ac0f] font-cursive text-2xl mb-4 tracking-widest">The Rajasthan Experience</p>
                    <h2 className="text-4xl md:text-6xl font-playfair-display font-bold text-white mb-6">
                        Unforgettable Journeys
                    </h2>
                    <div className="w-24 h-1 bg-[#f6ac0f] mx-auto opacity-50 rounded-full" />
                </motion.div>

                <div className="space-y-40 md:space-y-64">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative flex flex-col lg:flex-row items-center justify-center">
                            {/* Image from Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -150, rotate: -5 }}
                                whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, type: "spring", damping: 20 }}
                                className="relative w-full lg:w-[55%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 lg:-mr-16 group"
                            >
                                <Image
                                    src={exp.img}
                                    alt={exp.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                            </motion.div>

                            {/* Card from Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 150, rotate: 5 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, type: "spring", damping: 20, delay: 0.1 }}
                                className="relative w-full lg:w-[50%] bg-slate-900/90 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 mt-8 lg:mt-0"
                            >
                                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#f6ac0f]/10 rounded-full blur-3xl" />

                                <h3 className="text-3xl md:text-5xl font-playfair-display font-bold text-white mb-6">
                                    {exp.title}
                                </h3>
                                <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 font-outfit opacity-80">
                                    {exp.desc}
                                </p>

                                {/* CTA Button */}
                                <Link
                                    href="/packages"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#f6ac0f] text-slate-900 font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(246,172,15,0.3)] mb-8"
                                >
                                    <span>Explore</span>
                                    <i className="ri-arrow-right-line" />
                                </Link>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
                                    {exp.facts.map((fact, i) => (
                                        <div key={i} className="flex flex-col gap-2 group/fact">
                                            <div className="flex items-center gap-2 text-[#f6ac0f]">
                                                <i className={`${fact.icon} text-xl transition-transform group-hover/fact:scale-125`} />
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
                                                    {fact.label}
                                                </span>
                                            </div>
                                            <span className="text-white font-medium text-lg">
                                                {fact.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StickyScroll;
