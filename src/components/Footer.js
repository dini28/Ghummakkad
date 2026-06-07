'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerData = {
    brand: {
        name: 'Ghummakkad',
        tagline: 'Book.Travel.Explore.',
        description: 'Crafting unforgettable stories across the golden sands of Rajasthan. Discover the royal heritage, vibrant culture, and timeless beauty of the desert kingdom.',
        logo: '/assets/icons/logo.svg'
    },
    socials: [
        { name: 'Instagram', href: '#', icon: 'ri-instagram-line' },
        { name: 'Facebook', href: '#', icon: 'ri-facebook-fill' },
        { name: 'Twitter', href: '#', icon: 'ri-twitter-x-line' },
        { name: 'YouTube', href: '#', icon: 'ri-youtube-fill' },
    ],
    quickLinks: [
        { name: 'Heritage Palaces', href: '/hotels' },
        { name: 'Desert Safaris', href: '/packages' },
        { name: 'Cultural Tours', href: '/packages' },
        { name: 'Luxury Stays', href: '/hotels' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Stories', href: '#' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '#' },
    ],
    contact: [
        { name: '123, MI Road, Jaipur, Rajasthan, India', icon: 'ri-map-pin-line' },
        { name: '+91 888 222 1111', icon: 'ri-phone-line' },
        { name: 'hello@ghummakkad.com', icon: 'ri-mail-line' }
    ]
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#020617] text-slate-300 overflow-hidden border-t border-white/5 pt-20 pb-10">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-150 h-150 bg-[#f6ac0f]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/5 blur-[130px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 mb-16">

                    {/* Brand Column (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-3 no-underline group mb-6">
                            <div className="relative w-12 h-12 p-2 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#f6ac0f]/50 transition-all duration-500">
                                <Image
                                    src={footerData.brand.logo}
                                    alt="Ghummakkad Logo"
                                    fill
                                    className="object-contain p-1.5"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tight text-white font-syne-mono">
                                    {footerData.brand.name}
                                </span>
                                <span className="font-cursive text-xs tracking-[2px] text-[#f6ac0f] uppercase font-semibold">
                                    {footerData.brand.tagline}
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm leading-relaxed text-slate-400 mb-8 max-w-sm">
                            {footerData.brand.description}
                        </p>

                        <div className="flex items-center gap-3">
                            {footerData.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-[#f6ac0f]/40 hover:bg-[#f6ac0f] hover:text-black transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <i className={`${social.icon} text-lg transition-transform group-hover:scale-110`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            {footerData.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-[#f6ac0f] transition-colors flex items-center gap-2 group">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerData.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-400 hover:text-[#f6ac0f] transition-colors flex items-center gap-2 group">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            {footerData.contact.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 text-sm text-slate-400 group">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#f6ac0f]/40 group-hover:text-[#f6ac0f] transition-all shrink-0">
                                        <i className={`${item.icon} text-base`}></i>
                                    </div>
                                    <span className="mt-1.5 leading-relaxed">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter Row */}
                <div className="mb-16">
                    <div className="bg-white/3 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f6ac0f]/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-[#f6ac0f]/15 transition-all duration-700" />

                        <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2 font-syne-mono">
                                    Join Our Newsletter
                                </h4>
                                <p className="text-slate-400 max-w-md">
                                    Get exclusive travel deals, stories from the desert, and hidden gems of Rajasthan delivered directly to your inbox.
                                </p>
                            </div>

                            <form className="relative w-full max-w-md ml-auto" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#f6ac0f]/50 focus:bg-black/50 transition-all pr-14"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 bottom-2 aspect-square bg-[#f6ac0f] text-slate-950 rounded-lg flex items-center justify-center hover:bg-[#ffb92e] transition-colors font-bold"
                                    aria-label="Subscribe"
                                >
                                    <i className="ri-arrow-right-line text-xl"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                            © {currentYear} Ghummakkad
                        </span>
                        <div className="hidden sm:block w-px h-3 bg-white/10" />
                        <span className="text-[10px] font-medium uppercase tracking-[2px] text-slate-600">
                            Made with pride in Rajasthan
                        </span>
                    </div>

                    <div className="flex items-center gap-6 grayscale opacity-50">
                        <div className="flex items-center gap-2">
                            <i className="ri-shield-check-line text-[#f6ac0f]"></i>
                            <span className="text-[10px] font-bold uppercase tracking-wider">100% Secure</span>
                        </div>
                        <div className="h-4 w-px bg-white/10"></div>
                        <div className="flex gap-3 text-xl">
                            <i className="ri-visa-fill"></i>
                            <i className="ri-mastercard-fill"></i>
                            <i className="ri-paypal-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
