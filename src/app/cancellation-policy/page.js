'use client';

import React from 'react';

export default function CancellationPolicyPage() {
    return (
        <div className="bg-[#05090f] min-h-screen text-slate-300 pt-32 pb-24">
            <div className="max-w-[800px] mx-auto px-6">
                
                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-8 text-left">
                    <span className="text-gold font-mono text-xs uppercase tracking-[0.2em] block mb-3">
                        — Support & Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl font-playfair-display font-bold text-white leading-tight">
                        Cancellation Policy
                    </h1>
                    <p className="text-slate-400 text-xs font-mono mt-3">
                        Last Updated: July 5, 2026
                    </p>
                </header>

                {/* Content */}
                <div className="space-y-8 font-inter text-sm md:text-base leading-relaxed text-slate-300">
                    <p>
                        We understand that travel plans can change unexpectedly. Below is our cancellation policy detailing refund percentages and structures for our private heritage itineraries.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            1. Timeline for Cancellations
                        </h2>
                        <p>
                            Refund percentages are calculated based on the number of days prior to the scheduled tour start date:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-400 text-sm font-mono">
                            <li>30+ Days Prior: 90% Refund of the total trip deposit.</li>
                            <li>15-29 Days Prior: 50% Refund of the total trip deposit.</li>
                            <li>Less than 15 Days: No refund (due to committed bookings with hotels and transport drivers).</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            2. Holiday Bookings (Peak Season)
                        </h2>
                        <p>
                            Cancellations during peak seasons (October 15 to January 15, including Diwali, Christmas, and Pushkar Fair periods) are fully non-refundable due to palace hotels requiring non-refundable deposits during peak months.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            3. Refund Processing
                        </h2>
                        <p>
                            Eligible refunds are processed back to the original payment method within 7-10 business days of cancellation approval.
                        </p>
                    </section>
                </div>

            </div>
        </div>
    );
}
