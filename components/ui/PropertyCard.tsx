interface PropertyCardProps {
    name: string;
    image: string;
    price: number;
    rating: number;
}

export default function PropertyCard({
    name,
    image,
    price,
    rating,
}: PropertyCardProps) {
    return (
        <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">${price}/night</p>
                <p className="text-sm text-yellow-500">★ {rating}</p>
            </div>
        </div>
    );
}
