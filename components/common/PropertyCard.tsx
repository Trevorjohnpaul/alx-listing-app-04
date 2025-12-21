import React from "react";
import type { PropertyProps } from "../../interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {property.discount ? (
          <div className="absolute left-3 top-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {property.discount}% off
          </div>
        ) : null}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <div className="text-sm text-gray-500">
          {property.address.city}, {property.address.state} ·{" "}
          {property.address.country}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-indigo-600 font-semibold">
            KES {property.price}
          </div>
          <div className="text-sm text-gray-600">
            ★ {property.rating.toFixed(2)}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {property.category.map((c) => (
            <span
              key={c}
              className="text-xs border px-2 py-1 rounded text-gray-600"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
