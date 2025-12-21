import type { NextPage } from "next";
import Head from "next/head";
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from "../constants";
import Pill from "../components/common/Pill";
import PropertyCard from "../components/common/PropertyCard";
import { useState } from "react";

const filterLabels = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Beachfront",
  "Pet Friendly",
  "Private Pool",
  "City Center",
];

const Home: NextPage = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  function toggleFilter(label: string) {
    setActiveFilters((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  }

  const filtered = PROPERTYLISTINGSAMPLE.filter((p) => {
    const matchesQuery =
      query.trim() === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.address.city.toLowerCase().includes(query.toLowerCase()) ||
      p.address.country.toLowerCase().includes(query.toLowerCase());

    const matchesFilter =
      activeFilters.length === 0 ||
      activeFilters.some((f) =>
        p.category.some(
          (c) =>
            c.toLowerCase().includes(f.toLowerCase().replace(" ", "")) ||
            c.toLowerCase().includes(f.toLowerCase())
        )
      );

    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <Head>
        <title>Vilis Listings - Find your place</title>
        <meta
          name="description"
          content="Responsive property listing page built with Next.js, TypeScript and Tailwind CSS."
        />
      </Head>

      <section
        className="relative text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="mt-4 text-gray-100 max-w-2xl">
            The best prices for over 2 million properties worldwide.
          </p>

          <div className="mt-8 max-w-xl">
            <div className="flex gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-l-lg px-4 py-2 text-gray-800"
                placeholder="Search city, property name..."
                aria-label="search properties"
              />
              <button className="bg-indigo-600 px-4 rounded-r-lg text-white">
                Search
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {filterLabels.map((label) => (
                <Pill
                  key={label}
                  label={label}
                  active={activeFilters.includes(label)}
                  onClick={() => toggleFilter(label)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Available Properties</h2>
          <div className="text-sm text-gray-600">{filtered.length} results</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.name + p.address.city} property={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
