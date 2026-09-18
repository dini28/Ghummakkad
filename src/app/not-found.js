'use client';

import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-ink px-6 py-24 relative overflow-hidden font-sans">
            {/* Ambient Gold Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Large 404 Text */}
                <h1 className="text-[10rem] md:text-[14rem] font-bold text-white/5 leading-none select-none font-mono tracking-widest">
                    404
                </h1>

                <div className="-mt-16 md:-mt-24 space-y-6">
                    <span className="text-gold font-mono text-xs font-bold uppercase tracking-[0.2em] block">
                        — Page Not Found
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-playfair-display tracking-tight">
                        Lost in the <span className="text-gold italic">Thar Desert?</span>
                    </h2>
                    <p className="text-text-lo text-sm md:text-base max-w-md mx-auto leading-relaxed font-sans">
                        Even seasoned explorers encounter an uncharted dune. The royal pathway you are looking for has shifted.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <Button
                            href="/"
                            variant="primary"
                            size="md"
                            icon="ri-home-4-line"
                            iconPosition="left"
                        >
                            Return to Oasis
                        </Button>
                        <Button
                            href="/contact"
                            variant="secondary"
                            size="md"
                            icon="ri-customer-service-2-line"
                            iconPosition="left"
                        >
                            Contact Concierge
                        </Button>
                    </div>
                </div>
            </div>

            {/* Branded Footprint */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-text-lo/40 text-[10px] font-bold uppercase tracking-[0.2em] font-mono select-none">
                    Ghummakkad Heritage Travel · Rajasthan, India
                </span>
            </div>
        </div>
    );
}
