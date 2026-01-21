import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import Destinations from "@/components/home/Destinations";
import PartnersMarquee from "@/components/home/PartnersMarquee";

export default function Home() {
    return (
        <main>
            <Hero />
            <ServicesGrid />
            <Destinations />
            <PartnersMarquee />
        </main>
    );
}
