"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const countries = {
    india: {
        name: "India",
        tagline: "The Hub of Affordable Quality Education",
        image: "/countries/india.jpg",
        description:
            "India offers world-class technical education at a fraction of the global cost. We have negotiated 50-100% tuition scholarships specifically for our students.",
        benefits: [
            "50-100% Tuition Waivers",
            "No IELTS Required",
            "English-Medium Instruction",
            "Low Cost of Living",
        ],
        partners: [
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
    china: {
        name: "China",
        tagline: "World-Class Universities & Scholarships",
        image: "/countries/china.jpg",
        description:
            "China is home to globally ranked universities offering generous government scholarships and cutting-edge research facilities.",
        benefits: [
            "Government Scholarships",
            "Top-Ranked Universities",
            "Advanced Research Facilities",
            "Cultural Immersion",
        ],
        partners: [
            { name: "YOUDU EDUCATION" },
        ],
    },
    malaysia: {
        name: "Malaysia",
        tagline: "Your Gateway to UK/US Degrees in Asia",
        image: "/countries/Malaysia.jpg",
        description:
            "Malaysia is a hub for international education offering affordable tuition and dual-degree programs with prestigious UK and US universities.",
        benefits: [
            "Dual-Degree Programs",
            "Affordable Tuition",
            "English-Medium Education",
            "Multicultural Environment",
        ],
        partners: [
            { name: "Eduville Malaysia", logo: "/partners/Eduville Malaysia.png" },
        ],
    },
    uae: {
        name: "UAE",
        tagline: "Modern Education in a Global Business Hub",
        image: "/countries/United Arab Emirates.jpg",
        description:
            "Study in the heart of global business. Excellent for students seeking international exposure and career opportunities in the Middle East.",
        benefits: [
            "Global Business Hub",
            "Earn UK/US Degrees",
            "Post-Study Work Visas",
            "World-Class Infrastructure",
        ],
        partners: [
            { name: "Britts Imperial", logo: "/partners/britts-imperial.png" },
        ],
    },
};

export default function Destinations() {
    const searchParams = useSearchParams();
    const countryParam = searchParams.get("country");
    const [activeTab, setActiveTab] = useState(countryParam || "india");

    useEffect(() => {
        if (countryParam && countries[countryParam as keyof typeof countries]) {
            setActiveTab(countryParam);
        }
    }, [countryParam]);

    const activeCountry = countries[activeTab as keyof typeof countries];

    return (
        <main className="bg-white min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Explore Top Study Destinations
                    </h1>
                    <p className="text-lg text-gray-600">
                        Select a country to explore opportunities.
                    </p>
                </div>

                {/* Country Switcher Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap gap-4">
                        {Object.keys(countries).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === key
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {countries[key as keyof typeof countries].name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Active Country View */}
            <div>
                {/* Hero Image */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                        <Image
                            src={activeCountry.image}
                            alt={activeCountry.name}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <h2 className="text-5xl font-bold mb-2">
                                {activeCountry.name}
                            </h2>
                            <p className="text-2xl text-orange-400">
                                {activeCountry.tagline}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Study Here Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Key Benefits */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">
                                Key Benefits
                            </h3>
                            <div className="space-y-4">
                                {activeCountry.benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <span className="text-lg text-gray-700">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Description */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Why Study Here?
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {activeCountry.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Partner Institutions */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Partner Institutions
                        </h3>

                        {activeCountry.partners.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {activeCountry.partners.map((partner, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {partner.logo ? (
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={120}
                                                height={60}
                                                className="h-16 w-auto object-contain"
                                            />
                                        ) : (
                                            <span className="text-center text-gray-800 font-semibold text-lg">
                                                {partner.name}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="max-w-2xl mx-auto text-center">
                                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-8">
                                    <p className="text-lg text-gray-700 font-medium">
                                        We partner with top Government & Private
                                        Universities in {activeCountry.name}.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
