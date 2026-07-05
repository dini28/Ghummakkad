import React from 'react';

export default function Eyebrow({ children, className = '' }) {
    if (!children) return null;
    return (
        <span className={`block font-inter text-[11px] lg:text-xs font-bold uppercase tracking-[0.18em] text-gold mb-3 ${className}`}>
            {children}
        </span>
    );
}
