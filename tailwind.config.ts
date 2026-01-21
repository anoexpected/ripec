import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "ripec-navy": "#0f172a",
                "ripec-primary": "#1e40af",
                "ripec-sky": "#0ea5e9",
                "ripec-gold": "#f59e0b",
                "ripec-white": "#f8fafc",
            },
            fontFamily: {
                heading: ["Montserrat"],
                sans: ["Inter"],
            },
            animation: {
                scroll: "scroll 40s linear infinite",
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
