import { ShoppingCart } from "lucide-react";
import type { Listing } from "../../types/listing";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { trackEvent } from "../../lib/initPixel";
import { getImageUrl } from "../../utils/image";

export const CollectionCard = ({ listing }: { listing: Listing }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!listing) return null;

  const handleCardClick = () => {
    trackEvent("ViewContent", {
      content_ids: [listing._id],
      content_name: listing.title,
      content_type: "product",
      value: Number(listing.price) || 0,
      currency: "AWG"
    });
    navigate(`/listing/${listing._id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    trackEvent("AddToCart", {
      content_ids: [listing._id],           // unique ID
      content_name: listing.title,         // product name
      content_type: "product",             // required for some setups
      value: Number(listing.price) || 0,   // numeric value
      currency: "AWG",                     // your currency
      quantity: 1
    });

    addToCart(listing);
    navigate("/cart");
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full sm:w-[280px] cursor-pointer bg-pink-50 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all"
    >
      <div className="relative w-full h-[250px] bg-white rounded-t-2xl overflow-hidden flex items-center justify-center mx-auto">
        <img
          src={getImageUrl(listing.images?.[0], "600x600")}
          alt={`Image of ${listing.title}`}
          height={250}
          width={280}
          className="object-cover"
        />
        <span className="absolute top-2 right-2 bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">
          {listing.categoryId.slug}
        </span>
      </div>

      <div className="p-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {listing.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-2">
          {listing.description}
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-3 py-3 text-sm font-semibold bg-pink-500 text-white rounded hover:bg-pink-600 transition whitespace-nowrap"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <span className="bg-pink-200 text-pink-800 font-semibold text-sm px-3 py-2 rounded-full whitespace-nowrap">
            AWG {listing.price}
          </span>
        </div>
      </div>
    </div>
  );
};
