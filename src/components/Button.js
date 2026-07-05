import React from 'react';
import Link from 'next/link';

export default function Button({
    children,
    variant = 'primary', // 'primary' | 'ghost' | 'dark'
    href,
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-mono text-sm font-semibold tracking-wider transition-all duration-300 min-h-[48px] px-8 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gold text-ink hover:bg-gold-600 active:scale-98 text-center",
        ghost: "bg-transparent text-text-hi border border-white/20 hover:border-gold hover:text-gold active:scale-98 text-center",
        dark: "bg-ink-2 text-text-hi border border-white/5 hover:border-white/20 active:scale-98 text-center"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={combinedClasses}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
