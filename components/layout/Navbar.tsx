"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center justify-start">
                        <div className="bg-white/90 backdrop-blur-sm shadow-sm px-4 py-2 rounded-lg">
                            <Image
                                src="/logo.png"
                                alt="RIPEC Logo"
                                width={180}
                                height={60}
                                priority
                            />
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`transition-colors ${pathname === "/"
                                    ? isScrolled
                                        ? "text-ripec-primary font-semibold"
                                        : "text-white font-semibold"
                                    : isScrolled
                                        ? "text-gray-700 hover:text-ripec-primary"
                                        : "text-white/90 hover:text-white"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className={`transition-colors ${pathname === "/services"
                                    ? isScrolled
                                        ? "text-ripec-primary font-semibold"
                                        : "text-white font-semibold"
                                    : isScrolled
                                        ? "text-gray-700 hover:text-ripec-primary"
                                        : "text-white/90 hover:text-white"
                                }`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/destinations"
                            className={`transition-colors ${pathname === "/destinations"
                                    ? isScrolled
                                        ? "text-ripec-primary font-semibold"
                                        : "text-white font-semibold"
                                    : isScrolled
                                        ? "text-gray-700 hover:text-ripec-primary"
                                        : "text-white/90 hover:text-white"
                                }`}
                        >
                            Study Destinations
                        </Link>
                        <Link
                            href="/contact"
                            className={`transition-colors ${pathname === "/contact"
                                    ? isScrolled
                                        ? "text-ripec-primary font-semibold"
                                        : "text-white font-semibold"
                                    : isScrolled
                                        ? "text-gray-700 hover:text-ripec-primary"
                                        : "text-white/90 hover:text-white"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a
                            href="https://wa.me/263772644806"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-ripec-gold text-black font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            WhatsApp Us
                        </a>
                        <button
                            className={`md:hidden transition-colors ${isScrolled ? "text-ripec-navy" : "text-white"
                                }`}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
