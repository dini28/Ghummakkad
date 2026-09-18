'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-ink min-h-screen text-text-mid pt-32 pb-24 font-sans">
            <div className="max-w-[840px] mx-auto px-6">
                
                {/* Back navigation */}
                <div className="mb-8">
                    <Link 
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-lo hover:text-gold transition-colors"
                    >
                        <i className="ri-arrow-left-line"></i> Back to Home
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12 border-b border-line pb-8 text-left">
                    <span className="text-gold font-mono text-xs uppercase tracking-[0.2em] block mb-3 font-bold">
                        — Support & Legal
                    </span>
                    <h1 className="text-3xl md:text-5xl font-playfair-display font-bold text-white leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-text-lo text-xs font-mono mt-3">
                        Last Updated: September 2026 · Ghummakkad Travel Pvt Ltd
                    </p>
                </header>

                {/* Content */}
                <div className="space-y-8 text-sm md:text-base leading-relaxed text-text-mid font-sans">
                    <p>
                        At <strong className="text-white">Ghummakkad</strong>, we value your trust and are committed to protecting your personal information. This Privacy Policy details how we collect, store, share, and protect your personal data when you interact with our website and book our heritage travel packages.
                    </p>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            1. Information We Collect
                        </h2>
                        <p className="text-sm">
                            To process your travel arrangements and itineraries, we collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-text-lo text-sm font-sans">
                            <li>Contact details (Full Name, email address, phone / WhatsApp number).</li>
                            <li>Travel preferences (Desired locations, passenger count, travel dates, budget).</li>
                            <li>Payment details (Processed securely via vetted third-party gateways; Ghummakkad never stores raw credit card credentials).</li>
                        </ul>
                    </section>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            2. How We Use Your Data
                        </h2>
                        <p className="text-sm">
                            We use your personal data exclusively to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-text-lo text-sm font-sans">
                            <li>Construct and customize your Rajasthan travel itineraries and palace reservations.</li>
                            <li>Confirm verified hotel bookings, private AC vehicles, and certified local guides.</li>
                            <li>Communicate trip updates, safety advisories, and concierge support while on tour.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            3. Data Security & Third-Party Sharing
                        </h2>
                        <p className="text-sm">
                            We implement industry-standard physical and digital security protocols to shield your information from unauthorized access, modification, or exposure. We do not sell or monetize personal traveler data to any third-party advertisers.
                        </p>
                    </section>
                </div>

            </div>
        </div>
    );
}
