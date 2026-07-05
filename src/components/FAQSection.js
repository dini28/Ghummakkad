'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
import SectionHeading from './SectionHeading';

const faqsData = [
    {
        question: 'Can I customize my Rajasthan itinerary?',
        answer: 'Absolutely. Every Ghummakkad journey is fully private and customizable you choose the destinations, pace, hotel category, and activities, and our experts build the plan around you.'
    },
    {
        question: 'Do you provide private tours and local guides?',
        answer: 'Yes. All our tours are private, with vetted local guides and drivers who are born-and-raised Rajasthan experts, so you travel with someone who truly knows the region.'
    },
    {
        question: 'Are hotels and experiences verified?',
        answer: 'Every property and experience is personally vetted by our on-ground team for quality, safety, and authenticity before it\'s ever added to an itinerary.'
    },
    {
        question: 'Can you arrange airport pickup and transport?',
        answer: 'Yes. We arrange sanitised private vehicles with professional drivers, including airport and railway station pickups and drops, throughout your entire journey.'
    },
    {
        question: 'Is the trip suitable for families or couples?',
        answer: 'Definitely. We design journeys for families, couples, solo travellers, and groups adjusting pace, accommodation, and activities to suit who\'s travelling.'
    },
    {
        question: 'How soon will I receive my itinerary?',
        answer: 'After you share your preferences, our experts typically send a personalized draft itinerary within 24 hours, then refine it with you until it\'s perfect.'
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0); // First item defaults open

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Schema.org FAQPage JSON-LD Structured Data
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqsData.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    };

    return (
        <Section
            bg="cream"
            id="faq"
            aria-labelledby="faq-heading"
        >
            {/* Inject JSON-LD Schema for SEO Rich Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Container>
                {/* Section Header */}
                <SectionHeading
                    eyebrow="QUESTIONS & ANSWERS"
                    title="Frequently Asked Questions"
                    subtitle="Have questions about planning your royal Rajasthan trip? Find quick answers below."
                    align="center"
                    theme="light"
                />

                {/* Accordion List */}
                <div className="max-w-[800px] mx-auto space-y-4">
                    {faqsData.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        const buttonId = `faq-btn-${index}`;
                        const panelId = `faq-panel-${index}`;

                        return (
                            <div
                                key={index}
                                className="bg-white/40 border border-cream-2/50 rounded-[1.5rem] overflow-hidden hover:bg-white hover:shadow-[0_15px_40px_rgba(232,166,61,0.04)] transition-all duration-500"
                            >
                                <h3>
                                    <button
                                        id={buttonId}
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 bg-transparent cursor-pointer font-playfair-display font-bold text-lg md:text-xl text-ink"
                                    >
                                        <span>{faq.question}</span>

                                        {/* Chevron Icon */}
                                        <span
                                            aria-hidden="true"
                                            className={`w-8 h-8 rounded-full bg-cream border border-gold/10 flex items-center justify-center text-gold transition-all duration-500 ${isOpen ? 'rotate-180 bg-gold text-ink border-gold' : ''
                                                }`}
                                        >
                                            <i className="ri-arrow-down-s-line text-lg"></i>
                                        </span>
                                    </button>
                                </h3>

                                {/* Answer Panel */}
                                <motion.div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    initial={false}
                                    animate={{
                                        height: isOpen ? 'auto' : 0,
                                        opacity: isOpen ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 md:px-8 pb-6 pt-1 text-slate-500 font-inter text-xs md:text-sm leading-relaxed border-t border-cream-2/20">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
