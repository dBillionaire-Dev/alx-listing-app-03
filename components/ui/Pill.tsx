interface PillProps {
    label: string;
    onClick?: () => void;
    isActive?: boolean;
}

export default function Pill({ label, onClick, isActive }: PillProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full border text-sm font-medium ${isActive
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
        >
            {label}
        </button>
    );
}
