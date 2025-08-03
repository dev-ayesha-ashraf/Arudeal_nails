// routes/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Services from "../pages/Services";
import ListingDetail from "../pages/ListingDetail";
import Layout from "../components/Layout";
import CartPage from "../pages/CartPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="services" element={<Services />} />
          <Route path="listing/:id" element={<ListingDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<div className="flex items-center justify-center h-[80vh] p-10 text-center text-2xl text-gray-500">Login - COMING SOON</div>} />
          {/* Unmatched Routes */}
          <Route path="*" element={<div className="flex items-center justify-center h-[80vh] p-10 text-center text-2xl text-gray-500">Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
