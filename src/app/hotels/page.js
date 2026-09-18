'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { motion, AnimatePresence } from 'framer-motion';

const hotels = [
    {
        id: 1,
        name: "Heritage Haveli Jaipur",
        location: "Jaipur",
        fullLocation: "Jaipur, Rajasthan",
        rating: 4.8,
        priceVal: 4500,
        price: "₹4,500",
        image: "/assets/images/card_3.webp",
        features: ["Heritage Architecture", "Royal Pool", "Luxury Spa", "Traditional Dining"],
        description: "A 200-year-old haveli restored to its former royal glory. Experience the grandeur of Rajputana hospitality, traditional folk dances, and authentic Rajasthani dining under the stars."
    },
    {
        id: 2,
        name: "Desert Dune Camp",
        location: "Jaisalmer",
        fullLocation: "Sam Sand Dunes, Jaisalmer",
        rating: 4.9,
        priceVal: 3200,
        price: "₹3,200",
        image: "/assets/images/card_2.webp",
        features: ["Luxury Glamping", "Camel Safari", "Folk Music", "Desert Bonfire"],
        description: "Premium Swiss tents nestled in the heart of the Thar Desert. Sleep under a canopy of stars and wake up to gold sunbeams stretching across majestic sand dunes."
    },
    {
        id: 3,
        name: "Lake View Homestay",
        location: "Udaipur",
        fullLocation: "Udaipur, Rajasthan",
        rating: 4.7,
        priceVal: 2800,
        price: "₹2,800",
        image: "/assets/images/rajasthan.webp",
        features: ["Lake Pichola View", "Home Cooked Food", "Free WiFi", "Rooftop Terrace"],
        description: "Cozy heritage rooms overlooking the pristine waters of Lake Pichola. Watch the sunset over the City Palace and experience traditional hospitality with home-cooked meals."
    },
    {
        id: 4,
        name: "Blue City Guest House",
        location: "Jodhpur",
        fullLocation: "Jodhpur, Rajasthan",
        rating: 4.6,
        priceVal: 1800,
        price: "₹1,800",
        image: "/assets/images/card_1.webp",
        features: ["Mehrangarh View", "Rooftop Cafe", "Budget Friendly", "Old Town Walking Tours"],
        description: "Experience the vibrant old town of Jodhpur. Located walking distance from Mehrangarh Fort, featuring a panoramic rooftop cafe and authentic local connections."
    },
    {
        id: 5,
        name: "Jungle Lodge Ranthambore",
        location: "Others",
        fullLocation: "Sawai Madhopur, Rajasthan",
        rating: 4.5,
        priceVal: 5500,
        price: "₹5,500",
        image: "/assets/images/card_3.webp",
        features: ["Wildlife Safaris", "Eco Friendly Lodge", "Nature Trails", "Organic Dining"],
        description: "Nestled in nature next to Ranthambore National Park. Our eco-friendly cottage lodge provides guided safaris, organic farm-to-table dining, and cozy campfire evenings."
    },
    {
        id: 6,
        name: "Pushkar Palace Resort",
        location: "Others",
        fullLocation: "Pushkar, Rajasthan",
        rating: 4.4,
        priceVal: 3900,
        price: "₹3,900",
        image: "/assets/images/card_2.webp",
        features: ["Swimming Pool", "Aravalli Hills View", "Meditation Garden", "Organic Spa"],
        description: "A serene getaway surrounded by the sacred hills of Pushkar. Features a large garden, yoga workshops, traditional therapies, and total peace away from city life."
    }
];

