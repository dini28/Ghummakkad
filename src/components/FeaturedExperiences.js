'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Button from './Button';

const experiencesData = [
    {
        title: 'Heritage Living',
        body: 'Stay in restored havelis and palace hotels where royal hospitality, curated interiors, and local storytelling turn a night\'s rest into living history.',
        image: '/assets/images/destinations/udaipur.webp',
        alt: 'Luxurious historic palace hotel in Udaipur overlooking the lake',
        chips: ['300+ Years', 'Palace Stay', 'Udaipur'],
        href: '/experiences/heritage-living'
    },
    {
        title: 'Desert Safaris',
        body: 'Ride golden dunes at sunset, listen to Manganiyar folk music by the fire, and sleep under the stars in a luxury desert camp.',
        image: '/assets/images/destinations/jaisalmer.webp',
        alt: 'Sunset over SAM sand dunes with camels in Jaisalmer',
        chips: ['Sunset', 'Camel Safari', 'Jaisalmer'],
        href: '/experiences/desert-safaris'
    },
    {
        title: 'Royal Cuisine',
        body: 'Follow expert-led food walks through spice bazaars, taste Rajasthani thalis and royal recipes, and end with a candlelit heritage dinner.',
        image: '/assets/images/destinations/jaipur.webp',
        alt: 'Richly decorated traditional royal Rajasthani food platter thali',
        chips: ['Food Trail', 'City Dinner', 'Jaipur'],
        href: '/experiences/royal-cuisine'
    },
    {
        title: 'Cultural Trails',
        body: 'Wander old bazaars, artisan villages, temples, forts, and hidden heritage lanes with a native local guide who knows every story.',
        image: '/assets/images/destinations/jodhpur.webp',
        alt: 'Local artisan crafting pottery in a heritage village street',
        chips: ['Local Guide', 'Walking Tour', 'Jaipur/Jodhpur'],
        href: '/experiences/cultural-trails'
    },
    {
        title: 'Forts & Palaces',
        body: 'Explore towering forts and blue-city ramparts at sunrise, with private access and a local historian bringing the ramparts to life.',
        image: '/assets/images/destinations/chittorgarh.webp',
        alt: 'Towering stone ramparts of Mehrangarh Fort under soft sunrise glow',
        chips: ['Sunrise', 'Mehrangarh', 'Jodhpur'],
        href: '/experiences/forts-palaces'
    }
];

export default function FeaturedExperiences() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0.2, 
            y: 20 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 90,
                damping: 20
            }
        }
    };

    return (
        <Section 
            bg="dark" 
            id="experiences-featured" 
            aria-labelledby="featured-heading"
        >
            <Container>
                {/* Section Header */}
                <SectionHeading
                    eyebrow="CURATED HIGHLIGHTS"
                    title="Unforgettable Rajasthan Experiences"
                    subtitle="Immerse yourself in carefully designed signature journeys that reveal the authentic majesty of the desert kingdom."
                    align="center"
                    theme="dark"
                />

                {/* Benton-Style / 3-then-2 Grid flow */}
                <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 list-none p-0 m-0"
                >
                    {experiencesData.map((exp, i) => {
                        // Laying out 6-column grid span: first 3 span 2 cols each, last 2 span 3 cols each (centered layout)
                        const colSpanClass = i < 3 
                            ? 'lg:col-span-2' 
                            : 'lg:col-span-3';

                        return (
                            <motion.li 
                                key={i} 
                                variants={cardVariants}
                                className={`flex ${colSpanClass}`}
                            >
                                <article className="bg-ink-2 border border-line rounded-2xl p-6 flex flex-col items-start justify-between flex-grow shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:border-gold/20 hover:shadow-[0_15px_45px_rgba(232,166,61,0.05)] transition-all duration-300 group">
                                    <div className="w-full">
                                        {/* Image Block */}
                                        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-6 bg-ink">
                                            <Image
                                                src={exp.image}
                                                alt={exp.alt}
                                                fill
                                                quality={80}
                                                className="object-cover transition-transform duration-700 group-hover:scale-103"
                                            />
                                        </div>

                                        {/* Content Block */}
                                        <div className="flex flex-col items-start gap-3 mb-6">
                                            {/* Chips */}
                                            <div className="flex flex-wrap gap-1.5" aria-label="Tags">
                                                {exp.chips.map((chip, chipIndex) => (
                                                    <span 
                                                        key={chipIndex}
                                                        className="text-[9px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/10"
                                                    >
                                                        {chip}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Card Title (Serif) */}
                                            <h3 className="text-2xl font-cormorant-garamond font-semibold text-text-hi group-hover:text-gold transition-colors">
                                                {exp.title}
                                            </h3>

                                            {/* Paragraph Description */}
                                            <p className="text-text-mid font-inter text-sm leading-relaxed">
                                                {exp.body}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action button */}
                                    <Button 
                                        href={exp.href} 
                                        variant="ghost" 
                                        className="w-full text-center mt-auto min-h-[44px]"
                                    >
                                        Explore Experience
                                    </Button>
                                </article>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </Container>
        </Section>
    );
}
