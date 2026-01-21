"use client";

import { Compass, Award, Plane, Home, Shield, Sparkles, Users, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
    {
        icon: Compass,
        chapter: "Chapter 1",
        headline: "Define Your Path.",
        description:
            "We help you understand your strengths and align your subject combinations with global career opportunities. Includes personalized roadmap planning.",
    },
    {
        icon: Award,
        chapter: "Chapter 2",
        headline: "Secure Your Place & Funding.",
        description:
            "We handle the entire application process. Our specialty is negotiating 50–100% tuition-free scholarships ensuring financial peace of mind.",
    },
    {
        icon: Plane,
        chapter: "Chapter 3",
        headline: "Navigate Borders Seamlessly.",
        description:
            "Stress-free visa application support, flight bookings, and pre-departure briefings on baggage and travel regulations.",
    },
    {
        icon: Home,
        chapter: "Chapter 4",
        headline: "Settle into Your New Life.",
        description:
            "We don't stop at the airport. We assist with accommodation, cultural adaptation (fighting culture shock), and provide ongoing mentorship.",
    },
];

const benefits = [
    {
        icon: Shield,
        title: "Government Registered",
        subtitle: "4401/2024",
    },
    {
        icon: Sparkles,
        title: "Zero-Strings Scholarships",
        subtitle: "No hidden conditions",
    },
    {
        icon: Users,
        title: "Post-Study Support",
        subtitle: "We're here beyond graduation",
    },
];

export default function Services() {
    const router = useRouter();

    return (
        <main className="bg-white min-h-screen pt-28">
            {/* Hero Section */}
            <section className="bg-slate-900 py-24 relative overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        More Than Just an Application.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        A complete ecosystem of support from your first question to your graduation day.
                    </p>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            The Journey Blueprint
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From confusion to confidence. We guide you through every step of studying abroad.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical connector line - hidden on mobile */}
                        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-orange-200"></div>

                        <div className="space-y-12">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                                            {/* Icon Section */}
                                            <div className="flex flex-col items-center md:items-start">
                                                <div className="bg-orange-50 text-orange-600 rounded-xl w-16 h-16 flex items-center justify-center mb-4 relative z-10">
                                                    <Icon className="w-8 h-8" />
                                                </div>
                                                <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                                                    {service.chapter}
                                                </span>
                                            </div>

                                            {/* Content Section */}
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                                    {service.headline}
                                                </h3>
                                                <p className="text-lg text-gray-600 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose RIPEC Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose RIPEC?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Trusted by students, backed by credentials.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 text-orange-600 rounded-xl mb-4">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600">{benefit.subtitle}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to start your Chapter 1?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Book a free consultation with our education counselors and begin your journey today.
                    </p>
                    <button
                        onClick={() => router.push('/contact?service=General%20Consultation')}
                        className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                        Book Free Consultation
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </main>
    );
}
