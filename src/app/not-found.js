'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#05090f] px-6 py-24 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f6ac0f]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Large 404 Text */}
                <h1 className="text-[12rem] md:text-[16rem] font-black text-white/5 leading-none select-none font-syne-mono">
                    404
                </h1>

                <div className="-mt-20 md:-mt-32 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white font-playfair-display italic tracking-tight">
                            Lost in the <span className="text-[#f6ac0f]">Desert?</span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
                            Even the best explorers take a wrong turn sometimes. The oasis you&apos;re looking for isn&apos;t here.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-[#f6ac0f] text-slate-900 font-bold rounded-2xl shadow-lg shadow-[#f6ac0f]/20 hover:shadow-xl hover:shadow-[#f6ac0f]/30 hover:-translate-y-1 transition-all duration-300 no-underline"
                        >
                            Return Home
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 no-underline"
                        >
                            Report Issue
                        </Link>
                    </div>
                </div>
            </div>

            {/* Branded Watermark */}
            <div className="absolute bottom-12 left-0 right-0 text-center">
                <span className="text-slate-800 text-xs font-black uppercase tracking-[5px] select-none">
                    Ghummakkad Discovery 1.0
                </span>
            </div>
        </div>
    );
}
