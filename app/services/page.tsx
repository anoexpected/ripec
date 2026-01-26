"use client";

import { Compass, Award, Plane, Home, Shield, Sparkles, Users, ArrowRight, BookOpen, FileText, Search, BarChart, PenTool, Award as AwardIcon } from "lucide-react";
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
        subtitle: "We're there beyond graduation",
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
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        More Than Just an Application.
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        A complete ecosystem of support from your first question to your graduation day.
                    </p>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            The Journey Blueprint
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
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
                                        className="relative bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-12 hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-8 items-start">
                                            {/* Icon Section */}
                                            <div className="flex flex-col items-center md:items-start">
                                                <div className="bg-orange-50 text-orange-600 rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4 relative z-10">
                                                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                                                </div>
                                                <span className="text-xs md:text-sm font-semibold text-orange-600 uppercase tracking-wider">
                                                    {service.chapter}
                                                </span>
                                            </div>

                                            {/* Content Section */}
                                            <div>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                                                    {service.headline}
                                                </h3>
                                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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
            <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                        Ready to start your Chapter 1?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 md:mb-8 max-w-2xl mx-auto">
                        Book a free consultation with our education counselors and begin your journey today.
                    </p>
                    <button
                        onClick={() => router.push('/contact?service=General%20Consultation')}
                        className="inline-flex items-center gap-2 md:gap-3 bg-white text-orange-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                        Book Free Consultation
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>

                {/* Wave Divider - Orange to Dark Navy Transition */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-full h-12 md:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-950"></path>
                    </svg>
                </div>
            </section>

            {/* Research Academy Section - Premium Tier (Merged with Footer Visually) */}
            <section className="pt-20 pb-0 bg-slate-950 relative overflow-hidden">
                {/* Subtle academic pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
                            ACADEMIC EXCELLENCE
                        </p>
                        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                            Research Coaching & Thesis Defense.
                        </h2>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Led by Dr. Mavundutse. Face-to-face sessions in Zimbabwe or Online for global students.
                            Specialized for Education majors, but open to all fields.
                        </p>

                        {/* Delivery Mode Badge */}
                        <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/5 border border-white/10 rounded-full px-6 sm:px-8 py-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🏛️</span>
                                <span className="text-white font-semibold text-sm sm:text-base">In-Person (Zimbabwe)</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">💻</span>
                                <span className="text-white font-semibold text-sm sm:text-base">Online (Global)</span>
                            </div>
                        </div>
                    </div>

                    {/* Curriculum Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1: Research Fundamentals */}
                        <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            <div className="bg-orange-500/10 text-orange-400 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Research Fundamentals
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                What is research? Types of research. Building a solid foundation for academic inquiry.
                            </p>
                        </div>

                        {/* Card 2: Proposal Development */}
                        <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            <div className="bg-orange-500/10 text-orange-400 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Proposal Development
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Crafting winning research proposals that get approved. Structure, clarity, and persuasion.
                            </p>
                        </div>

                        {/* Card 3: Fieldwork & Methodology */}
                        <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            <div className="bg-orange-500/10 text-orange-400 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Fieldwork & Methodology
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Executing the research. Data collection strategies, ethical considerations, and rigor.
                            </p>
                        </div>

                        {/* Card 4: Data & Findings */}
                        <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            <div className="bg-orange-500/10 text-orange-400 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Data & Findings
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Presentation of research findings. Analysis techniques, visualization, and interpretation.
                            </p>
                        </div>

                        {/* Card 5: Report Writing */}
                        <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            <div className="bg-orange-500/10 text-orange-400 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <PenTool className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Report Writing
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Structuring the final thesis. Academic writing standards, citations, and coherence.
                            </p>
                        </div>

                        {/* Card 6: PhD Viva Voce Prep */}
                        <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                            <div className="bg-orange-500/10 text-orange-400 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <AwardIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                PhD Viva Voce Prep
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Defense preparation for doctoral candidates. Confidence, clarity, and command of your research.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
