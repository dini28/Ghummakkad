'use client';

import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#05090f] min-h-screen text-slate-300 pt-32 pb-24">
            <div className="max-w-[800px] mx-auto px-6">
                
                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-8 text-left">
                    <span className="text-gold font-mono text-xs uppercase tracking-[0.2em] block mb-3">
                        — Support & Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl font-playfair-display font-bold text-white leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-400 text-xs font-mono mt-3">
                        Last Updated: July 5, 2026
                    </p>
                </header>

                {/* Content */}
                <div className="space-y-8 font-inter text-sm md:text-base leading-relaxed text-slate-300">
                    <p>
                        At <strong>Ghummakkad</strong>, we value your trust and are committed to protecting your personal information. This Privacy Policy details how we collect, store, share, and protect your personal data when you interact with our website and book our heritage travel packages.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            1. Information We Collect
                        </h2>
                        <p>
                            To process your travel arrangements and itineraries, we collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-400 text-sm">
                            <li>Contact details (Name, email address, phone number).</li>
                            <li>Travel preferences (Desired locations, passenger count, budget).</li>
                            <li>Payment information (Processed securely via vetted third-party gateways).</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            2. How We Use Your Data
                        </h2>
                        <p>
                            We use your personal data to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-400 text-sm">
                            <li>Construct and customize your Rajasthan travel itineraries.</li>
                            <li>Confirm hotel bookings, private cars, and expert local guides.</li>
                            <li>Communicate itinerary changes, support inquiries, and booking status.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            3. Data Security
                        </h2>
                        <p>
                            We implement industry-standard physical and digital security protocols to shield your information from unauthorized access, modification, or exposure. Payment tokens are encrypted and managed directly by our payment processor partners.
                        </p>
                    </section>
                </div>

            </div>
        </div>
    );
}
