import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Services", path: "/services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-pink-600">
           Arudeal
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-pink-600 transition ${
                  location.pathname === item.path
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="ml-4 px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-gray-800 hover:text-pink-600 transition ${
                location.pathname === item.path
                  ? "text-pink-600 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-2 text-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
