import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold text-gray-600">
              Cart is empty. Please add some items.
            </h2>
          </div>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            <ItemsList items={cartItems} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
