'use client';

import { useState } from 'react';

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
            <div className="relative w-full max-w-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-300">

                {/* Top Accent Bar */}
                <div className="h-2 bg-[#f6ac0f]"></div>

                <div className="p-8 lg:p-10">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
                    >
                        <i className="ri-close-line text-2xl"></i>
                    </button>

                    {/* Header */}
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 font-syne-mono mb-2">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-slate-500 text-sm">
                            {isLogin
                                ? 'Glad to see you again! Please log in.'
                                : 'Join the Ghummakkad community today.'
                            }
                        </p>
                    </div>

                    {/* Forms */}
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                                <div className="relative">
                                    <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#f6ac0f] focus:ring-1 focus:ring-[#f6ac0f] transition-all"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address</label>
                            <div className="relative">
                                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#f6ac0f] focus:ring-1 focus:ring-[#f6ac0f] transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Password</label>
                            <div className="relative">
                                <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#f6ac0f] focus:ring-1 focus:ring-[#f6ac0f] transition-all"
                                />
                            </div>
                        </div>

                        {isLogin && (
                            <div className="text-right">
                                <button className="text-sm font-semibold text-[#f6ac0f] hover:underline">
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <button className="w-full py-4 bg-[#f6ac0f] text-slate-900 font-bold rounded-2xl shadow-lg shadow-[#f6ac0f]/20 hover:shadow-xl hover:shadow-[#f6ac0f]/30 hover:-translate-y-0.5 transition-all duration-300">
                            {isLogin ? 'Sign In Now' : 'Sign Up Free'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-8 flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-slate-100"></div>
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Or Continue With</span>
                        <div className="h-[1px] flex-1 bg-slate-100"></div>
                    </div>

                    {/* Social Logins */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-600 text-sm">
                            <i className="ri-google-fill text-xl text-red-500"></i>
                            Google
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-600 text-sm">
                            <i className="ri-facebook-box-fill text-xl text-blue-600"></i>
                            Facebook
                        </button>
                    </div>

                    {/* Footer Toggle */}
                    <p className="mt-10 text-center text-sm text-slate-500">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button
                            onClick={toggleAuth}
                            className="font-bold text-[#f6ac0f] hover:underline"
                        >
                            {isLogin ? 'Sign Up' : 'Log In'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
