import { ShoppingCart } from "lucide-react";

export const CollectionCard = () => (
  <div className="bg-pink-50 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all">
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1631730486572-226d1f595b68?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Glow Beyond Limits"
        className="rounded-t-2xl w-full h-[180px] object-cover"
      />
      <span className="absolute top-2 right-2 bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium">
        Hair Care
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">Glow Beyond Limits</h3>
      <p className="text-sm text-gray-600 mt-1 mb-3">
        Transform your skincare routine with our innovative solutions.
      </p>
      <div className="flex justify-between items-center">
        <a
          href="/shop"
          className="flex items-center gap-2 px-3 py-1.5 text-sm sm:text-base bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </a>
        <span className="bg-pink-200 text-pink-800 font-semibold text-sm px-3 py-1 rounded-full">
          $12
        </span>
      </div>
    </div>
  </div>
);