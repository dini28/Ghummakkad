'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { motion, AnimatePresence } from 'framer-motion';

const packages = [
    {
        id: 1,
        title: "Royal Rajasthan Heritage Grandeur",
        category: "Heritage",
        region: "Jaipur, Jodhpur & Udaipur",
        duration: "6 Days, 5 Nights",
        priceVal: 24999,
        price: "₹24,999",
        image: "/assets/images/card_1.webp",
        badge: "Bestseller",
        highlights: ["Amber Fort Private Tour", "Lake Pichola Sunset Boat Cruise", "Mehrangarh Fort Walk", "Royal Heritage Haveli Stay"],
        inclusions: ["5 Nights Heritage Stays", "Private AC Cab & Chauffeur", "English / Hindi Tour Guide", "Daily Royal Breakfast", "All Entry & Toll Permits"],
        description: "Immerse yourself in the royal grandeur of Rajasthan's three most iconic cities. From the amber-hued palace walls of Jaipur to the cobalt alleyways of Jodhpur and the romantic waters of Lake Pichola.",
        itinerary: [
            { day: "Day 1-2", title: "Jaipur - The Pink City", desc: "Arrival in Jaipur, visit Amber Fort with priority pass, City Palace, Hawa Mahal, and an evening bazaar culinary walk." },
            { day: "Day 3", title: "Jodhpur - The Blue City", desc: "Drive to Jodhpur via Ajmer. Explore Mehrangarh Fort ramparts, Jaswant Thada, and stay in a heritage courtyard haveli." },
            { day: "Day 4-5", title: "Udaipur - City of Lakes", desc: "Arrive in Udaipur. Tour the grand City Palace, take a sunset boat on Lake Pichola, and enjoy dinner at an ancient lakeside ghat." },
            { day: "Day 6", title: "Departure", desc: "Morning visit to Saheliyon ki Bari before private drop-off at Udaipur Airport or Railway Station." }
        ]
    },
    {
        id: 2,
        title: "Golden Sands Thar Desert Safari",
        category: "Desert",
        region: "Jaisalmer & Sam Dunes",
        duration: "4 Days, 3 Nights",
        priceVal: 15499,
        price: "₹15,499",
        image: "/assets/images/card_2.webp",
        badge: "Top Experience",
        highlights: ["Luxury Glamping Tents", "Thar Desert Dune Bashing", "Private Camel Caravan", "Kalbeliya Folk Night"],
        inclusions: ["2 Nights Golden Fort Hotel", "1 Night Swiss Glamping Tent", "Sunset Camel Safari", "Desert Bonfire & Buffet Dinner", "Private Transport"],
        description: "Witness the magical dunes of the Great Indian Desert. Camp under a starlit canopy, enjoy authentic Manganiyar folk melodies, and discover the living Golden Fort of Jaisalmer.",
        itinerary: [
            { day: "Day 1", title: "Jaisalmer Arrival", desc: "Check in to golden sandstone hotel, stroll through Gadisar Lake, and explore the sunset viewpoint of Vyas Chhatri." },
            { day: "Day 2", title: "Living Fort & Havelis", desc: "Explore the 12th-century living Jaisalmer Fort, Patwon Ki Haveli, and Salim Singh Ki Haveli with a local historian." },
            { day: "Day 3", title: "Sam Sand Dunes Experience", desc: "Transfer to Swiss desert camp. Enjoy camel safari on ripples, jeep dune bashing, followed by Rajasthani dinner and folk dance." },
            { day: "Day 4", title: "Desert Sunrise & Return", desc: "Catch the desert sunrise over ripples before departing to Jaisalmer station or onward connection." }
        ]
    },
    {
        id: 3,
        title: "Lake City Romantic Palace Getaway",
        category: "Romantic",
        region: "Udaipur & Mount Abu",
        duration: "4 Days, 3 Nights",
        priceVal: 18999,
        price: "₹18,999",
        image: "/assets/images/card_3.webp",
        badge: "Couples Choice",
        highlights: ["Lake Pichola Private Cruise", "Candlelight Palace Dinner", "Mount Abu Sunset Point", "Bagore Ki Haveli Folk Show"],
        inclusions: ["3 Nights Luxury Palace Stays", "Private Sunset Shikara Boat", "Candlelight Dinner Setup", "Private Chauffeur Car", "All Sightseeing Passes"],
        description: "Crafted exclusively for couples seeking romance, peace, and timeless elegance amidst shimmering lakes and the misty peaks of the Aravalli hills.",
        itinerary: [
            { day: "Day 1", title: "Romantic Udaipur Arrival", desc: "Check in to lakeside suite. Evening private shikara ride on Lake Pichola watching City Palace light up." },
            { day: "Day 2", title: "Royal Palaces & Cultural Show", desc: "Guided tour of City Palace & Jagdish Temple. Evening front-row seats for Dharohar Folk Dance at Bagore Ki Haveli." },
            { day: "Day 3", title: "Mount Abu Hill Station", desc: "Scenic hill drive to Mount Abu. Visit the exquisite marble Dilwara Temples and relax by Nakki Lake at sunset." },
            { day: "Day 4", title: "Departure", desc: "Leisurely breakfast overlooking the hills before airport transfer." }
        ]
    },
    {
        id: 4,
        title: "Wild Ranthambore Tiger Expedition",
        category: "Wildlife",
        region: "Ranthambore & Jaipur",
        duration: "5 Days, 4 Nights",
        priceVal: 22499,
        price: "₹22,499",
        image: "/assets/images/rajasthan.webp",
        badge: "Adventure",
        highlights: ["2 Guaranteed Jungle Safaris", "Ranthambore Fort Trek", "Naturalist-Led Game Drives", "Eco-Lodge Bonfire"],
        inclusions: ["2 Nights Ranthambore Safari Lodge", "2 Nights Jaipur Haveli", "2 Jungle Canter / Gypsy Safaris", "All Forest Fees & Guides", "All Meals at Jungle Lodge"],
        description: "Track the elusive Royal Bengal Tiger through ancient palace ruins engulfed by wilderness. An exhilarating blend of raw nature and regal architecture.",
        itinerary: [
            { day: "Day 1", title: "Jaipur to Ranthambore", desc: "Morning pickup from Jaipur, drive through rural Rajasthan to our eco-resort nestled by the national park." },
            { day: "Day 2", title: "Morning & Afternoon Safaris", desc: "Two exhilarating game drives in different zones led by expert naturalists to spot tigers, leopards, and marsh crocs." },
            { day: "Day 3", title: "Fort Hike & Return to Jaipur", desc: "Morning hike to the 10th-century Ranthambore Fort inside the park. Afternoon scenic drive back to Jaipur." },
            { day: "Day 4", title: "Jaipur Highlights", desc: "Explore Nahargarh Fort ramparts overlooking the pink metropolis and experience local handicraft bazaars." },
            { day: "Day 5", title: "Departure", desc: "Airport transfer with royal memories." }
        ]
    },
    {
        id: 5,
        title: "Spiritual Pushkar & Ajmer Pilgrimage",
        category: "Spiritual",
        region: "Pushkar & Ajmer",
        duration: "3 Days, 2 Nights",
        priceVal: 12999,
        price: "₹12,999",
        image: "/assets/images/card_1.webp",
        badge: "Soulful",
        highlights: ["Holy Brahma Temple Darshan", "52 Ghats Aarti Ceremony", "Ajmer Sharif Dargah Visit", "Aravalli Sunset View"],
        inclusions: ["2 Nights Pushkar Heritage Resort", "Special Puja & Ghat Guidance", "Private AC Cab Transfer", "Daily Traditional Meals", "All Local Assistance"],
        description: "A tranquil pilgrimage through the spiritual heart of Rajasthan, honoring centuries of reverence at Pushkar Lake and the saintly peace of Khwaja Gharib Nawaz.",
        itinerary: [
            { day: "Day 1", title: "Ajmer Sharif & Pushkar", desc: "Visit the revered Ajmer Sharif Dargah followed by a peaceful scenic drive over the Nag Pahar pass into sacred Pushkar." },
            { day: "Day 2", title: "Brahma Temple & Ghat Aarti", desc: "Morning visit to the world's only Lord Brahma temple, camel cart ride in countryside, and evening Maha Aarti at Varaha Ghat." },
            { day: "Day 3", title: "Savitri Temple Hike & Return", desc: "Ropeway or hike to hill-top Savitri Temple for 360-degree views, followed by departure." }
        ]
    },
    {
        id: 6,
        title: "Blue City & Bishnoi Village Immersion",
        category: "Culture",
        region: "Jodhpur & Thar Outskirts",
        duration: "3 Days, 2 Nights",
        priceVal: 14499,
        price: "₹14,499",
        image: "/assets/images/card_2.webp",
        badge: "Culture Dive",
        highlights: ["Bishnoi Village Jeep Safari", "Pottery & Weaving Workshops", "Toorji Ka Jhalra Stepwell", "Sunset Mehrangarh Rampart Walk"],
        inclusions: ["2 Nights Boutique Haveli in Old Jodhpur", "Private Bishnoi Jeep Safari", "Local Artisan Workshops", "Rooftop Mehrangarh Dinners", "All Intercity Transfers"],
        description: "Step off the tourist trail into the vibrant indigo streets of Jodhpur and meet the legendary Bishnoi guardians who have protected desert wildlife for centuries.",
        itinerary: [
            { day: "Day 1", title: "Old Jodhpur Blue Lanes", desc: "Heritage walking tour through Navchokiya blue alleys, Clock Tower market, and historic stepwells." },
            { day: "Day 2", title: "Bishnoi Village Safari", desc: "Venture in an open 4x4 to see blackbucks, visit local potters and rug weavers in their ancestral homes." },
            { day: "Day 3", title: "Mehrangarh Fort & Farewell", desc: "Morning private tour of Mehrangarh's museum vaults and departure." }
        ]
    }
];

