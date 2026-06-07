'use client';

import React from 'react';
import Image from 'next/image';
import TrustSection from '@/components/TrustSection';

export default function AboutPage() {
    return (
        <div className="bg-[#05090f] min-h-screen text-slate-300">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/about_hero.png"
                        alt="Royal Caravan in Desert"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#05090f]/30 via-transparent to-[#05090f]" />
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <p className="text-[#f6ac0f] font-cursive text-xl md:text-2xl mb-4 tracking-widest">Our Journey</p>
                    <h1 className="text-5xl md:text-7xl font-bold font-playfair-display text-white mb-6 leading-tight">
                        Crafting Timeless <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f6ac0f] to-amber-600">Travel Stories</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light">
                        We don&apos;t just show you Rajasthan; we invite you to live its legacy, breathe its history, and become part of its royal tale.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group perspective-1000">
                        {/* Image with decorative border */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 p-2 bg-white/5 transform transition-transform duration-700 group-hover:rotate-1">
                            <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
                                <Image
                                    src="/assets/images/our_story.png"
                                    alt="Intricate Architecture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Blob/Glow effect behind */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f6ac0f]/20 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold font-playfair-display text-white mb-6">
                                Where Tradition <br /> Meets <span className="text-[#f6ac0f]">Wanderlust</span>
                            </h2>
                            <div className="h-1 w-20 bg-[#f6ac0f] rounded-full mb-8"></div>
                        </div>

                        <p className="leading-relaxed text-lg">
                            <strong className="text-white">Ghummakkad</strong> was born from a simple yet profound realization: travel is not about the destination to reach, but the stories you gather along the way.
                        </p>
                        <p className="leading-relaxed text-lg">
                            Deeply rooted in the soil of Rajasthan, we started as a small team of heritage enthusiasts passionate about sharing the unseen side of this majestic land. From the hidden alleyways of Jodhpur to the silent dunes of Jaisalmer, we curated experiences that go beyond the guidebooks.
                        </p>
                        <p className="leading-relaxed text-lg">
                            Today, we are proud to be Rajasthan’s most trusted travel companion, bridging the gap between the modern traveler and the ancient soul of India.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-6">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white font-outfit">10k+</span>
                                <span className="text-sm text-slate-400 uppercase tracking-wider">Happy Travelers</span>
                            </div>
                            <div className="w-[1px] h-12 bg-white/10"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white font-outfit">50+</span>
                                <span className="text-sm text-slate-400 uppercase tracking-wider">Curated Tours</span>
                            </div>
                            <div className="w-[1px] h-12 bg-white/10"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white font-outfit">100%</span>
                                <span className="text-sm text-slate-400 uppercase tracking-wider">Authentic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / Why Us */}
            <section className="py-20 bg-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f6ac0f]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
                    <p className="text-[#f6ac0f] font-cursive tracking-widest text-lg mb-2">Our Core Values</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair-display text-white">Why We Are Different</h2>
                </div>

                <TrustSection />
            </section>

            {/* Call to Action */}
            <section className="py-24 text-center px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-playfair-display text-white">
                        Ready to start your <span className="italic text-[#f6ac0f]">royal journey?</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Let us craft a personalized itinerary just for you. No stress, just memories.
                    </p>
                    <button className="px-8 py-4 bg-[#f6ac0f] hover:bg-white text-black font-bold uppercase tracking-widest rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#f6ac0f]/20">
                        Plan My Trip
                    </button>
                </div>
            </section>
        </div>
    );
}
