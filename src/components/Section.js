import React from 'react';

export default function Section({
    children,
    bg = 'dark', // 'dark' | 'cream' | 'ink2'
    className = '',
    id = '',
    ...props
}) {
    const bgClasses = {
        dark: 'bg-ink text-text-hi',
        cream: 'bg-cream text-ink',
        ink2: 'bg-ink-2 text-text-hi'
    };

    return (
        <section
            id={id}
            className={`py-[clamp(4rem,10vw,7rem)] relative z-10 transition-colors duration-300 ${bgClasses[bg]} ${className}`}
            {...props}
        >
            {children}
        </section>
    );
}
