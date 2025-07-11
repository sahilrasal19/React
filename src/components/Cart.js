import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="shadow-2xl p-2 m-2 bg-green-400 text-white rounded-lg hover:cursor-pointer hover:bg-green-500"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && (
          <h1 className=" text-2xl">
            Cart is empty Please add something to cart
          </h1>
        )}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
