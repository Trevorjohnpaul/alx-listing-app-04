interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="text-lg font-semibold mt-2">{property.title}</h3>

      <p className="text-gray-500">{property.location}</p>

      <p className="text-blue-600 font-bold mt-1">${property.price} / night</p>
    </div>
  );
}
