import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Phone } from 'lucide-react';
import type { Listing, Seller } from '../types/listing';
import { getImageUrl } from '../utils/image';

const ListingDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [listing, setListing] = useState<Listing | null>(null);
    const [seller, setSeller] = useState<Seller | null>(null);
    // const imageBase = import.meta.env.VITE_IMAGE_API || "";

    // const getImageUrl = (path?: string) => {
    //     if (!path) return "https://via.placeholder.com/600x400?text=No+Image";
    //     const cleanBase = imageBase.replace(/\/+$/, "");
    //     const cleanPath = path.replace(/^\/+/, "");
    //     const correctedPath = cleanPath.startsWith("uploads/") ? cleanPath : `uploads/${cleanPath}`;
    //     return `${cleanBase}/${correctedPath}`;
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const listingRes = await fetch(`${import.meta.env.VITE_API_URL}/listings/${id}`);
                const listingData: Listing = await listingRes.json();
                setListing(listingData);

                if (listingData.sellerId) {
                    const sellerRes = await fetch(`${import.meta.env.VITE_API_URL}/sellers`);
                    const sellers: Seller[] = await sellerRes.json();
                    const matchedSeller = sellers.find(
                        (s: Seller) => String(s._id) === String(listingData.sellerId)
                    );
                    setSeller(matchedSeller || null);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!listing) {
        return <div className="p-8 text-center text-gray-600">Loading listing...</div>;
    }

    return (
        <div className="pt-20 pb-16 px-4 max-w-6xl mx-auto bg-white">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Image */}
                <div className="md:w-1/2 w-full">
                    <div className="rounded-xl overflow-hidden border shadow-md">
                        <img
                            src={getImageUrl(listing.images?.[0])}
                            alt={listing.title}
                            className="w-full h-72 md:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right: Description + Seller Info */}
                <div className="md:w-1/2 w-full flex flex-col justify-between">
                    {/* Title + Price */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{listing.title}</h1>
                        <p className="text-2xl font-semibold text-pink-600 mb-4">
                            ${listing.price.toLocaleString()}
                        </p>

                        {/* Description */}
                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 shadow-inner mb-6">
                            <h2 className="text-lg font-semibold text-pink-700 mb-2">Description</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {listing.description}
                            </p>
                        </div>

                        {/* Location */}
                        <div className="mb-6">
                            <h2 className="text-md font-semibold text-gray-700 mb-1">Location</h2>
                            <p className="text-gray-500">Not specified</p>
                        </div>
                    </div>

                    {/* Seller Info (unchanged) */}
                    <div className="bg-pink-50 rounded-xl p-6 border border-pink-200 shadow-sm">
                        <h2 className="text-lg font-bold text-pink-700 mb-4">Seller Info</h2>

                        <div className="text-sm text-gray-700 space-y-1">
                            <p><strong>Name:</strong> {seller?.name || 'Not available'}</p>
                            <p><strong>Email:</strong> {seller?.email || 'Not available'}</p>
                            <p><strong>Phone:</strong> {seller?.phone || 'Not available'}</p>
                        </div>

                        {seller?.phone && (
                            <a
                                href={`tel:${seller.phone}`}
                                className="mt-4 block w-full text-center bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition"
                            >
                                <Phone className="inline-block mr-2" size={18} />
                                Call Now
                            </a>
                        )}
                    </div>

                    {/* Listed Date */}
                    <p className="text-sm text-gray-400 mt-4">
                        Listed on{' '}
                        {new Date(listing.createdAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ListingDetail;
