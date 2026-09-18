'use client';

import React, { useState } from 'react';
import Button from './Button';

export default function AuthModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    const toggleAuth = () => setIsLogin(!isLogin);

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-[450px] bg-ink-2 rounded-3xl shadow-2xl overflow-hidden border border-line animate-in fade-in zoom-in duration-300">

                {/* Top Accent Bar */}
                <div className="h-2 bg-gold"></div>

                <div className="p-8 lg:p-10">
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-6 right-6 text-text-lo hover:text-gold transition-colors cursor-pointer"
                        aria-label="Close auth dialog"
                    >
                        <i className="ri-close-line text-2xl"></i>
                    </button>

                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair-display mb-2">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-text-lo text-xs font-sans">
                            {isLogin
                                ? 'Glad to see you again! Please log in.'
                                : 'Join the Ghummakkad community today.'
                            }
                        </p>
                    </div>

                    {/* Forms */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase font-mono tracking-wider text-text-lo ml-1">Full Name</label>
                                <div className="relative">
                                    <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-text-lo"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full pl-12 pr-4 py-3 bg-ink border border-line rounded-xl focus:outline-none focus:border-gold text-xs text-text-hi font-sans transition-all"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase font-mono tracking-wider text-text-lo ml-1">Email Address</label>
                            <div className="relative">
                                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-text-lo"></i>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-3 bg-ink border border-line rounded-xl focus:outline-none focus:border-gold text-xs text-text-hi font-sans transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase font-mono tracking-wider text-text-lo ml-1">Password</label>
                            <div className="relative">
                                <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-text-lo"></i>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-3 bg-ink border border-line rounded-xl focus:outline-none focus:border-gold text-xs text-text-hi font-sans transition-all"
                                />
                            </div>
                        </div>

                        {isLogin && (
                            <div className="text-right">
                                <button type="button" className="text-xs font-mono font-bold text-gold hover:underline">
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                        >
                            {isLogin ? 'Sign In Now' : 'Sign Up Free'}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="my-8 flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-line"></div>
                        <span className="text-[10px] font-bold font-mono text-text-lo uppercase tracking-widest">Or Continue With</span>
                        <div className="h-[1px] flex-1 bg-line"></div>
                    </div>

                    {/* Social Logins */}
                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="flex items-center justify-center gap-2 py-3 bg-ink border border-line rounded-xl hover:border-gold/50 transition-colors font-mono font-bold text-text-hi text-xs cursor-pointer">
                            <i className="ri-google-fill text-lg text-red-500"></i>
                            Google
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 py-3 bg-ink border border-line rounded-xl hover:border-gold/50 transition-colors font-mono font-bold text-text-hi text-xs cursor-pointer">
                            <i className="ri-facebook-box-fill text-lg text-blue-500"></i>
                            Facebook
                        </button>
                    </div>

                    {/* Footer Toggle */}
                    <p className="mt-8 text-center text-xs text-text-lo font-sans">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button
                            type="button"
                            onClick={toggleAuth}
                            className="font-bold text-gold hover:underline font-mono uppercase tracking-wider ml-1 cursor-pointer"
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
