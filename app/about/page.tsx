"use client";

import { GraduationCap, Award, ScrollText, Stamp } from "lucide-react";
import Image from "next/image";

const careerMilestones = [
    {
        level: 1,
        title: "Director: Presidential & National Scholarships",
        description: "Led the administration of Zimbabwe's most prestigious scholarship programs, overseeing the placement of hundreds of students annually in top international universities.",
    },
    {
        level: 2,
        title: "Deputy Director: Office of the Vice President",
        description: "Advised on national education policy at the highest levels of government, shaping strategic initiatives that impacted the entire education sector.",
    },
    {
        level: 3,
        title: "Provincial & District Leadership",
        description: "Managed education quality assurance across multiple districts, conducting rigorous evaluations and implementing comprehensive frameworks.",
    },
    {
        level: 4,
        title: "Head of School & Teacher",
        description: "Built a foundation of excellence from the classroom to administrative leadership in both primary and secondary education.",
    },
];

const credentials = [
    {
        icon: GraduationCap,
        degree: "PhD",
        field: "Educational Administration",
        institution: "University of Zimbabwe",
    },
    {
        icon: Award,
        degree: "Master of Education",
        field: "Planning & Policy",
        institution: "University of Zimbabwe",
    },
    {
        icon: ScrollText,
        degree: "Bachelor of Education",
        field: "Administration",
        institution: "University of Zimbabwe",
    },
];

export default function About() {
    return (
        <main className="bg-white">
            {/* Hero Section - The Cover Story */}
            <section className="bg-slate-950 min-h-screen pt-32 pb-0 relative overflow-hidden">
                {/* Main Container Overlay - The Seam Eraser */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 via-60% to-transparent z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 h-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                        {/* Text Left */}
                        <div className="py-12 relative z-30">
                            <p className="text-orange-500 font-bold tracking-widest text-sm mb-6">
                                THE FOUNDER'S PROFILE
                            </p>
                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                                The Architect of Zimbabwe's Scholarship Strategy.
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-xl">
                                Dr. Tendai Mavundutse served as the Director of National Scholarships and in the Vice President's Office. Now, she works for you.
                            </p>
                        </div>

                        {/* Image Right */}
                        <div className="relative h-[600px] lg:h-screen">
                            <div className="relative h-full rounded-t-2xl lg:rounded-none overflow-hidden">
                                {/* Director image */}
                                <Image
                                    src="/images/director.jpg"
                                    alt="Dr. Tendai Mavundutse"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Image Container Vignette - The Grounding */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Legacy Track - Career Timeline */}
            <section className="py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            A Career Defined by Impact
                        </h2>
                        <p className="text-xl text-gray-600">
                            Four decades of shaping educational excellence
                        </p>
                    </div>

                    <div className="relative">
                        {/* Solid vertical line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>

                        <div className="space-y-16 ml-12">
                            {careerMilestones.map((milestone, index) => (
                                <div key={index} className="relative group">
                                    {/* Level indicator dot - Bullseye design */}
                                    <div className="absolute -left-[3.25rem] top-2 w-10 h-10 rounded-full bg-orange-500 border-4 border-orange-100 shadow-lg flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                    </div>

                                    <div className={`hover:bg-slate-50 transition-all duration-300 rounded-xl p-4 -ml-4 ${milestone.level === 1 ? 'mb-6' :
                                        milestone.level === 2 ? 'mb-5' :
                                            milestone.level === 3 ? 'mb-4' :
                                                'mb-3'
                                        }`}>
                                        <h3 className={`font-serif font-bold text-slate-900 mb-3 ${milestone.level === 1 ? 'text-4xl' :
                                            milestone.level === 2 ? 'text-3xl' :
                                                milestone.level === 3 ? 'text-2xl' :
                                                    'text-xl'
                                            }`}>
                                            {milestone.title}
                                        </h3>
                                        <p className={`text-gray-600 leading-relaxed ${milestone.level === 1 ? 'text-lg' :
                                            milestone.level === 2 ? 'text-base' :
                                                'text-sm'
                                            }`}>
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Credentials - The Seal of Quality */}
            <section className="py-32 bg-stone-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Academic Credentials
                        </h2>
                        <p className="text-xl text-gray-600">
                            Formally recognized expertise in educational leadership
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {credentials.map((credential, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-none border border-slate-100 border-b-0 p-10 relative shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Official stamp corner */}
                                <div className="absolute top-4 right-4">
                                    <Stamp className="w-12 h-12 text-orange-500/20" />
                                </div>

                                {/* Icon */}
                                <div className="mb-8">
                                    <credential.icon className="w-16 h-16 text-orange-500" />
                                </div>

                                {/* Content */}
                                <h3 className="font-serif text-3xl font-bold text-slate-900 mb-3">
                                    {credential.degree}
                                </h3>
                                <p className="text-lg font-semibold text-gray-700 mb-2">
                                    {credential.field}
                                </p>
                                <p className="text-gray-600">
                                    {credential.institution}
                                </p>

                                {/* Bottom border accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Mission Quote */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    {/* Large opening quote mark */}
                    <div className="text-orange-500 text-9xl font-serif leading-none mb-8">"</div>

                    <blockquote className="font-serif text-3xl md:text-4xl text-white leading-relaxed mb-12">
                        I did not start RIPEC to be another agency. I started it because I know exactly why students get rejected, and I know exactly how to get them accepted.
                    </blockquote>

                    {/* Signature */}
                    <div className="border-t border-white/20 pt-8">
                        <p className="text-5xl font-serif italic text-white mb-2" style={{ fontFamily: 'cursive' }}>
                            Dr. T. Mavundutse
                        </p>
                        <p className="text-orange-500 font-semibold tracking-wide">
                            Founder & Director, RIPEC
                        </p>
                    </div>
                </div>
            </section>

            {/* Legal Registration Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="border-l-8 border-orange-500 pl-8 py-6">
                        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                            Legal Registration
                        </h2>
                        <p className="text-lg text-gray-700 mb-3">
                            Registered in Zimbabwe under the Companies and Other Business Entities Act.
                        </p>
                        <p className="text-lg text-gray-700 mb-3">
                            <span className="font-semibold text-orange-600">
                                Registration Number: 4401/2024
                            </span>
                        </p>
                        <p className="text-lg text-gray-700">
                            Legal name:{" "}
                            <span className="font-semibold">
                                Resume International Pathway (Private) Limited
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
