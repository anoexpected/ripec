export default function Contact() {
    return (
        <main className="bg-ripec-white py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="font-heading font-bold text-5xl text-ripec-navy mb-12 text-center">
                    Contact Us
                </h1>

                <section className="mb-12">
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        We welcome inquiries from students and parents. Reach
                        out to us using the contact details below for guidance
                        and support.
                    </p>
                </section>

                <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-8">
                        <h2 className="font-heading font-bold text-2xl text-ripec-navy mb-4">
                            Office Address
                        </h2>
                        <p className="text-lg text-gray-700">
                            Stand No. 9468 UZ Stands
                        </p>
                        <p className="text-lg text-gray-700">
                            Hatcliffe Extension
                        </p>
                        <p className="text-lg text-gray-700">
                            Borrowdale, Harare, Zimbabwe
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-heading font-bold text-2xl text-ripec-navy mb-4">
                            Phone Numbers
                        </h2>
                        <p className="text-lg text-gray-700">
                            +263 772 644 806
                        </p>
                        <p className="text-lg text-gray-700">
                            +263 776 832 168
                        </p>
                    </div>

                    <div>
                        <h2 className="font-heading font-bold text-2xl text-ripec-navy mb-4">
                            WhatsApp
                        </h2>
                        <a
                            href="https://wa.me/263772644806"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-ripec-gold text-black font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </section>

                <section className="text-center">
                    <p className="text-sm text-gray-600">
                        Our team is available to assist you with your study
                        abroad inquiries.
                    </p>
                </section>
            </div>
        </main>
    );
}
