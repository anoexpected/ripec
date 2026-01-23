"use client";

import { Target, Heart, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section - The Promise */}
            <section className="relative min-h-screen flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/about.jpg"
                        alt="RIPEC Promise"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/80"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-16 md:py-20">
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
                        More Than a Consultancy. We Are a Launchpad.
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        RIPEC exists to democratize access to global education for every Zimbabwean student.
                    </p>
                </div>
            </section>

            {/* 2. The Mission Section - Split Screen */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        {/* Left: Text */}
                        <div className="w-full md:w-1/2">
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6">
                                Our Mission
                            </h2>
                            <div className="space-y-4 md:space-y-6">
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                                    We bridge the gap between extraordinary talent and unprecedented opportunity.
                                </p>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Too many brilliant Zimbabwean students never reach their potential—not because they lack ability, but because they lack access. Access to information. Access to networks. Access to guidance that understands both their reality and the expectations of global institutions.
                                </p>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                                    RIPEC was founded to change that equation. We exist to ensure that every qualified student, regardless of background, has a clear pathway to the world's best universities.
                                </p>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="w-full md:w-1/2">
                            <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/mission.jpg"
                                    alt="Student Success"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Vision Section - The North Star */}
            <section className="py-16 md:py-20 lg:py-32 bg-slate-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12">
                        Our Vision
                    </h2>
                    <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-relaxed">
                        By 2030, we will be the primary gateway through which Zimbabwean students access world-class education—transforming aspiration into achievement, one student at a time.
                    </p>
                </div>
            </section>

            {/* 4. Goals & Objectives - The Manifesto */}
            <section className="py-16 md:py-20 lg:py-32 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-12 md:mb-16 lg:mb-20 text-center">
                        Our Core Values
                    </h2>

                    <div className="space-y-16 md:space-y-20 lg:space-y-24">
                        {/* Value 01 */}
                        <div className="relative">
                            <div className="absolute -left-2 sm:-left-4 md:-left-8 top-0 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold text-slate-200 leading-none select-none">
                                01
                            </div>
                            <div className="relative z-10 pl-12 sm:pl-16 md:pl-32">
                                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                                    <Target className="w-8 h-8 md:w-10 md:h-10 text-orange-500 flex-shrink-0 mt-1" />
                                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                                        Transparency
                                    </h3>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                                    We operate with complete clarity. No hidden fees. No false promises. Every student and family deserves to understand exactly what they're paying for, what's possible, and what the process entails. We tell the truth, even when it's difficult.
                                </p>
                            </div>
                        </div>

                        {/* Value 02 */}
                        <div className="relative">
                            <div className="absolute -left-2 sm:-left-4 md:-left-8 top-0 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold text-slate-200 leading-none select-none">
                                02
                            </div>
                            <div className="relative z-10 pl-12 sm:pl-16 md:pl-32">
                                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                                    <Shield className="w-8 h-8 md:w-10 md:h-10 text-orange-500 flex-shrink-0 mt-1" />
                                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                                        Integrity
                                    </h3>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                                    We do not fabricate credentials. We do not embellish stories. We do not chase rankings for rankings' sake. Instead, we help students present their authentic selves in the most compelling way possible—because genuine stories are the most powerful.
                                </p>
                            </div>
                        </div>

                        {/* Value 03 */}
                        <div className="relative">
                            <div className="absolute -left-2 sm:-left-4 md:-left-8 top-0 text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] font-bold text-slate-200 leading-none select-none">
                                03
                            </div>
                            <div className="relative z-10 pl-12 sm:pl-16 md:pl-32">
                                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-orange-500 flex-shrink-0 mt-1" />
                                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                                        Unwavering Support
                                    </h3>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                                    From the first consultation to the day of departure, we are with you. This is not a transactional service—it's a partnership. We are invested in your success, your growth, and your future. When you succeed, we succeed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Leadership Bridge - CTA */}
            <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
                        Guided by Experience. Led by Dr. Tendai Mavundutse.
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                        RIPEC was founded by Zimbabwe's former Director of National Scholarships, a leader with four decades of experience in education and student placement at the highest levels of government.
                    </p>
                    <Link
                        href="/profile"
                        className="inline-flex items-center gap-2 md:gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-none transition-all duration-300 text-base md:text-lg group"
                    >
                        Meet Our Director
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
