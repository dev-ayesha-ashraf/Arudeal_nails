import React, { useState } from "react";
import { CollectionCard } from "../components/common/CollectionCard";
import Navbar from "../components/Navbar";
import { Menu, X } from "lucide-react"; // Optional icons if you use Lucide
import Footer from "../features/Landing/Foote";

const categories = [
  "Cleansers",
  "Exfoliators",
  "Toners",
  "Retinol",
  "Facial Oil",
  "Sunscreen",
  "Eye Care",
];

const Shop: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [outOfStock, setOutOfStock] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); // toggle state

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
<div className="flex">
      {/* Sidebar (Mobile + Desktop) */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-pink-50 p-6 border-r border-pink-100 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block pt-[100px]`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-pink-800">Filter</h2>
          <button
            className="text-sm text-pink-600 hover:underline"
            onClick={() => {
              setSelectedCategories([]);
              setOutOfStock(true);
            }}
          >
            Clear all
          </button>
        </div>

        {/* Applied Filters */}
        {selectedCategories.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Applied filters
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map((cat) => (
                <span
                  key={cat}
                  className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Out of stock toggle */}
        <div className="flex items-center justify-between mt-4 mb-6">
          <label htmlFor="stock" className="text-sm text-gray-700 font-medium">
            Out of stock items
          </label>
          <input
            id="stock"
            type="checkbox"
            checked={outOfStock}
            onChange={(e) => setOutOfStock(e.target.checked)}
            className="accent-pink-500"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="accent-pink-500"
                  />
                  <span>{category}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price slider */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full accent-pink-500"
          />
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 bg-white p-6 pt-[100px] relative z-10">
        {/* Toggle button (visible on small/mid screens only) */}
        <button
          className="lg:hidden mb-4 text-pink-600 flex items-center gap-2"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          <span>{sidebarOpen ? "Close Filters" : "Open Filters"}</span>
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Shop Our <span className="text-pink-600">Collection</span>
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, idx) => (
            <CollectionCard key={idx} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="px-3 py-1 rounded bg-pink-600 text-white hover:bg-pink-700 text-sm font-medium">
            1
          </button>
          <button className="px-3 py-1 rounded border border-pink-500 text-pink-600 hover:bg-pink-100 text-sm font-medium">
            2
          </button>
          <button className="px-3 py-1 rounded border border-pink-500 text-pink-600 hover:bg-pink-100 text-sm font-medium">
            3
          </button>
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
