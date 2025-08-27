import React from "react";
import { Sparkles } from "lucide-react";
import { trackEvent } from "../lib/initPixel";
type Service = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const services: Service[] = [
  {
    name: "Classic Manicure",
    description: "Nail trimming, shaping, cuticle care, and polish.",
    price: "$25",
    image: "https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Luxury Pedicure",
    description: "Foot soak, scrub, massage, nail care & polish.",
    price: "$40",
    image: "https://images.unsplash.com/photo-1630843599725-32ead7671867?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gel Polish",
    description: "Long-lasting gel polish with glossy finish.",
    price: "$30",
    image: "https://plus.unsplash.com/premium_photo-1661432806304-6d6cb7bfa4c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nail Art Add-on",
    description: "Custom designs, glitter, decals and more.",
    price: "+$10",
    image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Services: React.FC = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto pt-[100px] px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-pink-600">Best Nail Services</span>
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Treat yourself to luxury — from classic mani-pedis to custom nail art.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-pink-50 border border-pink-100 rounded-2xl shadow hover:shadow-md transition-all"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="rounded-t-2xl w-full h-[180px] object-cover"
                />
                <span className="absolute top-2 left-2 bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Popular
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">{service.description}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      trackEvent("Lead", {
                        content_name: service.name,     // Service name (e.g., "Luxury Pedicure")
                        content_category: "Nail Service",
                        value: Number(service.price.replace(/[^0-9.]/g, "")) || 0, // Extract number from price
                        currency: "USD"  // or "AWG" if you want consistency
                      });
                      // TODO: add booking navigation or modal later
                    }}
                    className="px-3 py-1.5 bg-pink-500 text-white rounded font-medium text-sm hover:bg-pink-600 transition"
                  >
                    Book Now
                  </button>

                  <span className="text-pink-700 font-semibold text-sm">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
