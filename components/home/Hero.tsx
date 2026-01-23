"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = ["/images/hero-1.jpg", "/images/hero-2.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImage === index ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent sm:bg-gradient-to-t sm:from-black/70 sm:via-black/50 sm:to-transparent md:bg-gradient-to-r z-10" />

            <div className="relative z-20 h-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-start">
                    <div className="w-full md:w-1/2 lg:w-5/12 ml-0">
                        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight">
                            Your{" "}
                            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                                Gateway
                            </span>{" "}
                            to Global Education
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                            We help students in Zimbabwe access 50–100% tuition-free
                            scholarships at top international universities. Start
                            your journey today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href="https://wa.me/263772644806"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                            >
                                Get Free Consultation
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                href="/destinations"
                                className="inline-flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 border-2 border-white/40 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white/20 hover:border-white/60 transition-all duration-300 text-sm sm:text-base"
                            >
                                View Study Destinations
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
