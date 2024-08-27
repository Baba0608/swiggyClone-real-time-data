import { useCart } from "../contexts/cartContext";
import CartCard from "./CartCard";

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  return (
    <div className="cart-container">
      {cartItems.length !== 0 && (
        <div className="clear-cart">
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
      {cartItems.length === 0 ? (
        <h1>The cart is empty! Add delicious food items 🍗</h1>
      ) : (
        cartItems.map((item) => <CartCard item={item} />)
      )}
    </div>
  );
};

export default Cart;
