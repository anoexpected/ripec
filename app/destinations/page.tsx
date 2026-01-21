"use client";

import Image from "next/image";
import { CheckCircle, ArrowRight, Building2 } from "lucide-react";
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
                <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 px-4">
                        {Object.keys(countries).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 whitespace-nowrap ${activeTab === key
                                    ? "bg-orange-500 text-white shadow-lg"
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
                    <div className="relative min-h-[60vh] h-[500px] w-full rounded-3xl overflow-hidden">
                        <Image
                            src={activeCountry.image}
                            alt={activeCountry.name}
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-6">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                Open for Applications
                            </div>
                            <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-3 drop-shadow-2xl">
                                {activeCountry.name}
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide drop-shadow-2xl">
                                {activeCountry.tagline}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Study Here Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Key Benefits Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                At a Glance
                            </h3>
                            <div className="space-y-5">
                                {activeCountry.benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-lg text-gray-700 font-medium">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Description Card with CTA */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Why Study Here?
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {activeCountry.description}
                            </p>
                            <a
                                href={`https://wa.me/263772644806?text=I'd like to enquire about studying in ${activeCountry.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                            >
                                Enquire about {activeCountry.name}
                                <ArrowRight className="w-5 h-5" />
                            </a>
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
                                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center min-h-[120px]"
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
                                            <span className="text-center text-gray-800 font-semibold text-base">
                                                {partner.name}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="max-w-2xl mx-auto text-center">
                                <div className="bg-white border-2 border-orange-200 rounded-2xl p-10 shadow-sm">
                                    <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                                    <p className="text-lg text-gray-800 font-semibold mb-2">
                                        Government & Private Universities
                                    </p>
                                    <p className="text-gray-600">
                                        We partner with top-ranked institutions in {activeCountry.name}.
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
