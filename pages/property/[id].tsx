import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get<Property>(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading property...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}
