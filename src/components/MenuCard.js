import { RATING_SVG } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";

const MenuCard = ({ item }) => {
  const addToCart = () => {
    // add to cart logic
  };

  const {
    name,
    imageId,
    price,
    defaultPrice,
    ratings: {
      aggregatedRating: { rating, ratingCountV2 },
    },
  } = item.card.info;
  return (
    <div className="menu-item">
      <div>
        <div>
          <b>{name}</b>
        </div>
        <div>₹{price / 100 || defaultPrice / 100}</div>
        <div className="rating">
          <div className="rating-svg">{RATING_SVG}</div>
          <div>
            {rating ? rating + "(" + ratingCountV2 + ")" : "No rating yet!"}
          </div>
        </div>
      </div>

      <div className="menu-item-box">
        <div className={`${imageId ? "add-btn-box" : "add-btn-box-no-img"}`}>
          <button className="add-btn" onClick={addToCart}>
            ADD
          </button>
        </div>
        {imageId ? (
          <img src={IMAGE_URL + imageId} className="menu-item-img" />
        ) : (
          ""
        )}

        {/* <button className="add-btn">Add</button> */}
      </div>
    </div>
  );
};

export default MenuCard;
