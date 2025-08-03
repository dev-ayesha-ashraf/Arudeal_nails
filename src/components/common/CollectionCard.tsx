import { ShoppingCart } from "lucide-react";
import type { Listing } from "../../types/listing";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { getImageUrl } from "../../utils/image";

export const CollectionCard = ({ listing }: { listing: Listing }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!listing) return null;

  const handleCardClick = () => {
    navigate(`/listing/${listing._id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(listing);
    navigate("/cart");
  };


  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer bg-pink-50 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all"
    >
      <div className="relative">
        <img
          src={getImageUrl(listing.images?.[0], "300x180")}
          alt={listing.title}
          className="rounded-t-2xl w-full h-[180px] object-cover"
        />

        <span className="absolute top-2 right-2 bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">
          {listing.categoryId.slug}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-3">{listing.description}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-3 py-1.5 text-sm sm:text-base bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <span className="bg-pink-200 text-pink-800 font-semibold text-sm px-3 py-1 rounded-full">
            ${listing.price}
          </span>
        </div>
      </div>
    </div>
  );
};
