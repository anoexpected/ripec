"use client";

import { MapPin, Phone, Mail, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Contact() {
    const searchParams = useSearchParams();
    const destinationParam = searchParams.get("destination");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        destination: "",
        service: "",
        message: "",
    });

    // Auto-fill destination from URL parameter
    useEffect(() => {
        if (destinationParam) {
            setFormData(prev => ({ ...prev, destination: destinationParam }));
        }
    }, [destinationParam]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.phone) {
            alert("Please fill in your name and phone number");
            return;
        }

        setIsSubmitting(true);

        // Format WhatsApp message with proper structure
        const message = `*New Consultation Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Destination:* ${formData.destination || "Not specified"}\n` +
            `*Service:* ${formData.service || "Not specified"}\n` +
            `*Message:* ${formData.message || "No additional message"}`;

        const whatsappUrl = `https://wa.me/263772644806?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappUrl, "_blank");

        // Reset form and loading state after a short delay
        setTimeout(() => {
            setIsSubmitting(false);
            // Optionally reset form
            // setFormData({ name: "", phone: "", destination: "", service: "", message: "" });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="bg-white min-h-screen pt-28">
            <div className="grid lg:grid-cols-[40%,60%] min-h-[calc(100vh-7rem)]">
                {/* Left Column - Dark Section */}
                <div className="bg-slate-950 p-8 lg:p-20 flex items-center relative overflow-hidden">
                    {/* Decorative blur circles */}
                    <div className="absolute top-10 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 -right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>

                    <div className="max-w-lg mx-auto relative z-10 w-full">
                        <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tight mb-4">
                            Let's Build Your Future.
                        </h1>
                        <p className="text-slate-400 text-xl mb-12">
                            We are ready to guide you.
                        </p>

                        {/* Contact Glass Stack */}
                        <div className="space-y-4 mb-8">
                            {/* Address Card */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                                    <MapPin className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm mb-1">Visit Us</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Stand No. 9468, Hatcliffe Extension,<br />
                                        Borrowdale, Harare, Zimbabwe
                                    </p>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                                    <Phone className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm mb-1">Call Us</h3>
                                    <p className="text-slate-400 text-xs">+263 772 644 806</p>
                                    <p className="text-slate-400 text-xs">+263 776 832 168</p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                                    <Mail className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm mb-1">Email Us</h3>
                                    <p className="text-slate-400 text-xs">info@ripec.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 inline-flex items-center gap-3">
                            <Shield className="w-5 h-5 text-orange-400" />
                            <div>
                                <p className="text-white font-semibold text-sm">Government Registered</p>
                                <p className="text-slate-400 text-xs">License: 4401/2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Light Section with Form */}
                <div className="bg-gray-50 p-8 lg:p-16 flex items-center justify-center">
                    <div className="w-full max-w-2xl mb-24 lg:mb-0">
                        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                Request Free Consultation
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 rounded-xl px-5 py-4 transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* WhatsApp Number */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        WhatsApp Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 rounded-xl px-5 py-4 transition-all outline-none"
                                        placeholder="+263 772 644 806"
                                    />
                                </div>

                                {/* Destination */}
                                <div>
                                    <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Interested Destination *
                                    </label>
                                    <select
                                        id="destination"
                                        name="destination"
                                        required
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 rounded-xl px-5 py-4 transition-all outline-none"
                                    >
                                        <option value="">Select a destination</option>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="UAE">UAE</option>
                                        <option value="Not Sure">Not Sure</option>
                                    </select>
                                </div>

                                {/* Service Needed */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Service Needed *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 rounded-xl px-5 py-4 transition-all outline-none"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="Admissions">Admissions</option>
                                        <option value="Visa">Visa</option>
                                        <option value="Career Guidance">Career Guidance</option>
                                        <option value="Full Support">Full Support Package</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Tell us about yourself
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 rounded-xl px-5 py-4 transition-all outline-none resize-none"
                                        placeholder="Tell us about your academic background, goals, and any questions you have..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:to-orange-500 text-white font-bold text-lg py-5 rounded-xl shadow-xl shadow-orange-500/20 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? "Redirecting to WhatsApp..." : "Request Free Consultation"}
                                </button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    We'll respond within 24 hours via WhatsApp
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
