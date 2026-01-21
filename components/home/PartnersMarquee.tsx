import Image from "next/image";

const partners = [
    {
        name: "Chandigarh University",
        logo: "/partners/chandigarh-university.png",
    },
    { name: "Global Arcus", logo: "/partners/global-arcus.png" },
    { name: "Britts Imperial", logo: "/partners/britts-imperial.png" },
    { name: "Big Education", logo: "/partners/big-education.png" },
    {
        name: "Swami Vivekanand University",
        logo: "/partners/swami-vivekanand-university.png",
    },
    {
        name: "RNTU Rabindranath Tagore",
        logo: "/partners/rntu-rabindranath-tagore.png",
    },
];

export default function PartnersMarquee() {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-heading font-semibold text-2xl text-center text-gray-500 mb-8">
                    Trusted by Top Institutions
                </h2>

                <div className="relative overflow-hidden">
                    {/* Fade mask on edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                    {/* Scrolling container */}
                    <div className="flex items-center gap-16 animate-scroll">
                        {/* First set of partners */}
                        {partners.map((partner, index) => (
                            <div
                                key={`partner-1-${index}`}
                                className={`flex-shrink-0 group ${partner.name === "Global Arcus"
                                    ? "bg-gray-50 rounded-lg p-4"
                                    : ""
                                    }`}
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={160}
                                    height={64}
                                    className={`h-16 w-auto object-contain transition-all duration-300 ${partner.name === "Global Arcus"
                                        ? "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                                        : "brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100"
                                        }`}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {partners.map((partner, index) => (
                            <div
                                key={`partner-2-${index}`}
                                className={`flex-shrink-0 group ${partner.name === "Global Arcus"
                                    ? "bg-gray-50 rounded-lg p-4"
                                    : ""
                                    }`}
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={160}
                                    height={64}
                                    className={`h-16 w-auto object-contain transition-all duration-300 ${partner.name === "Global Arcus"
                                        ? "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                                        : "brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100"
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
