"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

export default function DirectorNote() {
    return (
        <section className="bg-stone-50 py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Column: The Portrait */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/director.jpg"
                                alt="Dr. Tendai Mavundutse"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover"
                            />

                            {/* Power Badge (Bottom-Right Overlay) */}
                            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-white/90 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-2.5 sm:p-4 shadow-xl max-w-xs">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm font-bold text-slate-900">PhD in Educational</p>
                                        <p className="text-xs sm:text-sm font-bold text-slate-900">Administration</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Message */}
                    <div className="order-1 lg:order-2">
                        {/* Eyebrow */}
                        <p className="text-orange-500 font-bold tracking-widest text-xs sm:text-sm mb-2 sm:mb-3">
                            MEET YOUR GUIDE
                        </p>

                        {/* Name (Serif Font) */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 sm:mb-6">
                            Dr. Tendai Mavundutse
                        </h2>

                        {/* Power Titles */}
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                                <p className="text-base sm:text-lg text-slate-700 font-medium">
                                    Former Director: Presidential & National Scholarships
                                </p>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                                <p className="text-base sm:text-lg text-slate-700 font-medium">
                                    Former Deputy Director: Office of the Vice President
                                </p>
                            </div>
                        </div>

                        {/* The Narrative */}
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                            "With decades of experience shaping Zimbabwe's national education strategy,
                            I founded RIPEC to ensure every student has access to global opportunities.
                            I have sat in the offices where decisions are made-now, I am using that
                            experience to guide you."
                        </p>

                        {/* Signature */}
                        <div className="mb-6 sm:mb-8">
                            <p className="text-2xl sm:text-3xl font-serif italic text-slate-800">
                                Dr. T. Mavundutse
                            </p>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/profile"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            View Full Professional Profile
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
