import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Services from '../pages/Services';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
         <Route path="/services" element={<Services />} /> 
      </Routes>
    </Router>
  );
}
