'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsConditionsPage() {
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
                        Terms & Conditions
                    </h1>
                    <p className="text-text-lo text-xs font-mono mt-3">
                        Last Updated: September 2026 · Ghummakkad Travel Pvt Ltd
                    </p>
                </header>

                {/* Content */}
                <div className="space-y-8 text-sm md:text-base leading-relaxed text-text-mid font-sans">
                    <p>
                        Welcome to <strong className="text-white">Ghummakkad</strong>. By accessing our website, inquiring about travel packages, or confirming bookings with us, you agree to comply with and be bound by the following Terms and Conditions of service.
                    </p>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            1. Booking Confirmation & Payments
                        </h2>
                        <p className="text-sm">
                            All custom tour itineraries require an advance deposit to secure palace accommodations, desert tents, and private chauffeur vehicle slots. The balance amount must be cleared according to the schedule specified on your finalized quotation invoice prior to tour commencement.
                        </p>
                    </section>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            2. Itinerary Customization & Changes
                        </h2>
                        <p className="text-sm">
                            Itineraries can be freely tailored prior to departure. Any modifications requested while in active transit are subject to regional room availability and may incur difference costs based on individual third-party provider rates (hotels, desert camps, transport).
                        </p>
                    </section>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            3. Comfort, Safety & Liability
                        </h2>
                        <p className="text-sm">
                            Ghummakkad inspects and vets all partner properties, vehicles, and certified guides to ensure maximum security and high hospitality standards. However, Ghummakkad acts as a trip curator and coordinator, and cannot be held liable for force majeure events including unexpected road closures, extreme weather conditions, or local government decrees.
                        </p>
                    </section>
                </div>

            </div>
        </div>
    );
}
