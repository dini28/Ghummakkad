'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import AuthModal from './AuthModal';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const isActive = (href) => pathname === href;

    return (
        <>
            <header
                className={`fixed z-100 transition-all duration-500 ${scrolled
                    ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] lg:w-[90%] max-w-7xl rounded-full py-3 lg:py-4 bg-white/90 backdrop-blur-md shadow-lg border border-white/20'
                    : 'top-0 left-0 w-full py-4 lg:py-6 bg-white border-b border-transparent'
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-1 lg:gap-3 no-underline group relative z-110">
                        <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                            <Image
                                src="/assets/icons/logo.svg"
                                alt="Ghummakkad Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg lg:text-xl font-bold tracking-tight text-slate-900 font-syne-mono">
                                Ghummakkad
                            </span>
                            <span className="font-cursive text-[0.5rem] lg:text-[0.65rem] tracking-[2px] text-[#f6ac0f] -mt-1 uppercase font-semibold">
                                Book.Travel.Explore.
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        <ul className="flex items-center gap-8 list-none m-0 p-0">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`relative text-xs font-bold uppercase tracking-widest transition-colors py-2 group/link ${isActive(link.href) ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                                            }`}
                                    >
                                        {link.name}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-[#f6ac0f] transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover/link:w-full'
                                            }`}></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="w-px h-6 bg-slate-200 mx-2"></div>

                        <button
                            onClick={() => setIsAuthOpen(true)}
                            className="text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[#f6ac0f] transition-colors flex items-center gap-2 bg-transparent border-none cursor-pointer"
                        >
                            <i className="ri-user-3-line text-lg"></i>
                            Login
                        </button>

                        <Link
                            href="/packages"
                            className="px-8 py-3 bg-[#f6ac0f] text-slate-950 text-xs font-black uppercase tracking-[2px] rounded-full transition-all duration-300 hover:bg-slate-950 hover:text-white hover:shadow-[0_10px_20px_-5px_rgba(246,172,15,0.4)]"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden relative z-110 w-12 h-12 flex flex-col items-center justify-center gap-1.5 text-slate-900 bg-slate-100 rounded-full hover:bg-[#f6ac0f]/10 transition-all border-none cursor-pointer group"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </nav>
            </header>

            {/* Animated Mobile Menu - OUTSIDE Header to fix portal/clipping issues */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-100"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-white z-105 flex flex-col pt-24 pb-8 px-6 sm:px-12 overflow-y-auto"
                        >
                            <div className="flex flex-col h-full">
                                <ul className="list-none p-0 m-0 space-y-2">
                                    {navLinks.map((link, i) => (
                                        <motion.li
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`block py-3 sm:py-5 text-3xl sm:text-4xl font-bold uppercase tracking-widest transition-colors ${isActive(link.href) ? 'text-[#f6ac0f]' : 'text-slate-900 hover:text-[#f6ac0f]'
                                                    }`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-auto space-y-8">
                                    <div className="pt-8 border-t border-slate-100 flex flex-col gap-6">
                                        <button
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setIsAuthOpen(true);
                                            }}
                                            className="flex items-center gap-3 text-lg font-bold text-slate-700 hover:text-[#f6ac0f] bg-transparent border-none"
                                        >
                                            <i className="ri-user-3-line text-2xl"></i>
                                            User Login
                                        </button>

                                        <Link
                                            href="/packages"
                                            className="w-full py-5 bg-slate-950 text-white text-center font-bold uppercase tracking-widest rounded-2xl shadow-xl hover:bg-[#f6ac0f] hover:text-slate-950 transition-all active:scale-95"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Explore Packages
                                        </Link>
                                    </div>

                                    <div className="flex items-center gap-5 pt-4">
                                        <a href="#" className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#f6ac0f]/10 hover:text-[#f6ac0f] transition-all">
                                            <i className="ri-instagram-line text-xl"></i>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#f6ac0f]/10 hover:text-[#f6ac0f] transition-all">
                                            <i className="ri-facebook-fill text-xl"></i>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#f6ac0f]/10 hover:text-[#f6ac0f] transition-all">
                                            <i className="ri-whatsapp-line text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Auth Modal Popup */}
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </>
    );
}
