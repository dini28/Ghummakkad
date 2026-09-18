'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import TrustSection from '@/components/TrustSection';

export default function AboutPage() {
    return (
        <div className="bg-ink min-h-screen text-text-mid font-sans pb-24">
            
            {/* Systematic Hero Section */}
            <div className="w-full bg-cream pt-24 pb-6 px-4 md:px-8">
                <section className="relative h-[40vh] md:h-[48vh] w-full rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/images/about_hero.png"
                            alt="Royal Caravan in Desert"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/85" />
                    </div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                        <span className="text-gold font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4">
                            — Our Journey & Heritage
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair-display text-white mb-4 leading-tight uppercase tracking-tight">
                            Crafting Timeless Travel Stories
                        </h1>
                        <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-light font-sans leading-relaxed">
                            We don&apos;t just show you Rajasthan; we invite you to live its legacy, breathe its history, and become part of its royal tale.
                        </p>
                    </div>
                </section>
            </div>

            {/* Our Story Section */}
            <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        {/* Image with decorative border */}
                        <div className="relative rounded-3xl overflow-hidden border border-line p-2 bg-ink-2">
                            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/assets/images/our_story.png"
                                    alt="Intricate Architecture in Rajasthan"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        {/* Ambient Gold Glow */}
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block mb-2">Authentic Rajputana</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-playfair-display text-white leading-tight">
                                Where Tradition <br /> Meets <span className="text-gold italic">Wanderlust</span>
                            </h2>
                            <div className="h-1 w-16 bg-gold rounded-full mt-4"></div>
                        </div>

                        <p className="leading-relaxed text-sm md:text-base text-text-mid font-sans">
                            <strong className="text-white">Ghummakkad</strong> was born from a simple yet profound realization: travel is not simply arriving at a landmark, but the stories you gather along the way.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base text-text-mid font-sans">
                            Deeply rooted in the soil of Rajasthan, we started as a small circle of heritage enthusiasts passionate about sharing the unseen side of this majestic land. From the hidden alleyways of Jodhpur to the silent dunes of Jaisalmer, we curated experiences that go beyond the guidebooks.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base text-text-mid font-sans">
                            Today, we are proud to be Rajasthan’s most trusted bespoke travel companion, bridging the gap between the modern traveler and the ancient soul of Rajputana.
                        </p>

                        <div className="pt-4 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-gold font-mono">10k+</span>
                                <span className="text-[11px] text-text-lo uppercase font-mono tracking-wider mt-1">Happy Travelers</span>
                            </div>
                            <div className="w-[1px] h-12 bg-line"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-gold font-mono">50+</span>
                                <span className="text-[11px] text-text-lo uppercase font-mono tracking-wider mt-1">Curated Itineraries</span>
                            </div>
                            <div className="w-[1px] h-12 bg-line"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-gold font-mono">100%</span>
                                <span className="text-[11px] text-text-lo uppercase font-mono tracking-wider mt-1">Private & Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / Why Us */}
            <section className="py-20 bg-ink-2 border-y border-line relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-[1200px] mx-auto px-6 text-center mb-16 relative z-10">
                    <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block mb-2">Our Commitments</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair-display text-white">The Ghummakkad Difference</h2>
                    <p className="text-text-lo text-sm max-w-lg mx-auto mt-2 font-sans">Every element of our journeys is governed by five foundational pillars of hospitality.</p>
                </div>

                <TrustSection />
            </section>

            {/* Call to Action */}
            <section className="py-24 text-center px-6 max-w-3xl mx-auto space-y-6">
                <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block">Begin Your Adventure</span>
                <h2 className="text-3xl md:text-5xl font-bold font-playfair-display text-white leading-tight">
                    Ready to start your <span className="italic text-gold">royal journey?</span>
                </h2>
                <p className="text-sm md:text-base text-text-lo font-sans leading-relaxed">
                    Let our local curators craft a personalized itinerary just for you. No stress, fully private, unforgettable memories.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <Button 
                        href="/contact"
                        variant="primary"
                        size="lg"
                        icon="ri-compass-3-line"
                        iconPosition="left"
                    >
                        Plan My Royal Trip
                    </Button>
                    <Button 
                        href="/packages"
                        variant="ghost"
                        size="lg"
                        icon="ri-arrow-right-up-line"
                        iconPosition="right"
                    >
                        Browse All Packages
                    </Button>
                </div>
            </section>
        </div>
    );
}
