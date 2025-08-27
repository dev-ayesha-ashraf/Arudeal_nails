import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Listing, Seller } from '../types/listing';
import { getImageUrl } from '../utils/image';
import { trackEvent } from '../lib/initPixel';

const ListingDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [listing, setListing] = useState<Listing | null>(null);
    const [seller, setSeller] = useState<Seller | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [listing]);

    const images = listing?.images || [];

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!listing) {
        return <div className="p-8 text-center text-gray-600">Loading listing...</div>;
    }

    return (
        <div className="pt-20 pb-16 px-4 max-w-6xl mx-auto bg-white">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 w-full">
                    <div className="relative rounded-xl overflow-hidden border shadow-md">
                        <img
                            src={getImageUrl(images[currentImageIndex])}
                            alt={`Listing Image ${currentImageIndex + 1}`}
                            className="w-full h-72 md:h-[500px] object-contain bg-white transition-transform duration-300"
                        />

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}
                    </div>
                    {images.length > 0 && (
                        <div className="flex gap-2 mt-4 overflow-x-auto">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentImageIndex(index);
                                        trackEvent("ViewContent", {
                                            content_name: listing.title,
                                            content_type: "image",
                                            content_id: listing._id,
                                            image_index: index + 1
                                        });
                                    }}
                                    className={`w-20 h-16 rounded border-2 ${index === currentImageIndex ? "border-pink-600" : "border-transparent"
                                        } overflow-hidden`}
                                >
                                    <img
                                        src={getImageUrl(img)}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>

                            ))}
                        </div>
                    )}

                </div>
                <div className="md:w-1/2 w-full flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{listing.title}</h1>
                        <p className="text-2xl font-semibold text-pink-600 mb-4">
                            AWG {listing.price.toLocaleString()}
                        </p>
                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 shadow-inner mb-6">
                            <h2 className="text-lg font-semibold text-pink-700 mb-2">Description</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {listing.description}
                            </p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-md font-semibold text-gray-700 mb-1">Location</h2>
                            <p className="text-gray-500">Not specified</p>
                        </div>
                    </div>
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
                                onClick={() => {
                                    trackEvent("Contact", {
                                        content_name: listing.title,
                                        seller_name: seller?.name,
                                        seller_phone: seller?.phone
                                    });
                                }}
                                className="mt-4 block w-full text-center bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition"
                            >
                                <Phone className="inline-block mr-2" size={18} />
                                Call Now
                            </a>

                        )}
                    </div>

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
