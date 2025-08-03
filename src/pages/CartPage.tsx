import { useCart } from "../Context/CartContext";
import { getImageUrl } from "../utils/image";
export default function CartPage() {
  const { cartItems, increment, decrement } = useCart();

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center mt-20">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">Your cart is empty.</div>
      ) : (
        <div className="w-full space-y-4 sm:space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow rounded-xl p-4 border"
            >
              {item.images?.[0] && (
                <img
                  src={getImageUrl(item.images?.[0])}
                  alt={item.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md mx-auto sm:mx-0 mb-3 sm:mb-0"
                />
              )}
              <div className="flex-1 sm:ml-4 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-center sm:text-left mb-2 sm:mb-0">
                    <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      AWG {(item.price * item.quantity).toFixed(2)}{" "}
                      <span className="text-xs text-gray-400">(AWG {item.price.toFixed(2)} × {item.quantity})</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end gap-3 mt-2 sm:mt-0">
                    <button
                      onClick={() => decrement(item._id)}
                      className="w-9 h-9 text-xl rounded-full bg-pink-200 text-pink-700 hover:bg-pink-300 transition"
                    >
                      −
                    </button>
                    <span className="font-medium text-sm sm:text-base">{item.quantity}</span>
                    <button
                      onClick={() => increment(item._id)}
                      className="w-9 h-9 text-xl rounded-full bg-pink-200 text-pink-700 hover:bg-pink-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="text-right pt-4 border-t mt-6">
            <p className="text-xl font-semibold">
              Total: <span className="text-pink-600">AWG {getTotal().toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
