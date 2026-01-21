import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/263772644806"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#25D366' }}
        >
            <MessageCircle size={28} />
        </a>
    );
}