export default function HotelsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [sortBy, setSortBy] = useState('featured');
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [bookingData, setBookingData] = useState({ name: '', email: '', date: '', guests: 1 });
    const [bookingStatus, setBookingStatus] = useState('idle');

    const locations = ['All', 'Jaipur', 'Udaipur', 'Jaisalmer', 'Jodhpur', 'Others'];

    const filteredHotels = useMemo(() => {
        let result = [...hotels];

        if (selectedLocation !== 'All') {
            result = result.filter(h => h.location === selectedLocation);
        }

        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            result = result.filter(h => 
                h.name.toLowerCase().includes(query) || 
                h.description.toLowerCase().includes(query) ||
                h.features.some(f => f.toLowerCase().includes(query)) ||
                h.fullLocation.toLowerCase().includes(query)
            );
        }

        if (sortBy === 'price-low') {
            result.sort((a, b) => a.priceVal - b.priceVal);
        } else if (sortBy === 'price-high') {
            result.sort((a, b) => b.priceVal - a.priceVal);
        } else if (sortBy === 'rating') {
            result.sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [selectedLocation, searchQuery, sortBy]);

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setBookingStatus('submitting');
        setTimeout(() => {
            setBookingStatus('success');
            setBookingData({ name: '', email: '', date: '', guests: 1 });
        }, 1200);
    };

    return (
        <div className="bg-ink min-h-screen text-text-hi font-sans pb-24">
            
            {/* Systematic Hero Section */}
            <div className="w-full bg-cream pt-24 pb-6 px-4 md:px-8">
                <div className="relative h-[38vh] md:h-[42vh] w-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center px-6">
                    <Image
                        src="/assets/images/card_3.webp"
                        alt="Heritage Hotels in Rajasthan"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/85 z-0" />
                    <div className="relative z-10 max-w-3xl">
                        <span className="text-gold font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                            — Royal Accommodations
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair-display text-white uppercase tracking-tight leading-tight">
                            Heritage Hotels & Stays
                        </h1>
                        <p className="text-slate-300 text-xs md:text-sm mt-3 font-sans max-w-xl mx-auto font-light leading-relaxed">
                            Restored Rajputana palaces, tranquil lake havelis, and luxury desert camps vetted for royalty-grade comfort and timeless charm.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
                
                {/* Search, Filter & Sort Controls Panel */}
                <div className="bg-ink-2 p-6 rounded-2xl border border-line shadow-xl mb-12 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        
                        {/* Search Input */}
                        <div className="md:col-span-8 relative">
                            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-text-lo text-lg"></i>
                            <input
                                type="text"
                                placeholder="Search hotel name, amenities, or city..."
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
                                <option value="featured">Featured Stays</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    {/* Location Pills Filters */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-line">
                        <span className="text-xs font-bold text-text-lo uppercase tracking-widest font-mono mr-2">Location:</span>
                        {locations.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => setSelectedLocation(loc)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest font-mono transition-all cursor-pointer ${
                                    selectedLocation === loc
                                        ? 'bg-gold text-ink shadow-[0_0_15px_rgba(232,166,61,0.3)]'
                                        : 'bg-ink text-text-mid border border-line hover:border-gold/40 hover:text-text-hi'
                                }`}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stays Grid Section */}
                {filteredHotels.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredHotels.map((hotel) => (
                            <motion.article
                                layout
                                key={hotel.id}
                                className="group bg-ink-2 rounded-2xl border border-line overflow-hidden hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col"
                            >
                                {/* Thumbnail Image Container */}
                                <div className="relative h-64 w-full overflow-hidden bg-ink">
                                    <Image
                                        src={hotel.image}
                                        alt={hotel.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                                    
                                    <div className="absolute top-4 right-4 bg-ink/90 backdrop-blur-md border border-line px-3 py-1 rounded-full text-xs font-bold font-mono text-gold flex items-center gap-1 shadow-sm">
                                        <i className="ri-star-fill text-gold"></i> {hotel.rating}
                                    </div>
                                    <div className="absolute bottom-3 left-4 right-4">
                                        <span className="text-[11px] text-gold font-mono font-bold uppercase tracking-wider block">
                                            {hotel.fullLocation}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold font-playfair-display text-text-hi group-hover:text-gold transition-colors line-clamp-1 mb-2">
                                        {hotel.name}
                                    </h3>

                                    <p className="text-text-mid text-xs leading-relaxed font-sans line-clamp-2 mb-4">
                                        {hotel.description}
                                    </p>

                                    {/* Features Badges */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {hotel.features.slice(0, 3).map((feature) => (
                                            <span key={feature} className="text-[10px] uppercase font-mono font-semibold text-text-lo bg-ink border border-line px-2.5 py-1 rounded-md">
                                                {feature}
                                            </span>
                                        ))}
                                        {hotel.features.length > 3 && (
                                            <span className="text-[10px] font-mono text-gold bg-ink border border-line px-2 py-1 rounded-md">
                                                +{hotel.features.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Footer Info Row */}
                                    <div className="flex items-center justify-between pt-4 border-t border-line mt-auto">
                                        <div>
                                            <span className="text-[10px] text-text-lo uppercase font-mono block">Per Night</span>
                                            <span className="text-lg font-bold text-gold font-mono">{hotel.price}</span>
                                        </div>
                                        <Button
                                            onClick={() => {
                                                setSelectedHotel(hotel);
                                                setBookingStatus('idle');
                                            }}
                                            variant="primary"
                                            size="sm"
                                            icon="ri-arrow-right-line"
                                            iconPosition="right"
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-ink-2 border border-line rounded-3xl">
                        <i className="ri-hotel-line text-5xl text-text-lo block mb-4"></i>
                        <h3 className="text-lg font-bold text-text-hi font-playfair-display">No Stays Found</h3>
                        <p className="text-text-lo text-sm mt-1 max-w-sm mx-auto font-sans">
                            We couldn&apos;t find any properties matching your search or filters. Try adjusting your query.
                        </p>
                    </div>
                )}
            </div>

            {/* Stay Details & Quick Reservation Dialog Modal */}
            <AnimatePresence>
                {selectedHotel && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedHotel(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            className="relative w-full max-w-3xl bg-ink-2 border border-line rounded-3xl overflow-hidden shadow-2xl z-50 max-h-[85vh] flex flex-col"
                        >
                            {/* Close Modal button */}
                            <button
                                onClick={() => setSelectedHotel(null)}
                                className="absolute right-4 top-4 z-50 w-10 h-10 rounded-full bg-ink/70 text-white flex items-center justify-center hover:bg-gold hover:text-ink transition-colors border border-line cursor-pointer"
                                aria-label="Close modal"
                            >
                                <i className="ri-close-line text-xl"></i>
                            </button>

                            {/* Header Image */}
                            <div className="relative h-64 md:h-72 w-full shrink-0">
                                <Image
                                    src={selectedHotel.image}
                                    alt={selectedHotel.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/50 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest block mb-1">
                                        {selectedHotel.fullLocation}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-bold font-playfair-display text-white">
                                        {selectedHotel.name}
                                    </h2>
                                </div>
                            </div>

                            {/* Scrollable details panel */}
                            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                                
                                {/* Info summary bar */}
                                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-line">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center text-gold text-sm gap-1">
                                            <i className="ri-star-fill"></i>
                                            <span className="font-bold text-white font-mono ml-1">{selectedHotel.rating} / 5</span>
                                        </div>
                                        <span className="text-xs text-text-lo font-sans">| Verified Heritage Stay</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-text-lo font-mono uppercase block">Estimated Rate</span>
                                        <span className="text-2xl font-bold text-gold font-mono">{selectedHotel.price} <span className="text-xs text-text-mid font-sans font-normal">/ night</span></span>
                                    </div>
                                </div>

                                {/* About paragraph */}
                                <div>
                                    <h4 className="font-bold text-gold text-xs uppercase font-mono tracking-widest mb-2">About the Property</h4>
                                    <p className="text-text-mid text-sm leading-relaxed font-sans">
                                        {selectedHotel.description}
                                    </p>
                                </div>

                                {/* Amenities list */}
                                <div>
                                    <h4 className="font-bold text-gold text-xs uppercase font-mono tracking-widest mb-3">Amenities & Features</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {selectedHotel.features.map((feat) => (
                                            <div key={feat} className="flex items-center gap-2 text-text-hi text-xs bg-ink p-2.5 rounded-lg border border-line">
                                                <i className="ri-checkbox-circle-fill text-gold text-sm shrink-0"></i>
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Inside-Modal Booking Form */}
                                <div className="pt-6 border-t border-line">
                                    <div className="bg-ink p-6 rounded-2xl border border-line">
                                        {bookingStatus === 'success' ? (
                                            <div className="text-center py-6 space-y-2">
                                                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto text-2xl border border-gold/30">
                                                    <i className="ri-checkbox-circle-line"></i>
                                                </div>
                                                <h5 className="font-bold text-white font-playfair-display text-lg">Reservation Inquiry Received!</h5>
                                                <p className="text-xs text-text-lo max-w-md mx-auto font-sans leading-relaxed">
                                                    Your booking inquiry for <strong>{selectedHotel.name}</strong> has been received. Our concierge team will check royal suite availability and contact you shortly.
                                                </p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleBookingSubmit} className="space-y-4">
                                                <h4 className="font-bold text-white text-sm font-mono uppercase tracking-widest">
                                                    Request Stay Reservation
                                                </h4>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-text-lo font-mono uppercase tracking-wider mb-1">Your Name</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={bookingData.name}
                                                            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                                                            className="w-full px-3.5 py-2.5 bg-ink-2 border border-line rounded-lg focus:border-gold focus:outline-none text-xs text-text-hi font-sans"
                                                            placeholder="Maharaja Ranjit Singh"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-text-lo font-mono uppercase tracking-wider mb-1">Email Address</label>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={bookingData.email}
                                                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                                                            className="w-full px-3.5 py-2.5 bg-ink-2 border border-line rounded-lg focus:border-gold focus:outline-none text-xs text-text-hi font-sans"
                                                            placeholder="ranjit@royalmail.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-text-lo font-mono uppercase tracking-wider mb-1">Target Check-In</label>
                                                        <input
                                                            type="date"
                                                            required
                                                            value={bookingData.date}
                                                            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                                                            className="w-full px-3.5 py-2.5 bg-ink-2 border border-line rounded-lg focus:border-gold focus:outline-none text-xs text-text-hi font-sans cursor-pointer"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-text-lo font-mono uppercase tracking-wider mb-1">Guests</label>
                                                        <select
                                                            value={bookingData.guests}
                                                            onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                                                            className="w-full px-3.5 py-2.5 bg-ink-2 border border-line rounded-lg focus:border-gold focus:outline-none text-xs text-text-hi font-sans cursor-pointer"
                                                        >
                                                            <option value={1}>1 Guest</option>
                                                            <option value={2}>2 Guests</option>
                                                            <option value={3}>3 Guests</option>
                                                            <option value={4}>4 Guests</option>
                                                            <option value={5}>5+ Guests</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={bookingStatus === 'submitting'}
                                                    className="w-full py-3.5 bg-gold text-ink font-bold uppercase tracking-widest text-xs font-mono rounded-xl hover:bg-gold-600 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                                                >
                                                    {bookingStatus === 'submitting' ? (
                                                        <>
                                                            <div className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin"></div>
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        'Send Reservation Inquiry'
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
