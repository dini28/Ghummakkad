'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const drawerRef = useRef(null);
    const triggerRef = useRef(null);

    // Track scrolling to transition the header background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle body scroll locking and keyboard trap when mobile drawer is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            
            // Focus trap and escape key handler
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    setIsMobileMenuOpen(false);
                    triggerRef.current?.focus();
                }
                
                if (e.key === 'Tab' && drawerRef.current) {
                    const focusableElements = drawerRef.current.querySelectorAll(
                        'a[href], button:not([disabled]), [tabindex="0"]'
                    );
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    const isActive = (href) => {
        if (href.startsWith('#')) return false;
        return pathname === href;
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-ink/90 backdrop-blur-md border-b border-line shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3' 
                        : 'bg-transparent border-b border-transparent py-5'
                }`}
            >
                <nav aria-label="Primary" className="max-w-[1200px] mx-auto px-[clamp(1rem,5vw,2rem)] flex items-center justify-between">
                    
                    {/* Logo Lockup */}
                    <Link 
                        href="/" 
                        className="flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-lg"
                    >
                        {/* Wordmark */}
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-wider text-text-hi font-playfair-display leading-none">
                                Ghummakkad
                            </span>
                            <span className="text-[8px] tracking-[0.18em] text-gold uppercase font-bold font-mono mt-1.5 leading-none">
                                BOOK. TRAVEL. EXPLORE.
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden lg:flex items-center gap-8 list-none p-0 m-0">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    aria-current={isActive(link.href) ? 'page' : undefined}
                                    className={`relative text-xs font-bold uppercase tracking-widest font-mono transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded px-1 ${
                                        isActive(link.href) ? 'text-gold' : 'text-text-mid hover:text-text-hi'
                                    }`}
                                >
                                    {link.name}
                                    {isActive(link.href) && (
                                        <motion.span 
                                            layoutId="activeUnderline" 
                                            className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right side CTAs */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link 
                            href="#login" 
                            className="text-xs font-bold uppercase tracking-widest text-text-mid hover:text-text-hi transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded py-1 px-2"
                        >
                            <i className="ri-user-3-line text-base"></i>
                            Login
                        </Link>
                        
                        <Button href="#packages" variant="primary" className="min-h-[40px] px-6 text-xs">
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        ref={triggerRef}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation-drawer"
                        aria-label="Toggle Navigation Menu"
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-text-hi hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full"
                    >
                        <span className={`w-5 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                </nav>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-[#000000]/80 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* Drawer content */}
                        <motion.div
                            id="mobile-navigation-drawer"
                            ref={drawerRef}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile Navigation"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-[400px] bg-ink border-l border-line z-50 p-8 flex flex-col lg:hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    triggerRef.current?.focus();
                                }}
                                aria-label="Close menu"
                                className="self-end w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-hi hover:text-gold hover:border-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            >
                                <i className="ri-close-line text-xl"></i>
                            </button>

                            {/* Nav Links */}
                            <nav className="mt-12 flex-grow">
                                <ul className="list-none p-0 m-0 space-y-6">
                                    {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block text-2xl font-bold uppercase tracking-widest text-text-hi hover:text-gold transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* CTA Action Buttons at bottom of drawer */}
                            <div className="pt-8 border-t border-line space-y-4">
                                <Link 
                                    href="#login" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-4 text-sm font-bold uppercase tracking-widest text-text-hi hover:text-gold transition-colors border border-white/10 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                                >
                                    <i className="ri-user-3-line text-lg"></i>
                                    Login
                                </Link>

                                <Button 
                                    href="#packages" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full text-center"
                                >
                                    Book Now
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
