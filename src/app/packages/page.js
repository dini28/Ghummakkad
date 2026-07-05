import Section from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

const packages = [
    {
        id: 1,
        title: "Royal Rajasthan Heritage Tour",
        duration: "6 Days, 5 Nights",
        places: ["Jaipur", "Jodhpur", "Udaipur"],
        price: "₹24,999",
        image: "/assets/images/card_1.webp",
        description: "Experience the grandeur of forts and palaces in the Land of Kings."
    },
    {
        id: 2,
        title: "Golden Sands Desert Safari",
        duration: "4 Days, 3 Nights",
        places: ["Jaisalmer", "Thar Desert"],
        price: "₹15,499",
        image: "/assets/images/card_2.webp",
        description: "Camel rides, folk music, and camping under the starlit desert sky."
    },
    {
        id: 3,
        title: "Lake City Romantic Getaway",
        duration: "3 Days, 2 Nights",
        places: ["Udaipur", "Mount Abu"],
        price: "₹18,999",
        image: "/assets/images/card_3.webp",
        description: "Perfect for couples, exploring the serene lakes and hills of Rajasthan."
    },
    {
        id: 4,
        title: "Wild Rajasthan Wildlife Tour",
        duration: "5 Days, 4 Nights",
        places: ["Ranthambore", "Sariska"],
        price: "₹22,499",
        image: "/assets/images/rajasthan.webp",
        description: "Spot majestic tigers and exotic bird species in their natural habitat."
    },
    {
        id: 5,
        title: "Spiritual Pushkar & Ajmer",
        duration: "3 Days, 2 Nights",
        places: ["Pushkar", "Ajmer"],
        price: "₹12,999",
        image: "/assets/images/card_1.webp",
        description: "Visit the holy Brahma temple and Dargah Sharif for a spiritual journey."
    },
    {
        id: 6,
        title: "Blue City Cultural Dive",
        duration: "3 Days, 2 Nights",
        places: ["Jodhpur", "Bishnoi Village"],
        price: "₹14,499",
        image: "/assets/images/card_2.webp",
        description: "Walk through the blue lanes and experience authentic village life."
    }
];

export default function PackagesPage() {
    return (
        <div>
            {/* Hero Section */}
            <div className="w-full bg-cream pt-24 pb-6 px-4 md:px-8">
                <div className="relative h-[35vh] w-full rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                    <Image
                        src="/assets/images/rajasthan.webp"
                        alt="Rajasthan Packages"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 z-0" />
                    <div className="relative z-10 text-center">
                        <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block mb-3">— Our Offerings</span>
                        <h1 className="text-4xl md:text-6xl font-bold font-playfair-display text-white uppercase text-center">
                            Curated Travel Packages
                        </h1>
                    </div>
                </div>
            </div>

            <Section>
                <div className="text-center mb-12">
                    <p className="text-[#f6ac0f] font-cursive text-xl">Choose your journey</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair-display text-slate-900 mt-2">
                        Explore Our Best Selling Tours
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                                    {pkg.duration}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-bold font-playfair-display text-slate-900 line-clamp-2">
                                        {pkg.title}
                                    </h3>
                                </div>

                                <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                                    {pkg.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {pkg.places.slice(0, 3).map(place => (
                                        <span key={place} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                                            {place}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                    <div>
                                        <span className="text-xs text-slate-500 block">Starting from</span>
                                        <span className="text-lg font-bold text-[#f6ac0f]">{pkg.price}</span>
                                        <span className="text-xs text-slate-500">/person</span>
                                    </div>
                                    <Link href="/contact" className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
