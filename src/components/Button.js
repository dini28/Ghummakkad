import React from 'react';
import Link from 'next/link';

const Button = ({
    children,
    variant = 'primary', // 'primary', 'outline', 'white'
    size = 'md', // 'sm', 'md', 'lg'
    href,
    className = '',
    onClick,
    type = 'button',
    ...props
}) => {
    // Base styles
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider rounded-lg transition-all duration-300 cursor-pointer";

    // Variant styles
    const variants = {
        primary: "bg-[#f6ac0f] text-slate-900 uppercase hover:bg-white hover:text-slate-900 border border-[#f6ac0f] hover:border-white",
        outline: "bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white uppercase",
        white: "bg-white text-slate-900 border border-white hover:bg-[#f6ac0f] hover:border-[#f6ac0f] hover:text-slate-900 uppercase",
        ghost: "bg-transparent text-slate-600 hover:text-[#f6ac0f]"
    };

    // Size styles
    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base w-full md:w-auto"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

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
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
