export default function About() {
    return (
        <main className="bg-ripec-white py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="font-heading font-bold text-5xl text-ripec-navy mb-12 text-center">
                    About RIPEC
                </h1>

                <section className="mb-12">
                    <h2 className="font-heading font-bold text-3xl text-ripec-navy mb-4">
                        Who We Are
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Resume International Pathway Educational Consultancy
                        (RIPEC) is a registered education consultancy based in
                        Zimbabwe. We assist students and their families in
                        accessing international education opportunities through
                        recognized universities and structured scholarship
                        programs.
                    </p>
                </section>

                <section className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-ripec-gold">
                    <h2 className="font-heading font-bold text-3xl text-ripec-navy mb-4">
                        Legal Registration
                    </h2>
                    <p className="text-lg text-gray-700 mb-3">
                        Registered in Zimbabwe under the Companies and Other
                        Business Entities Act.
                    </p>
                    <p className="text-lg text-gray-700 mb-3">
                        <span className="font-semibold text-ripec-gold">
                            Registration Number: 4401/2024
                        </span>
                    </p>
                    <p className="text-lg text-gray-700">
                        Legal name:{" "}
                        <span className="font-semibold">
                            Resume International Pathway (Private) Limited
                        </span>
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="font-heading font-bold text-3xl text-ripec-navy mb-4">
                        What We Do
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        RIPEC provides guidance and support throughout the
                        international study process, including career guidance,
                        university applications, scholarship assistance, visa
                        preparation, travel arrangements, and post-arrival
                        support.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="font-heading font-bold text-3xl text-ripec-navy mb-4">
                        Our Commitment
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-ripec-sky mr-3 mt-1">
                                •
                            </span>
                            <span className="text-lg text-gray-700">
                                Transparent and ethical guidance
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-ripec-sky mr-3 mt-1">
                                •
                            </span>
                            <span className="text-lg text-gray-700">
                                Student and parent support at every stage
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-ripec-sky mr-3 mt-1">
                                •
                            </span>
                            <span className="text-lg text-gray-700">
                                Clear communication and documentation
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-ripec-sky mr-3 mt-1">
                                •
                            </span>
                            <span className="text-lg text-gray-700">
                                Continued follow-up after student departure
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
