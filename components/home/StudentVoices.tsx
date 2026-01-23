"use client";

import { useState } from "react";
import { Play, X, Star } from "lucide-react";
import Image from "next/image";

const videos = [
    {
        id: 1,
        name: "Pearl Tendaishe Munjeri",
        university: "Chandigarh University, India",
        thumbnail: "/images/student1.jpg",
        youtubeId: "NlLIl4OMJFY", // Replace with actual YouTube video ID
    },
    {
        id: 2,
        name: "Matiyeuka Martin Munyenyiwa",
        university: "Chandigarh University, India",
        thumbnail: "/images/student2.jpg",
        youtubeId: "6IR_ju4H0wQ", // Replace with actual YouTube video ID
    },
];

const quotes = [
    {
        id: 1,
        name: "Tanaka Mutasa",
        destination: "India",
        flag: "🇮🇳",
        quote: "RIPEC made my dream of studying medicine a reality. The scholarship they secured covered 100% of my tuition!",
        avatar: "/images/avatar1.jpg",
    },
    {
        id: 2,
        name: "Chipo Ndlovu",
        destination: "Malaysia",
        flag: "🇲🇾",
        quote: "From visa to accommodation, they handled everything. I felt supported every step of the way.",
        avatar: "/images/avatar2.jpg",
    },
    {
        id: 3,
        name: "Brian Sibanda",
        destination: "UAE",
        flag: "🇦🇪",
        quote: "The pre-departure briefing was invaluable. I knew exactly what to expect when I landed in Dubai.",
        avatar: "/images/avatar3.jpg",
    },
];

export default function StudentVoices() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const openVideo = (youtubeId: string) => {
        setActiveVideo(youtubeId);
    };

    const closeVideo = () => {
        setActiveVideo(null);
    };

    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
                        Don't Just Take Our Word For It.
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Hear from Zimbabwean students currently studying abroad.
                    </p>
                </div>

                {/* Row 1: Video Testimonials */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group aspect-video bg-gray-900"
                            onClick={() => openVideo(video.youtubeId)}
                        >
                            {/* Layer 1: Ambient Background (Blurred) */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={video.thumbnail}
                                    alt=""
                                    fill
                                    className="w-full h-full object-cover blur-xl scale-110 opacity-60 brightness-50"
                                />
                            </div>

                            {/* Layer 2: The Subject (Sharp Pillar) */}
                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <Image
                                    src={video.thumbnail}
                                    alt={`${video.name} testimonial`}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Layer 3: Overlay (Gradient + Text + Button) */}
                            <div className="absolute inset-0 z-20">
                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" />
                                    </div>
                                </div>

                                {/* Student Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white font-bold text-xl mb-1">
                                        {video.name}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {video.university}
                                    </p>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2: Quote Tiles */}
                <div className="grid md:grid-cols-3 gap-6">
                    {quotes.map((quote) => (
                        <div
                            key={quote.id}
                            className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Header with Avatar */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                                    {quote.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900">
                                        {quote.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {quote.destination}
                                    </p>
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                                "{quote.quote}"
                            </p>

                            {/* Star Rating */}
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-orange-500"
                                        fill="currentColor"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeVideo}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeVideo}
                            className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                            aria-label="Close video"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* YouTube Embed */}
                        <iframe
                            className="w-full h-full rounded-xl shadow-2xl"
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                            title="Student Testimonial"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
