'use client';

import React from 'react';
import Link from 'next/link';

export default function CancellationPolicyPage() {
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
                        Cancellation & Refund Policy
                    </h1>
                    <p className="text-text-lo text-xs font-mono mt-3">
                        Last Updated: September 2026 · Ghummakkad Travel Pvt Ltd
                    </p>
                </header>

                {/* Content */}
                <div className="space-y-8 text-sm md:text-base leading-relaxed text-text-mid font-sans">
                    <p>
                        We understand that unforeseen circumstances may require you to reschedule or cancel your plans. Below is our transparent cancellation schedule and refund protocol for private heritage tours.
                    </p>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            1. Standard Cancellation Timeline
                        </h2>
                        <p className="text-sm">
                            Refund deductions are calculated according to when written notification of cancellation is received prior to the scheduled tour start date:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-text-lo text-sm font-sans">
                            <li><strong className="text-white font-mono">30+ Days Prior:</strong> 90% Refund of the total trip deposit (10% retained for administrative charges).</li>
                            <li><strong className="text-white font-mono">15 to 29 Days Prior:</strong> 50% Refund of the total trip deposit.</li>
                            <li><strong className="text-white font-mono">Less than 15 Days:</strong> Non-refundable due to non-recoverable commitments with boutique heritage havelis and dedicated drivers.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            2. Peak Holiday Seasons
                        </h2>
                        <p className="text-sm">
                            Bookings made for peak travel dates (October 15 to January 15, including Diwali, Pushkar Fair, Christmas, and New Year) are subject to strict non-refundable palace retention policies mandated by royal heritage properties in Rajasthan.
                        </p>
                    </section>

                    <section className="space-y-4 bg-ink-2 p-6 md:p-8 rounded-2xl border border-line">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            3. Processing Timelines
                        </h2>
                        <p className="text-sm">
                            Approved refund requests are credited directly back to the originating bank account or payment method within 7-10 working days of formal cancellation confirmation.
                        </p>
                    </section>
                </div>

            </div>
        </div>
    );
}
