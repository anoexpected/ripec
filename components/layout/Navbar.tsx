"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Pages with dark hero backgrounds where white text is needed
    const hasDarkHero = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/destinations", label: "Study Destinations" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md border-b border-white/20 py-3"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Brand Badge */}
                        <Link href="/" className="flex items-center">
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 px-7 py-4 flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="RIPEC Logo"
                                    width={320}
                                    height={100}
                                    className="h-16 md:h-18 w-auto object-contain"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-semibold tracking-wide transition-all duration-300 ${pathname === link.href
                                        ? isScrolled || !hasDarkHero
                                            ? "text-orange-500"
                                            : "text-white drop-shadow-md"
                                        : isScrolled || !hasDarkHero
                                            ? "text-slate-800 hover:text-orange-500"
                                            : "text-white/90 hover:text-white drop-shadow-sm"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Action Button & Mobile Menu Toggle */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://wa.me/263772644806"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-2 bg-orange-500 text-white rounded-full px-6 py-2.5 font-bold shadow-lg shadow-orange-500/30 transition-transform hover:-translate-y-0.5"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden transition-colors ${isScrolled || !hasDarkHero ? "text-slate-800" : "text-white"
                                    }`}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl">
                        <div className="flex flex-col h-full pt-24 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`py-4 text-lg font-semibold border-b border-gray-100 transition-colors ${pathname === link.href
                                            ? "text-orange-500 font-bold"
                                            : "text-slate-800 hover:text-orange-500"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-8">
                                <a
                                    href="https://wa.me/263772644806"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-orange-500 text-white rounded-full px-6 py-3 font-bold shadow-lg shadow-orange-500/30"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
