import Link from "next/link";
import { MapPin, Phone, Mail, CheckCircle, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Brand Identity */}
                    <div>
                        <h3 className="font-heading font-bold text-xl text-white tracking-wide mb-4">
                            RIPEC
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Your trusted gateway to global education. We help you navigate scholarships, visas, and admissions seamlessly.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-white tracking-wide mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-slate-400 hover:text-orange-500 transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-slate-400 hover:text-orange-500 transition-colors duration-300">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/destinations" className="text-sm text-slate-400 hover:text-orange-500 transition-colors duration-300">
                                    Study Destinations
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-slate-400 hover:text-orange-500 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-slate-400 hover:text-orange-500 transition-colors duration-300">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h3 className="font-heading font-semibold text-white tracking-wide mb-4">
                            Get in Touch
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-400">
                                    Stand No. 9468, Hatcliffe Extension, Harare, Zimbabwe
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-slate-400">+263 772 644 806</span>
                                    <span className="text-sm text-slate-400">+263 776 832 168</span>
                                    <span className="text-sm text-slate-400">+263 715 694 979</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-400">
                                    info@rintpathway.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal & Trust */}
                    <div>
                        <h3 className="font-heading font-semibold text-white tracking-wide mb-4">
                            Certifications
                        </h3>
                        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-white mb-1">
                                        Government Registered
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        Reg Number: 4401/2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-400">
                            © {new Date().getFullYear()} Resume International Pathway (Private) Limited.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.facebook.com/people/Ripec-Pathway/61587120987663/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/resumeinternational/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
