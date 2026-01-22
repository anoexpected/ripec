"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

export default function DirectorNote() {
    return (
        <section className="bg-stone-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                                        <Award className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">PhD in Educational</p>
                                        <p className="text-sm font-bold text-slate-900">Administration</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Message */}
                    <div className="order-1 lg:order-2">
                        {/* Eyebrow */}
                        <p className="text-orange-500 font-bold tracking-widest text-sm mb-3">
                            MEET YOUR GUIDE
                        </p>

                        {/* Name (Serif Font) */}
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                            Dr. Tendai Mavundutse
                        </h2>

                        {/* Power Titles */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                                <p className="text-lg text-slate-700 font-medium">
                                    Former Director: Presidential & National Scholarships
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                                <p className="text-lg text-slate-700 font-medium">
                                    Former Deputy Director: Office of the Vice President
                                </p>
                            </div>
                        </div>

                        {/* The Narrative */}
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            "With decades of experience shaping Zimbabwe's national education strategy,
                            I founded RIPEC to ensure every student has access to global opportunities.
                            I have sat in the offices where decisions are made—now, I am using that
                            experience to guide you."
                        </p>

                        {/* Signature */}
                        <div className="mb-8">
                            <p className="text-3xl font-serif italic text-slate-800">
                                Dr. T. Mavundutse
                            </p>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            View Full Professional Profile
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
