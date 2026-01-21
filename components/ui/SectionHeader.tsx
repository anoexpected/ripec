interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

export default function SectionHeader({
    title,
    subtitle,
    center = false,
}: SectionHeaderProps) {
    const alignment = center ? "text-center" : "";

    return (
        <div className={`mb-12 ${alignment}`}>
            <h2 className="font-heading font-bold text-4xl text-ripec-navy mb-4">
                {title}
            </h2>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
    );
}
