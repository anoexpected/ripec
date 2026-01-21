"use client";

import Image from "next/image";
import { CheckCircle, ArrowRight, Building2 } from "lucide-react";
import { useState } from "react";

const countries = [
    {
        id: "india",
        name: "India",
        image: "/countries/india.jpg",
        title: "The Hub of Affordable Quality Education",
        description:
            "India offers world-class technical education at a fraction of the global cost. We have negotiated 50-100% tuition scholarships specifically for our students.",
        benefits: [
            "50-100% Tuition Waivers",
            "No IELTS Required",
            "English-Medium Instruction",
            "Low Cost of Living",
        ],
        universities: [
            {
                name: "Chandigarh University",
                logo: "/partners/chandigarh-university.png",
            },
            {
                name: "RNTU",
                logo: "/partners/rntu-rabindranath-tagore.png",
            },
            {
                name: "Swami Vivekanand",
                logo: "/partners/swami-vivekanand-university.png",
            },
            { name: "Global Arcus", logo: "/partners/global-arcus.png" },
        ],
    },
    {
        id: "china",
        name: "China",
        image: "/countries/china.jpg",
        title: "World-Class Universities with Government Scholarships",
        description:
            "China is home to globally ranked universities offering generous government scholarships and cutting-edge research facilities for international students.",
        benefits: [
            "Government Scholarships",
            "Top-Ranked Universities",
            "Advanced Research Facilities",
            "Cultural Immersion",
        ],
        universities: [],
    },
    {
        id: "malaysia",
        name: "Malaysia",
        image: "/countries/Malaysia.jpg",
        title: "Your Gateway to UK/US Degrees in Asia",
        description:
            "Malaysia is a hub for international education offering affordable tuition and dual-degree programs with prestigious UK and US universities.",
        benefits: [
            "Dual-Degree Programs",
            "Affordable Tuition",
            "English-Medium Education",
            "Multicultural Environment",
        ],
        universities: [],
    },
    {
        id: "uae",
        name: "UAE (Dubai/Sharjah)",
        image: "/countries/United Arab Emirates.jpg",
        title: "Modern Education in a Global Business Hub",
        description:
            "Study in the heart of global business. Excellent for students seeking international exposure and career opportunities in the Middle East.",
        benefits: [
            "Global Business Hub",
            "Earn UK/US Degrees",
            "Post-Study Work Visas",
            "World-Class Infrastructure",
        ],
        universities: [
            { name: "Britts Imperial", logo: "/partners/britts-imperial.png" },
        ],
    },
];

export default function Destinations() {
    const [activeCountry, setActiveCountry] = useState("india");

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setActiveCountry(id);
        }
    };

    return (
        <main className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-heading font-bold text-5xl text-gray-900 mb-12 text-center">
                    Study Destinations
                </h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sticky Sidebar */}
                    <aside className="lg:w-1/4">
                        <nav className="lg:sticky lg:top-24 space-y-2">
                            {countries.map((country) => (
                                <button
                                    key={country.id}
                                    onClick={() => scrollToSection(country.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeCountry === country.id
                                        ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600 font-semibold"
                                        : "text-gray-600 hover:bg-gray-50 border-l-4 border-transparent"
                                        }`}
                                >
                                    {country.name}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Content Sections */}
                    <div className="lg:w-3/4 space-y-16">
                        {countries.map((country) => (
                            <section
                                key={country.id}
                                id={country.id}
                                className="scroll-mt-24"
                            >
                                {/* Hero Image */}
                                <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                                    <Image
                                        src={country.image}
                                        alt={country.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 flex items-center px-8">
                                        <h2 className="font-heading font-bold text-4xl text-white">
                                            {country.name}
                                        </h2>
                                    </div>
                                </div>

                                {/* Title & Intro */}
                                <div className="mb-8">
                                    <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                                        {country.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {country.description}
                                    </p>
                                </div>

                                {/* Key Benefits */}
                                <div className="mb-8">
                                    <h4 className="font-heading font-semibold text-xl text-gray-900 mb-4">
                                        Key Benefits
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {country.benefits.map((benefit, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle
                                                    size={20}
                                                    className="text-green-500 flex-shrink-0 mt-0.5"
                                                />
                                                <span className="text-gray-700">
                                                    {benefit}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Featured Universities */}
                                <div className="mb-8">
                                    <h4 className="font-heading font-semibold text-xl text-gray-900 mb-4">
                                        Featured Universities
                                    </h4>
                                    {country.universities.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                            {country.universities.map(
                                                (university, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                                                    >
                                                        <Image
                                                            src={university.logo}
                                                            alt={university.name}
                                                            width={120}
                                                            height={60}
                                                            className="h-16 w-auto object-contain"
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-xl p-8 text-center">
                                            <Building2
                                                size={48}
                                                className="text-orange-600 mx-auto mb-4"
                                            />
                                            <h5 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                                                Various Government & Private
                                                Institutions
                                            </h5>
                                            <p className="text-sm text-gray-600">
                                                We partner with top-ranked
                                                universities in {country.name}{" "}
                                                offering government scholarships.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Enquire Button */}
                                <div>
                                    <a
                                        href={`https://wa.me/263772644806?text=I'd like to enquire about studying in ${country.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center gap-2 px-6 py-3 bg-orange-100 text-orange-700 font-semibold rounded-lg hover:bg-orange-200 transition-colors duration-300"
                                    >
                                        Enquire about {country.name}
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
