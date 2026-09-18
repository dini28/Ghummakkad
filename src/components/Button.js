import React from 'react';
import Link from 'next/link';

/**
 * Systematic Button Component
 * 
 * Variants:
 * - primary: Gold filled button with dark text (main conversion action)
 * - secondary: Deep ink-2 filled with white text & subtle border (secondary action)
 * - outline: Transparent with gold border & text (clean high-visibility action)
 * - ghost: Transparent with subtle white border & hover gold accent
 * - dark: Dark surface button for light background contrast
 * 
 * Sizes:
 * - sm: Compact for cards & dense tables (h: 38px, text: xs)
 * - md: Standard default for navigation & inline forms (h: 46px, text: xs/sm)
 * - lg: Prominent hero & banner CTAs (h: 54px, text: sm/base)
 */
export default function Button({
    children,
    variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
    size = 'md',        // 'sm' | 'md' | 'lg'
    href,
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    icon,
    iconPosition = 'right', // 'left' | 'right'
    fullWidth = false,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded-full select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed active:scale-[0.98]";

    const sizeStyles = {
        sm: "min-h-[38px] px-5 py-2 text-[11px]",
        md: "min-h-[46px] px-7 py-2.5 text-xs",
        lg: "min-h-[54px] px-9 py-3.5 text-xs md:text-sm shadow-lg"
    };

    const variantStyles = {
        primary: "bg-gold text-ink hover:bg-gold-600 shadow-[0_4px_20px_rgba(232,166,61,0.25)] hover:shadow-[0_6px_25px_rgba(232,166,61,0.4)]",
        secondary: "bg-ink-2 text-white border border-line hover:border-gold/50 hover:text-gold shadow-md",
        outline: "bg-transparent text-gold border border-gold hover:bg-gold hover:text-ink shadow-sm",
        ghost: "bg-transparent text-text-hi border border-white/20 hover:border-gold hover:text-gold",
        dark: "bg-ink text-white border border-line hover:border-white/30 hover:bg-ink-2 shadow-md"
    };

    const widthStyle = fullWidth ? "w-full" : "";

    const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${widthStyle} ${className}`.trim();

    const renderContent = () => (
        <>
            {icon && iconPosition === 'left' && (
                <i className={`${icon} text-sm shrink-0`} aria-hidden="true" />
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
                <i className={`${icon} text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-0.5`} aria-hidden="true" />
            )}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...props}>
                {renderContent()}
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
            {renderContent()}
        </button>
    );
}
