import React from 'react';

const SectionHeader = ({
    subTitle,
    title,
    highlight,
    align = 'left',
    theme = 'light',
    className = ''
}) => {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto'
    };

    const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';

    return (
        <div className={`max-w-7xl px-6 lg:px-12 mb-12 ${alignmentClasses[align]} ${className}`}>
            {subTitle && (
                <p className="text-[#f6ac0f] font-cursive tracking-widest text-xl mb-2">
                    {subTitle}
                </p>
            )}
            {title && (
                <h2 className={`text-4xl md:text-5xl font-bold font-playfair-display ${textColor} ${highlight ? 'underline' : ''}`}>
                    {title}
                    {highlight && (
                        <span className="tracking-widest text-xl">
                            {highlight}
                        </span>
                    )}
                </h2>
            )}
        </div>
    );
};

export default SectionHeader;
