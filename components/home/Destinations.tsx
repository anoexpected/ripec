import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const destinations = [
    {
        name: "India",
        slug: "india",
        image: "/countries/india.jpg",
        description:
            "Home to world class institutions. We secure 50–100% tuition waivers for eligible students.",
    },
    {
        name: "China",
        slug: "china",
        image: "/countries/china.jpg",
        description:
            "Globally ranked universities with generous government scholarships and cutting-edge research facilities.",
    },
    {
        name: "Malaysia",
        slug: "malaysia",
        image: "/countries/Malaysia.jpg",
        description:
            "A hub for international education offering affordable tuition and dual-degree programs with UK/US universities.",
    },
    {
        name: "United Arab Emirates",
        slug: "uae",
        image: "/countries/United Arab Emirates.jpg",
        description:
            "Experience modern education in a global business hub with excellent career prospects after graduation.",
    },
];

export default function Destinations() {
    return (
        <section className="bg-ripec-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
                        Explore Top Study Destinations
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We guide you to trusted international universities in
                        these vibrant countries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((destination) => (
                        <Link
                            key={destination.name}
                            href={`/destinations?country=${destination.slug}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                                    {destination.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {destination.description}
                                </p>
                                <div className="flex items-center text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                                    Learn More
                                    <ArrowRight
                                        size={16}
                                        className="ml-1 group-hover:translate-x-1 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
