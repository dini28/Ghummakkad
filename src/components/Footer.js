'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const footerLinks = {
    explore: [
        { name: 'Destinations', href: '/packages' },
        { name: 'Experiences', href: '/packages' },
        { name: 'Packages', href: '/packages' },
        { name: 'Hotels & Stays', href: '/hotels' },
        { name: 'Contact', href: '/contact' }
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Careers', href: '#' },
        { name: 'Partner With Us', href: '#' }
    ],
    support: [
        { name: 'FAQs', href: '/#faq' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
        { name: 'Cancellation Policy', href: '/cancellation-policy' }
    ],
    socials: [
        { name: 'Instagram', href: 'https://instagram.com', icon: 'ri-instagram-line' },
        { name: 'Facebook', href: 'https://facebook.com', icon: 'ri-facebook-fill' },
        { name: 'X (Twitter)', href: 'https://x.com', icon: 'ri-twitter-x-line' },
        { name: 'YouTube', href: 'https://youtube.com', icon: 'ri-youtube-fill' }
    ]
};

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubscribe = (e) => {
        e.preventDefault();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            });
            return;
        }

        setStatus({
            type: 'success',
            message: "Thanks — you're subscribed!"
        });
        setEmail('');
    };

    return (
        <footer className="bg-ink text-text-mid border-t border-line pt-20 pb-10 relative z-10 overflow-hidden" aria-label="Site Footer">
            {/* Subtle Gold Ambient Glow */}
            <div 
                aria-hidden="true"
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" 
            />

            <div className="max-w-[1200px] mx-auto px-[clamp(1rem,5vw,2rem)]">
                
                {/* Top Block: 5-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Link 
                            href="/" 
                            className="flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg mb-6"
                        >
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-wider text-text-hi font-playfair-display leading-none">
                                    Ghummakkad
                                </span>
                                <span className="text-[9px] tracking-[0.18em] text-gold uppercase font-bold font-mono mt-1.5 leading-none">
                                    BOOK. TRAVEL. EXPLORE.
                                </span>
                            </div>
                        </Link>

                        <p className="text-text-lo text-sm leading-relaxed mb-8 max-w-sm font-inter">
                            Crafting premium private journeys across Rajasthan — centuries-old royalty, luxury heritage stays, and authentic desert safaris.
                        </p>

                        {/* Social Links Row */}
                        <div className="flex items-center gap-3" aria-label="Social Media Links">
                            {footerLinks.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-ink-2 border border-line text-text-mid hover:border-gold hover:text-gold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                                    aria-label={`Ghummakkad on ${social.name}`}
                                >
                                    <i className={`${social.icon} text-lg`} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore Column */}
                    <nav className="lg:col-span-2" aria-label="Footer Explore Links">
                        <h3 className="text-text-hi text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                            Explore
                        </h3>
                        <ul className="space-y-3.5 list-none p-0 m-0">
                            {footerLinks.explore.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className="text-sm text-text-lo hover:text-gold transition-colors font-inter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Company Column */}
                    <nav className="lg:col-span-2" aria-label="Footer Company Links">
                        <h3 className="text-text-hi text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                            Company
                        </h3>
                        <ul className="space-y-3.5 list-none p-0 m-0">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className="text-sm text-text-lo hover:text-gold transition-colors font-inter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Support Column */}
                    <nav className="lg:col-span-2" aria-label="Footer Support Links">
                        <h3 className="text-text-hi text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                            Support
                        </h3>
                        <ul className="space-y-3.5 list-none p-0 m-0">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className="text-sm text-text-lo hover:text-gold transition-colors font-inter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact Us Column */}
                    <div className="lg:col-span-2 flex flex-col items-start">
                        <h3 className="text-text-hi text-xs font-bold uppercase tracking-widest mb-6 font-mono">
                            Contact Us
                        </h3>
                        <address className="not-italic space-y-4 text-sm text-text-lo font-inter">
                            <div className="flex gap-3">
                                <i className="ri-map-pin-line text-gold text-base shrink-0 mt-0.5" aria-hidden="true"></i>
                                <span>123, MI Road, Jaipur, Rajasthan, India</span>
                            </div>
                            
                            <a 
                                href="tel:+918882221111" 
                                className="flex gap-3 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
                                aria-label="Call Ghummakkad customer support"
                            >
                                <i className="ri-phone-line text-gold text-base shrink-0 mt-0.5" aria-hidden="true"></i>
                                <span>+91 888 222 1111</span>
                            </a>
                            
                            <a 
                                href="mailto:hello@ghummakkad.com" 
                                className="flex gap-3 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
                                aria-label="Email Ghummakkad support"
                            >
                                <i className="ri-mail-line text-gold text-base shrink-0 mt-0.5" aria-hidden="true"></i>
                                <span>hello@ghummakkad.com</span>
                            </a>
                        </address>
                    </div>

                </div>

                {/* Newsletter Box Block */}
                <div className="border-t border-line pt-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-1.5 max-w-md w-full text-center lg:text-left">
                        <h3 className="text-xl font-bold text-text-hi font-playfair-display">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-text-lo text-xs font-inter leading-relaxed">
                            Receive updates on exclusive heritage itineraries and desert festival experiences.
                        </p>
                    </div>

                    <div className="w-full max-w-md flex flex-col gap-2">
                        <form className="relative flex w-full" onSubmit={handleSubscribe}>
                            <label htmlFor="newsletter-email" className="sr-only">
                                Email Address
                            </label>
                            
                            <input
                                id="newsletter-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full bg-ink-2 border border-line rounded-full px-6 py-3.5 text-xs text-text-hi placeholder:text-text-lo focus:outline-none focus:border-gold transition-all pr-32 focus-visible:ring-2 focus-visible:ring-gold font-mono"
                            />
                            
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 bg-gold text-ink px-6 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors text-xs font-bold uppercase tracking-widest font-mono cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Subscribe
                            </button>
                        </form>

                        {/* Aria-Live status message */}
                        <div 
                            aria-live="polite" 
                            className={`text-xs font-semibold px-2 transition-opacity duration-300 ${
                                status.type === 'success' ? 'text-green-400' : 'text-red-400'
                            }`}
                        >
                            {status.message}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Credit links */}
                <div className="pt-8 mt-12 border-t border-line flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-lo font-inter">
                    <span>© {currentYear} Ghummakkad. All rights reserved.</span>
                    <span className="uppercase tracking-[0.18em] text-[10px] text-text-lo/80 font-bold font-mono">
                        Made with pride in Rajasthan, India
                    </span>
                </div>

            </div>
        </footer>
    );
}
