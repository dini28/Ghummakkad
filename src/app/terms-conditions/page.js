'use client';

import React from 'react';

export default function TermsConditionsPage() {
    return (
        <div className="bg-[#05090f] min-h-screen text-slate-300 pt-32 pb-24">
            <div className="max-w-[800px] mx-auto px-6">
                
                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-8 text-left">
                    <span className="text-gold font-mono text-xs uppercase tracking-[0.2em] block mb-3">
                        — Support & Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl font-playfair-display font-bold text-white leading-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-slate-400 text-xs font-mono mt-3">
                        Last Updated: July 5, 2026
                    </p>
                </header>

                {/* Content */}
                <div className="space-y-8 font-inter text-sm md:text-base leading-relaxed text-slate-300">
                    <p>
                        Welcome to <strong>Ghummakkad</strong>. By accessing our website, subscribing to our services, or booking itineraries with us, you agree to comply with and be bound by the following Terms and Conditions of service.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            1. Booking and Payments
                        </h2>
                        <p>
                            All bookings require a partial deposit upfront to confirm hotels, driver slots, and guide availability. The remaining balance must be settled in accordance with the timeline specified on your finalized invoice.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            2. Customization Limits
                        </h2>
                        <p>
                            Itineraries can be customized prior to departure. Any modifications made during active travel are subject to regional availability and may incur extra costs depending on third-party provider rates (hotels, transport).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-playfair-display font-semibold text-white">
                            3. Liability
                        </h2>
                        <p>
                            While we carefully vet all local hotels, cars, and guides for comfort and safety, Ghummakkad acts as a booking coordinator and is not liable for personal injury, property loss, or delays caused by weather, road closures, or governmental restrictions.
                        </p>
                    </section>
                </div>

            </div>
        </div>
    );
}
