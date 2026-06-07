'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = ({ phoneNumber = '918882221111' }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const message = encodeURIComponent('Hi! I\'m interested in booking a Rajasthan trip with Ghummakkad. Can you help?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
            {/* Tooltip */}
            <AnimatePresence>
                {isTooltipVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl px-5 py-3 border border-slate-100 max-w-[200px]"
                    >
                        <p className="text-slate-900 text-sm font-semibold mb-0.5">Need help?</p>
                        <p className="text-slate-500 text-xs">Chat with us on WhatsApp!</p>
                        {/* Arrow */}
                        <div className="absolute right-[-6px] bottom-5 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-[-45deg]" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsTooltipVisible(true)}
                onMouseLeave={() => setIsTooltipVisible(false)}
                className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
                aria-label="Chat on WhatsApp"
            >
                <i className="ri-whatsapp-line text-white text-2xl" />

                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: '2s' }} />
            </a>
        </div>
    );
};

export default WhatsAppButton;
