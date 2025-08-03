import React, { useEffect, useState } from "react";
import { CollectionCard } from "../../components/common/CollectionCard";
import type { Listing } from "../../types/listing";

const tabs = ["Newest", "Most Popular", "Best Sellers"];

const ExclusiveCollection: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/listings`);
        const data = await res.json();
        const nailsListings = data.filter(
          (item: Listing) => item.categoryId?.slug?.toLowerCase() === "nails"
        );
        setListings(nailsListings);
      } catch (err) {
        console.error("Failed to fetch listings:", err);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 py-12 bg-white min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        Discover Our <br />
        <span className="text-pink-800">Exclusive Collection</span>
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-4 my-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              idx === 0
                ? "bg-pink-600 text-white shadow hover:bg-pink-700"
                : "bg-pink-100 text-pink-800 hover:bg-pink-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         
        {listings.length > 0 ? (
          listings.map((listing) => <CollectionCard key={listing._id} listing={listing} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">No listings found.</p>
        )}
      </div>
    </div>
  );
};

export default ExclusiveCollection;
