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
    const [status, setStatus] = useState('idle'); // idle | submitting | success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        // Simulate a simple, robust submission
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
        <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24">
            {/* Hero Section */}
            <div className="w-full bg-cream pt-24 pb-6 px-4 md:px-8">
                <div className="relative h-[35vh] w-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center px-6">
                    <Image
                        src="/assets/images/card_2.webp"
                        alt="Contact Ghummakkad"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60 z-0" />
                    <div className="relative z-10">
                        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block mb-3">— Connect With Us</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-playfair-display text-white uppercase leading-none">
                            Get In Touch
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left Column: Direct Contact Info */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                            <span className="text-[#f6ac0f] font-cursive text-xl block">We&apos;d love to hear from you</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold font-playfair-display text-slate-900">
                                Plan Your Dream Vacation
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Have questions about our custom tour packages or want to build a bespoke itinerary for your Rajasthan journey? Reach out to us, and our travel curators will help design your perfect trip.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#f6ac0f]/10 rounded-xl flex items-center justify-center text-[#f6ac0f] text-xl shrink-0">
                                    <i className="ri-map-pin-line"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-0.5">Our Office</h4>
                                    <p className="text-slate-600 text-sm">C-Scheme, Jaipur, Rajasthan 302001, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#f6ac0f]/10 rounded-xl flex items-center justify-center text-[#f6ac0f] text-xl shrink-0">
                                    <i className="ri-mail-line"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-0.5">Email Us</h4>
                                    <a href="mailto:hello@ghummakkad.com" className="text-slate-600 text-sm hover:text-[#f6ac0f] block transition-colors">hello@ghummakkad.com</a>
                                    <a href="mailto:support@ghummakkad.com" className="text-slate-600 text-sm hover:text-[#f6ac0f] block transition-colors">support@ghummakkad.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#f6ac0f]/10 rounded-xl flex items-center justify-center text-[#f6ac0f] text-xl shrink-0">
                                    <i className="ri-phone-line"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-0.5">Call Us</h4>
                                    <a href="tel:+919876543210" className="text-slate-600 text-sm hover:text-[#f6ac0f] block transition-colors">+91 98765 43210</a>
                                    <a href="tel:+911234567890" className="text-slate-600 text-sm hover:text-[#f6ac0f] block transition-colors">+91 12345 67890</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Reliable Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
                            {status === 'success' ? (
                                <div className="text-center py-10 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto text-green-600">
                                        <i className="ri-checkbox-circle-line text-3xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 font-playfair-display">Message Sent Successfully!</h3>
                                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                                        Thank you for reaching out. We have received your inquiry and one of our travel curators will get back to you within 24 hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setStatus('idle')}
                                        className="px-6 py-2.5 bg-[#f6ac0f] hover:bg-slate-900 hover:text-white text-slate-900 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-2xl font-bold font-playfair-display text-slate-900 mb-2">Send a Message</h3>
                                    <p className="text-slate-500 text-sm">Please fill out the form below and we will contact you shortly.</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#f6ac0f] focus:outline-none transition-colors text-sm bg-slate-50"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#f6ac0f] focus:outline-none transition-colors text-sm bg-slate-50"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#f6ac0f] focus:outline-none transition-colors text-sm bg-slate-50"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Subject</label>
                                            <select
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#f6ac0f] focus:outline-none transition-colors text-sm bg-slate-50"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Package Booking">Package Booking</option>
                                                <option value="Hotel Booking">Hotel Booking</option>
                                                <option value="Custom Itinerary">Custom Itinerary</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Message</label>
                                        <textarea
                                            rows="5"
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#f6ac0f] focus:outline-none transition-colors text-sm resize-none bg-slate-50"
                                            placeholder="Write your message here..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 bg-[#f6ac0f] text-slate-900 font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-slate-900 hover:text-white transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                                                Sending...
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
                <div className="mt-20 rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-[450px] w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113884.28822396348!2d75.71761405161477!3d26.88533838183063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1705600000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
