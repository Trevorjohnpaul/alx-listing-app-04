interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-96 object-cover rounded"
      />

      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>

      <p className="text-gray-500 mt-1">{property.location}</p>

      <p className="text-blue-600 font-semibold mt-2">
        ${property.price} / night
      </p>

      <p className="mt-4 text-gray-700">{property.description}</p>
    </div>
  );
}
