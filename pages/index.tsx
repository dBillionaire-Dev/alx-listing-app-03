import Image from "next/image";
import { HERO_IMAGE, FILTERS } from "@/constants/images";
import { PROPERTYLISTINGSAMPLE } from "@/constants/propertySample";
import Pill from "@/components/ui/Pill";
import PropertyCard from "@/components/ui/PropertyCard";
import { useState } from "react";

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src={HERO_IMAGE}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, idx) => (
            <PropertyCard key={idx} {...property} />
          ))}
        </div>
      </section>
    </div>
  );
}
