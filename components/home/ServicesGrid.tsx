import { Compass, GraduationCap, Plane, HeartHandshake } from "lucide-react";

export default function ServicesGrid() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">
                        Comprehensive Support at Every Step
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        From your first consultation to your graduation day, we are with you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-orange-200 transition-all duration-300">
                        <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                            <Compass size={28} className="text-orange-600" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                            Career Guidance
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Tailored consultations to align your subject combinations with global career opportunities.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-orange-200 transition-all duration-300">
                        <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                            <GraduationCap size={28} className="text-orange-600" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                            Scholarships & Admissions
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We negotiate 50–100% tuition-free scholarships on your behalf and manage the application process.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-orange-200 transition-all duration-300">
                        <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                            <Plane size={28} className="text-orange-600" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                            Visa & Travel
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Stress-free visa assistance, flight booking support, and pre-departure briefings.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-orange-200 transition-all duration-300">
                        <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                            <HeartHandshake size={28} className="text-orange-600" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                            Arrival & Support
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Airport pick-up, accommodation setup, and cultural integration guides to help you settle in.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
