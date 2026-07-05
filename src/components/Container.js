import React from 'react';

export default function Container({ children, className = '' }) {
    return (
        <div className={`w-full max-w-[1200px] mx-auto px-[clamp(1rem,5vw,2rem)] ${className}`}>
            {children}
        </div>
    );
}
