'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Card = ({ icon, title, description, href, className = "" }) => {
    const content = (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`group relative p-8 rounded-3xl bg-white border border-slate-200/80 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-12px_rgba(246,172,15,0.15)] hover:border-[#f6ac0f]/20 hover:-translate-y-1 ${className}`}
        >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f6ac0f] via-[#ffc94d] to-[#f6ac0f] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Gradient Blob Background Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#f6ac0f]/10 to-orange-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col gap-4">
                {/* Icon + Title Row */}
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f6ac0f]/15 to-[#f6ac0f]/5 flex items-center justify-center border border-[#f6ac0f]/10 group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300 shadow-sm">
                        <i className={`${icon} text-2xl text-[#f6ac0f] group-hover:text-[#d4940d] transition-colors duration-300`} />
                    </div>
                    <h3 className="text-lg font-bold font-outfit text-slate-900 group-hover:text-[#d4940d] transition-all duration-300">
                        {title}
                    </h3>
                </div>

                {/* Text Content */}
                <p className="text-slate-500 leading-relaxed text-sm">
                    {description}
                </p>

                {/* Read More Indicator */}
                {href && (
                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#f6ac0f] group-hover:text-[#d4940d] transition-colors">
                        <span>Learn more</span>
                        <i className="ri-arrow-right-line group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                )}
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="block h-full">
                {content}
            </Link>
        );
    }

    return content;
};

export default Card;
