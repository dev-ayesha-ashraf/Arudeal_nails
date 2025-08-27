import { useEffect } from "react";
import AppRoutes from "./routes/AppRotes";
import { CartProvider } from "./Context/CartContext";
import { loadNailsPixel } from "./lib/initPixel";

function App() {
  useEffect(() => {
    loadNailsPixel();
  }, []);

  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
