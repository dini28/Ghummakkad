import React from 'react';
import Eyebrow from './Eyebrow';

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'center', // 'left' | 'center' | 'right'
    theme = 'dark',   // 'dark' | 'light'
    className = ''
}) {
    const alignClasses = {
        left: 'text-left items-start',
        center: 'text-center items-center mx-auto',
        right: 'text-right items-end ml-auto'
    };

    const titleColors = theme === 'light' ? 'text-ink' : 'text-text-hi';
    const subtitleColors = theme === 'light' ? 'text-slate-600' : 'text-text-mid';

    return (
        <div className={`flex flex-col max-w-3xl mb-12 ${alignClasses[align]} ${className}`}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
                <h2 className={`text-[clamp(2rem,4vw,3rem)] font-cormorant-garamond font-semibold leading-tight mb-4 ${titleColors}`}>
                    {title}
                </h2>
            )}
            {subtitle && (
                <p className={`font-inter text-base md:text-lg leading-relaxed max-w-2xl ${subtitleColors}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
