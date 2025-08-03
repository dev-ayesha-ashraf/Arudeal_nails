// App.tsx
import AppRoutes from './routes/AppRotes';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
