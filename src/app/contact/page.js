'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: ''
            });
        }, 1200);
    };

    return (
        <div className="bg-ink min-h-screen text-text-hi font-sans pb-24">
            
            {/* Systematic Hero Section */}
            <div className="w-full bg-cream pt-24 pb-6 px-4 md:px-8">
                <div className="relative h-[38vh] md:h-[42vh] w-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center px-6">
                    <Image
                        src="/assets/images/card_2.webp"
                        alt="Contact Ghummakkad"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/85 z-0" />
                    <div className="relative z-10 max-w-3xl">
                        <span className="text-gold font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                            — Connect With Our Concierge
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair-display text-white uppercase tracking-tight leading-tight">
                            Get In Touch
                        </h1>
                        <p className="text-slate-300 text-xs md:text-sm mt-3 font-sans max-w-xl mx-auto font-light leading-relaxed">
                            Have questions about our itineraries or want to plan a custom Rajasthan tour? Our local travel experts are ready to assist you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left Column: Direct Contact Info */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block">We&apos;re Here to Help</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-playfair-display text-white leading-tight">
                                Plan Your Royal Rajasthan Experience
                            </h2>
                            <p className="text-text-mid text-sm leading-relaxed font-sans">
                                Every journey with Ghummakkad is crafted with authentic heritage insight. Speak directly with our dedicated coordinators in Jaipur to curate your route, select palace rooms, or ask anything about travelling across Rajasthan.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-6 pt-2">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-ink-2 border border-line rounded-xl flex items-center justify-center text-gold text-xl shrink-0">
                                    <i className="ri-map-pin-line"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm font-sans mb-0.5">Heritage Office</h4>
                                    <p className="text-text-lo text-xs font-sans leading-relaxed">123, MI Road, C-Scheme, Jaipur, Rajasthan 302001, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-ink-2 border border-line rounded-xl flex items-center justify-center text-gold text-xl shrink-0">
                                    <i className="ri-mail-line"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm font-sans mb-0.5">Email Concierge</h4>
                                    <a href="mailto:hello@ghummakkad.com" className="text-text-lo text-xs font-sans hover:text-gold block transition-colors">hello@ghummakkad.com</a>
                                    <a href="mailto:support@ghummakkad.com" className="text-text-lo text-xs font-sans hover:text-gold block transition-colors">support@ghummakkad.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-ink-2 border border-line rounded-xl flex items-center justify-center text-gold text-xl shrink-0">
                                    <i className="ri-phone-line"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm font-sans mb-0.5">Direct Line & WhatsApp</h4>
                                    <a href="tel:+918882221111" className="text-text-lo text-xs font-mono hover:text-gold block transition-colors">+91 888 222 1111</a>
                                    <a href="tel:+919876543210" className="text-text-lo text-xs font-mono hover:text-gold block transition-colors">+91 98765 43210</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-ink-2 p-8 md:p-10 rounded-3xl border border-line shadow-xl">
                            {status === 'success' ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto text-gold text-3xl">
                                        <i className="ri-checkbox-circle-line"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-playfair-display">Message Sent Successfully!</h3>
                                    <p className="text-text-lo text-sm max-w-md mx-auto font-sans leading-relaxed">
                                        Thank you for reaching out. We have received your message and one of our Rajasthan trip curators will get in touch within 24 hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setStatus('idle')}
                                        className="px-6 py-3 bg-gold hover:bg-gold-600 text-ink text-xs font-bold uppercase tracking-widest font-mono rounded-xl transition-colors cursor-pointer"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold font-playfair-display text-white mb-1">Send a Message</h3>
                                        <p className="text-text-lo text-xs font-sans">Fill out your inquiry details and we will coordinate with you promptly.</p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[10px] font-bold text-text-lo uppercase font-mono tracking-wider mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-line focus:border-gold focus:outline-none transition-colors text-xs text-text-hi bg-ink font-sans"
                                                placeholder="e.g. Maharani Gayatri"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-text-lo uppercase font-mono tracking-wider mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-line focus:border-gold focus:outline-none transition-colors text-xs text-text-hi bg-ink font-sans"
                                                placeholder="gayatri@royalmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[10px] font-bold text-text-lo uppercase font-mono tracking-wider mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-line focus:border-gold focus:outline-none transition-colors text-xs text-text-hi bg-ink font-sans"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-text-lo uppercase font-mono tracking-wider mb-2">Subject</label>
                                            <select
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-line focus:border-gold focus:outline-none transition-colors text-xs text-text-hi bg-ink font-sans cursor-pointer"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Package Booking">Package Booking</option>
                                                <option value="Hotel Booking">Hotel Booking</option>
                                                <option value="Custom Itinerary">Custom Itinerary</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold text-text-lo uppercase font-mono tracking-wider mb-2">Your Message</label>
                                        <textarea
                                            rows="5"
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-line focus:border-gold focus:outline-none transition-colors text-xs text-text-hi resize-none bg-ink font-sans leading-relaxed"
                                            placeholder="Tell us about your preferred destinations, number of guests, or specific heritage activities you want included..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 bg-gold text-ink font-bold uppercase tracking-widest text-xs font-mono rounded-xl hover:bg-gold-600 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin"></div>
                                                Sending Message...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>

                {/* Google Map Section */}
                <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-line h-[420px] w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113884.28822396348!2d75.71761405161477!3d26.88533838183063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1705600000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        title="Ghummakkad Rajasthan Office Map Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
