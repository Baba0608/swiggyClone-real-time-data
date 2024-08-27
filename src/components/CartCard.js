import { IMAGE_URL } from "../utils/constants";

import { useCart } from "../contexts/cartContext";

const CartCard = ({ item }) => {
  const { updateCartItem, deleteFromCart } = useCart();

  const {
    name,
    imageId,
    price,
    defaultPrice,
    count,
    ratings: {
      aggregatedRating: { rating },
    },
  } = item;

  const cost = (price || defaultPrice) / 100;

  return (
    <div className="cart-card">
      <div className="cart-img">
        <div className="remove-btn">
          <button onClick={() => deleteFromCart(item)}>Remove</button>
        </div>
        <img src={IMAGE_URL + imageId} />
      </div>

      <div className="cart-details">
        <div>
          <b>{name}</b>
        </div>
        <div>Rating: {rating}</div>
        <div className="cart-btns">
          <button
            disabled={!(count > 1)}
            onClick={() => updateCartItem(item, "dec")}
          >
            ➖
          </button>
          <p> {count} </p>
          <button onClick={() => updateCartItem(item, "inc")}> ➕ </button>
        </div>
        <div>
          Total amount: {count} * {cost} = {count * cost}Rs/-
        </div>
      </div>
    </div>
  );
};

export default CartCard;
