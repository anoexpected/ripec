import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "RIPEC | Resume International Pathway Education Consultancy",
    description: "Your trusted gateway to global education. We navigate scholarships, visas, and admissions for Zimbabwe students to India, China, Malaysia, and the UAE.",
    icons: {
        icon: "/logo.png",
    },
    openGraph: {
        title: "RIPEC - Global Education Consultancy",
        description: "50-100% Scholarships available. Start your study abroad journey today.",
        images: ["/images/services.png"],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${inter.variable} font-sans bg-ripec-white`}
            >
                <Navbar />
                {children}
                <Footer />
                <WhatsAppFloat />
            </body>
        </html>
    );
}
