import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-pink-50 text-gray-800 px-6 sm:px-12 pt-14 pb-10 shadow-inner">
            <div className="max-w-7xl mx-auto space-y-14">
                <div className="w-full text-center">
                    <h3 className="text-2xl font-bold text-pink-800 mb-2">Subscribe to Our Newsletter</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Stay updated with our latest listings and exclusive offers.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full sm:flex-1 px-5 py-2.5 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
                        />
                        <button
                            type="submit"
                            className="bg-pink-600 text-white px-6 py-2.5 rounded-full text-sm hover:bg-pink-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-3">
                        By subscribing, you agree to receive promotional emails. Unsubscribe anytime.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-lg font-semibold text-pink-800 mb-3">About</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Your Trusted Partner in Radiant Beauty
                            Discover premium beauty products and personalized services designed to enhance your natural glow.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-pink-800 mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><a href="#" className="hover:text-pink-600 transition">Home</a></li>
                            <li><a href="#" className="hover:text-pink-600 transition">About</a></li>
                            <li><a href="#" className="hover:text-pink-600 transition">Services</a></li>
                            <li><a href="#" className="hover:text-pink-600 transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-pink-800 mb-3">Contact Info</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-pink-600" />
                                +1 234 567 890
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-pink-600" />
                                info@realestate.com
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-pink-600" />
                                123 Main Street, City, Country
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-pink-100 pt-6 text-center text-sm text-gray-600">
                    <div className="flex justify-center gap-4 mb-2">
                        <Facebook className="w-5 h-5 text-pink-600 hover:text-pink-800 cursor-pointer" />
                        <Instagram className="w-5 h-5 text-pink-600 hover:text-pink-800 cursor-pointer" />
                        <Twitter className="w-5 h-5 text-pink-600 hover:text-pink-800 cursor-pointer" />
                    </div>
                    <p>© 2025 Nails. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
