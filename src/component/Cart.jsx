import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = (index) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart(cartItems));
  };

  return (
    <div className="text-center m-2 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="m-2 px-4 py-2 hover:bg-red-700 bg-black text-white rounded-xl"
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <h1> Cart is Empty, Please add some items to cart</h1>
      ) : (
        <div className="w-1/2 m-auto">
          <ItemList key={index} items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
