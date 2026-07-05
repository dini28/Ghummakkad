'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
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
    const [bookingStatus, setBookingStatus] = useState('idle'); // idle | submitting | success

    // Locations options for filter tabs
    const locations = ['All', 'Jaipur', 'Udaipur', 'Jaisalmer', 'Jodhpur', 'Others'];

    // Filter and sort stay list
    const filteredHotels = useMemo(() => {
        let result = [...hotels];

        // 1. Filter by Location
        if (selectedLocation !== 'All') {
            result = result.filter(h => h.location === selectedLocation);
        }

        // 2. Filter by Search Query (Name, Description, Features)
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            result = result.filter(h => 
                h.name.toLowerCase().includes(query) || 
                h.description.toLowerCase().includes(query) ||
                h.features.some(f => f.toLowerCase().includes(query)) ||
                h.fullLocation.toLowerCase().includes(query)
            );
        }

        // 3. Sort stays
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
        <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-24">
            
            {/* Hero Section */}
            <div className="w-full bg-cream pt-24 pb-6 px-4 md:px-8">
                <div className="relative h-[35vh] w-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center px-6">
                    <Image
                        src="/assets/images/card_3.webp"
                        alt="Heritage Hotels in Rajasthan"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60 z-0" />
                    <div className="relative z-10">
                        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block mb-3">— Royal Accommodations</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-playfair-display text-white uppercase leading-none">
                            Heritage Hotels & Stays
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                
                {/* Search, Filter & Sort Controls Panel */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-12 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        
                        {/* Search Input (7 cols) */}
                        <div className="md:col-span-8 relative">
                            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
                            <input
                                type="text"
                                placeholder="Search hotel name, amenities, or city..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#f6ac0f] focus:outline-none transition-colors text-sm"
                            />
                        </div>

                        {/* Sort Dropdown (4 cols) */}
                        <div className="md:col-span-4">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#f6ac0f] focus:outline-none text-sm text-slate-600 bg-white"
                            >
                                <option value="featured">Featured Stays</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    {/* Location Pills Filters */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Locations:</span>
                        {locations.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => setSelectedLocation(loc)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                                    selectedLocation === loc
                                        ? 'bg-[#f6ac0f] text-slate-900'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
                            <motion.div
                                layout
                                key={hotel.id}
                                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
                            >
                                {/* Thumbnail Image Container */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={hotel.image}
                                        alt={hotel.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                                        <i className="ri-star-fill text-[#f6ac0f]"></i> {hotel.rating}
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-2">
                                        <span className="text-xs font-semibold text-[#f6ac0f] uppercase tracking-wider">{hotel.fullLocation}</span>
                                        <h3 className="text-xl font-bold font-playfair-display text-slate-900 line-clamp-1 mt-1">
                                            {hotel.name}
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                        {hotel.description}
                                    </p>

                                    {/* Features Badges */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {hotel.features.slice(0, 3).map((feature) => (
                                            <span key={feature} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md">
                                                {feature}
                                            </span>
                                        ))}
                                        {hotel.features.length > 3 && (
                                            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                                                +{hotel.features.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Footer Info Row */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                        <div>
                                            <span className="text-xs text-slate-400 block font-medium">Per Night</span>
                                            <span className="text-xl font-bold text-[#f6ac0f] font-outfit">{hotel.price}</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setSelectedHotel(hotel);
                                                setBookingStatus('idle');
                                            }}
                                            className="px-4 py-2 border border-slate-900 text-slate-900 text-sm font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl shadow-sm">
                        <i className="ri-hotel-line text-5xl text-slate-300 block mb-4"></i>
                        <h3 className="text-lg font-bold text-slate-700">No Stays Found</h3>
                        <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">We couldn&apos;t find any properties matching your search or filters. Try adjusting your query.</p>
                    </div>
                )}
            </div>

            {/* Stay Details & Quick Reservation Dialog Modal */}
            <AnimatePresence>
                {selectedHotel && (
                    <div className="fixed inset-0 z-120 flex items-center justify-center p-4">
                        
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedHotel(null)}
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl z-130 max-h-[85vh] flex flex-col"
                        >
                            
                            {/* Close Modal button */}
                            <button
                                onClick={() => setSelectedHotel(null)}
                                className="absolute right-4 top-4 z-140 w-10 h-10 rounded-full bg-slate-950/40 text-white flex items-center justify-center hover:bg-slate-950/60 transition-colors border-none cursor-pointer"
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-xs font-bold text-[#f6ac0f] uppercase tracking-widest">{selectedHotel.fullLocation}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold font-playfair-display text-white mt-1">
                                        {selectedHotel.name}
                                    </h2>
                                </div>
                            </div>

                            {/* Scrollable details panel */}
                            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                                
                                {/* Info summary bar */}
                                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center text-yellow-500 text-sm gap-0.5">
                                            <i className="ri-star-fill"></i>
                                            <span className="font-bold text-slate-800 ml-1">{selectedHotel.rating} / 5</span>
                                        </div>
                                        <span className="text-xs text-slate-400">| Premium verified</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-slate-400 font-medium">Estimated Pricing</span>
                                        <span className="block text-xl font-bold text-[#f6ac0f] font-outfit">{selectedHotel.price} <span className="text-xs text-slate-400 font-normal">/ night</span></span>
                                    </div>
                                </div>

                                {/* About paragraph */}
                                <div className="space-y-2">
                                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">About the Stay</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {selectedHotel.description}
                                    </p>
                                </div>

                                {/* Amenities full list */}
                                <div className="space-y-3">
                                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Features & Amenities</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {selectedHotel.features.map((feat) => (
                                            <div key={feat} className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                                                <i className="ri-checkbox-circle-fill text-[#f6ac0f] text-sm shrink-0"></i>
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Inside-Modal Booking Form */}
                                <div className="pt-6 border-t border-slate-100">
                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                        {bookingStatus === 'success' ? (
                                            <div className="text-center py-4 space-y-2">
                                                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                                                    <i className="ri-checkbox-circle-line text-2xl"></i>
                                                </div>
                                                <h5 className="font-bold text-slate-900">Inquiry Submitted!</h5>
                                                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                                                    Your booking request for <strong>{selectedHotel.name}</strong> has been logged. Our hospitality agent will email you with availability shortly.
                                                </p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleBookingSubmit} className="space-y-4">
                                                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Request Stay Reservation</h4>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Name</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={bookingData.name}
                                                            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                                                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:border-[#f6ac0f] focus:outline-none text-xs"
                                                            placeholder="Maharaja Ranjit"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={bookingData.email}
                                                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                                                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:border-[#f6ac0f] focus:outline-none text-xs"
                                                            placeholder="ranjit@royalmail.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Target Check-In</label>
                                                        <input
                                                            type="date"
                                                            required
                                                            value={bookingData.date}
                                                            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                                                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:border-[#f6ac0f] focus:outline-none text-xs text-slate-600"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Guests</label>
                                                        <select
                                                            value={bookingData.guests}
                                                            onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                                                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:border-[#f6ac0f] focus:outline-none text-xs bg-white text-slate-600"
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
                                                    className="w-full py-2.5 bg-[#f6ac0f] text-slate-900 font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                                                >
                                                    {bookingStatus === 'submitting' ? (
                                                        <>
                                                            <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
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
