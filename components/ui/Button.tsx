interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    className?: string;
}

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const baseStyles =
        "font-semibold px-8 py-4 rounded-lg transition-opacity hover:opacity-90";

    const variantStyles = {
        primary: "bg-ripec-gold text-black",
        secondary:
            "border-2 border-ripec-primary text-ripec-primary hover:bg-ripec-primary hover:text-white",
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedStyles}>
                {children}
            </a>
        );
    }

    return <button className={combinedStyles}>{children}</button>;
}