export default function PackagesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('featured');
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [inquiryData, setInquiryData] = useState({ name: '', email: '', phone: '', travelDate: '', travelers: 2 });
    const [inquiryStatus, setInquiryStatus] = useState('idle');

    const categories = ['All', 'Heritage', 'Desert', 'Romantic', 'Wildlife', 'Spiritual', 'Culture'];

    const filteredPackages = useMemo(() => {
        let list = [...packages];

        if (selectedCategory !== 'All') {
            list = list.filter(p => p.category === selectedCategory);
        }

        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            list = list.filter(p => 
                p.title.toLowerCase().includes(query) ||
                p.region.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.highlights.some(h => h.toLowerCase().includes(query))
            );
        }

        if (sortBy === 'price-low') {
            list.sort((a, b) => a.priceVal - b.priceVal);
        } else if (sortBy === 'price-high') {
            list.sort((a, b) => b.priceVal - a.priceVal);
        }

        return list;
    }, [selectedCategory, searchQuery, sortBy]);

    const handleInquirySubmit = (e) => {
        e.preventDefault();
        setInquiryStatus('submitting');
        setTimeout(() => {
            setInquiryStatus('success');
            setInquiryData({ name: '', email: '', phone: '', travelDate: '', travelers: 2 });
        }, 1200);
    };

    return (
        <div className="bg-ink min-h-screen text-text-hi font-sans pb-24">
            
            {/* Systematic Hero Banner */}
            <div className="w-full bg-cream pt-24 pb-6 px-4 md:px-8">
                <div className="relative h-[38vh] md:h-[42vh] w-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center px-6">
                    <Image
                        src="/assets/images/rajasthan.webp"
                        alt="Curated Rajasthan Tour Packages"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/85 z-0" />
                    <div className="relative z-10 max-w-3xl">
                        <span className="text-gold font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                            — Handpicked Itineraries
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair-display text-white uppercase tracking-tight leading-tight">
                            Curated Travel Packages
                        </h1>
                        <p className="text-slate-300 text-xs md:text-sm mt-3 font-sans max-w-xl mx-auto font-light leading-relaxed">
                            Private, bespoke journeys crafted with verified palace stays, expert local storytellers, and 24/7 dedicated travel support.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
                
                {/* Systematic Search, Filter & Sort Controls */}
                <div className="bg-ink-2 p-6 rounded-2xl border border-line shadow-xl mb-12 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        
                        {/* Search Input */}
                        <div className="md:col-span-8 relative">
                            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-text-lo text-lg"></i>
                            <input
                                type="text"
                                placeholder="Search destinations, highlights, or tour names..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-ink border border-line rounded-xl focus:border-gold focus:outline-none text-text-hi placeholder:text-text-lo transition-colors text-sm font-sans"
                            />
                        </div>

                        {/* Sort Dropdown */}
                        <div className="md:col-span-4">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-3.5 bg-ink border border-line rounded-xl focus:border-gold focus:outline-none text-sm text-text-hi font-sans cursor-pointer"
                            >
                                <option value="featured">Featured Itineraries</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-line">
                        <span className="text-xs font-bold text-text-lo uppercase tracking-widest font-mono mr-2">Theme:</span>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest font-mono transition-all cursor-pointer ${
                                    selectedCategory === cat
                                        ? 'bg-gold text-ink shadow-[0_0_15px_rgba(232,166,61,0.3)]'
                                        : 'bg-ink text-text-mid border border-line hover:border-gold/40 hover:text-text-hi'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Packages Grid */}
                {filteredPackages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPackages.map((pkg) => (
                            <motion.article
                                layout
                                key={pkg.id}
                                className="group bg-ink-2 rounded-2xl border border-line overflow-hidden hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col"
                            >
                                {/* Thumbnail Image */}
                                <div className="relative h-64 w-full overflow-hidden bg-ink">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                                    
                                    {/* Duration Badge */}
                                    <span className="absolute top-4 left-4 bg-ink/90 backdrop-blur-md border border-line text-text-hi text-[10px] font-bold uppercase tracking-widest font-mono px-3 py-1 rounded-full">
                                        {pkg.duration}
                                    </span>

                                    {/* Badge */}
                                    <span className="absolute top-4 right-4 bg-gold text-ink text-[10px] font-bold uppercase tracking-widest font-mono px-3 py-1 rounded-full shadow-sm">
                                        {pkg.badge}
                                    </span>

                                    {/* Location on bottom of image */}
                                    <div className="absolute bottom-3 left-4 right-4">
                                        <span className="text-[11px] text-gold font-mono font-bold uppercase tracking-wider block">
                                            {pkg.region}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold font-playfair-display text-text-hi group-hover:text-gold transition-colors line-clamp-1 mb-2">
                                        {pkg.title}
                                    </h3>

                                    <p className="text-text-mid text-xs leading-relaxed font-sans line-clamp-2 mb-4">
                                        {pkg.description}
                                    </p>

                                    {/* Highlights Pills */}
                                    <div className="space-y-1.5 mb-6">
                                        {pkg.highlights.slice(0, 3).map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-[11px] text-text-lo">
                                                <i className="ri-check-line text-gold text-xs shrink-0"></i>
                                                <span className="line-clamp-1">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer Info & Actions */}
                                    <div className="flex items-center justify-between pt-4 border-t border-line mt-auto">
                                        <div>
                                            <span className="text-[10px] text-text-lo uppercase font-mono block">Starting from</span>
                                            <span className="text-lg font-bold text-gold font-mono">{pkg.price}</span>
                                            <span className="text-[10px] text-text-lo font-sans ml-1">/ person</span>
                                        </div>
                                        
                                        <Button
                                            onClick={() => {
                                                setSelectedPackage(pkg);
                                                setInquiryStatus('idle');
                                            }}
                                            variant="primary"
                                            size="sm"
                                            icon="ri-arrow-right-line"
                                            iconPosition="right"
                                        >
                                            View Itinerary
                                        </Button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-ink-2 border border-line rounded-3xl">
                        <i className="ri-compass-3-line text-5xl text-text-lo block mb-4"></i>
                        <h3 className="text-lg font-bold text-text-hi font-playfair-display">No Travel Packages Found</h3>
                        <p className="text-text-lo text-sm mt-1 max-w-sm mx-auto font-sans">
                            We couldn&apos;t find any itineraries matching your criteria. Try adjusting your search or theme filters.
                        </p>
                    </div>
                )}

                {/* Bottom Custom Planning Pitch */}
                <div className="mt-16 bg-gradient-to-r from-ink-2 via-ink to-ink-2 border border-gold/20 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="max-w-xl">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold block mb-2">Bespoke Travel Consultation</span>
                        <h2 className="text-2xl md:text-3xl font-bold font-playfair-display text-white">Need a Tailor-Made Royal Itinerary?</h2>
                        <p className="text-text-mid text-sm mt-2 font-sans leading-relaxed">
                            Have specific dates or family requests? Our Rajasthan tour curators design completely customized routes with private palace bookings.
                        </p>
                    </div>
                    <Button
                        href="/contact"
                        variant="outline"
                        size="md"
                        icon="ri-arrow-right-up-line"
                        iconPosition="right"
                        className="shrink-0"
                    >
                        Request Custom Plan
                    </Button>
                </div>
            </div>

            {/* Systematic Package Detail & Inquiry Modal */}
            <AnimatePresence>
                {selectedPackage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPackage(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            className="relative w-full max-w-3xl bg-ink-2 border border-line rounded-3xl overflow-hidden shadow-2xl z-50 max-h-[85vh] flex flex-col"
                        >
                            {/* Close Modal Button */}
                            <button
                                onClick={() => setSelectedPackage(null)}
                                className="absolute right-4 top-4 z-50 w-10 h-10 rounded-full bg-ink/70 text-white flex items-center justify-center hover:bg-gold hover:text-ink transition-colors border border-line cursor-pointer"
                                aria-label="Close modal"
                            >
                                <i className="ri-close-line text-xl"></i>
                            </button>

                            {/* Hero Header in Modal */}
                            <div className="relative h-64 md:h-72 w-full shrink-0">
                                <Image
                                    src={selectedPackage.image}
                                    alt={selectedPackage.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/50 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">{selectedPackage.region}</span>
                                        <span className="text-text-lo text-xs font-mono">·</span>
                                        <span className="text-xs font-mono text-text-mid">{selectedPackage.duration}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold font-playfair-display text-white">
                                        {selectedPackage.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Modal Content Scroll Area */}
                            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                                
                                {/* Pricing & Quick Meta Bar */}
                                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line">
                                    <div>
                                        <span className="text-xs text-text-lo font-mono uppercase block">Estimated Price</span>
                                        <span className="text-2xl font-bold text-gold font-mono">{selectedPackage.price} <span className="text-xs text-text-mid font-sans font-normal">/ person</span></span>
                                    </div>
                                    <div className="bg-ink px-4 py-2 rounded-xl border border-line text-xs font-mono text-text-mid">
                                        Category: <strong className="text-gold">{selectedPackage.category}</strong>
                                    </div>
                                </div>

                                {/* Overview Description */}
                                <div>
                                    <h3 className="text-sm font-bold font-mono text-gold uppercase tracking-widest mb-2">Tour Overview</h3>
                                    <p className="text-text-mid text-sm leading-relaxed font-sans">
                                        {selectedPackage.description}
                                    </p>
                                </div>

                                {/* Inclusions */}
                                <div>
                                    <h3 className="text-sm font-bold font-mono text-gold uppercase tracking-widest mb-3">Package Inclusions</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {selectedPackage.inclusions.map((inc, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-text-hi bg-ink p-2.5 rounded-lg border border-line">
                                                <i className="ri-checkbox-circle-fill text-gold text-sm shrink-0"></i>
                                                <span>{inc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Day-by-Day Itinerary */}
                                <div>
                                    <h3 className="text-sm font-bold font-mono text-gold uppercase tracking-widest mb-3">Day-by-Day Itinerary</h3>
                                    <div className="space-y-3">
                                        {selectedPackage.itinerary.map((item, i) => (
                                            <div key={i} className="bg-ink p-4 rounded-xl border border-line">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[10px] font-bold font-mono bg-gold text-ink px-2 py-0.5 rounded">
                                                        {item.day}
                                                    </span>
                                                    <h4 className="text-sm font-bold text-white font-playfair-display">{item.title}</h4>
                                                </div>
                                                <p className="text-xs text-text-lo font-sans leading-relaxed pl-1">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Interactive Inquiry Form */}
                                <div className="pt-6 border-t border-line">
                                    <div className="bg-ink p-6 rounded-2xl border border-line">
                                        {inquiryStatus === 'success' ? (
                                            <div className="text-center py-6 space-y-2">
                                                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto text-2xl border border-gold/30">
                                                    <i className="ri-checkbox-circle-line"></i>
                                                </div>
                                                <h4 className="font-bold text-white font-playfair-display text-lg">Inquiry Successfully Sent!</h4>
                                                <p className="text-xs text-text-lo max-w-md mx-auto font-sans leading-relaxed">
                                                    Thank you! Our Rajasthan travel planner will review your details and send a personalized itinerary draft for <strong>{selectedPackage.title}</strong> within 24 hours.
                                                </p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleInquirySubmit} className="space-y-4">
                                                <h4 className="font-bold text-white text-sm font-mono uppercase tracking-widest">
                                                    Request Availability & Custom Quote
                                                </h4>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-text-lo font-mono uppercase tracking-wider mb-1">Your Name</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={inquiryData.name}
                                                            onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                                                            className="w-full px-3.5 py-2.5 bg-ink-2 border border-line rounded-lg focus:border-gold focus:outline-none text-xs text-text-hi font-sans"
                                                            placeholder="e.g. Vikramaditya Singh"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-text-lo font-mono uppercase tracking-wider mb-1">Email Address</label>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={inquiryData.email}
                                                            onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                                                            className="w-full px-3.5 py-2.5 bg-ink-2 border border-line rounded-lg focus:border-gold focus:outline-none text-xs text-text-hi font-sans"
                                                            placeholder="vikram@example.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-text-lo font-mono uppercase tracking-wider mb-1">Phone / WhatsApp</label>
                                                        <input
                                                            type="tel"
                                                            required
                                                            value={inquiryData.phone}
                                                            onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                                                            className="w-full px-3.5 py-2.5 bg-ink-2 border border-line rounded-lg focus:border-gold focus:outline-none text-xs text-text-hi font-sans"
                                                            placeholder="+91 98765 43210"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-text-lo font-mono uppercase tracking-wider mb-1">Travel Date</label>
                                                        <input
                                                            type="date"
                                                            required
                                                            value={inquiryData.travelDate}
                                                            onChange={(e) => setInquiryData({ ...inquiryData, travelDate: e.target.value })}
                                                            className="w-full px-3.5 py-2.5 bg-ink-2 border border-line rounded-lg focus:border-gold focus:outline-none text-xs text-text-hi font-sans cursor-pointer"
                                                        />
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={inquiryStatus === 'submitting'}
                                                    className="w-full py-3.5 bg-gold text-ink font-bold uppercase tracking-widest text-xs font-mono rounded-xl hover:bg-gold-600 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                                                >
                                                    {inquiryStatus === 'submitting' ? (
                                                        <>
                                                            <div className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin"></div>
                                                            Sending Inquiry...
                                                        </>
                                                    ) : (
                                                        'Submit Itinerary Request'
                                                    )}
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
