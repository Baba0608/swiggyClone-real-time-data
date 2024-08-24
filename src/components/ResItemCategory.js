import { useState } from "react";
import MenuCard from "./MenuCard";

const ResItemCategory = ({ category, setItems, setExpandIndex }) => {
  const [isExpand, setIsExpand] = useState(true);

  if (!setItems && isExpand) setIsExpand(false);

  const toggle = () => {
    setIsExpand(!isExpand);
    setExpandIndex();
  };

  const getItems = (categories) => {
    let items = [];
    for (let i = 0; i < categories.length; i++) {
      items.push(...categories[i].itemCards);
    }
    return items;
  };

  let { title, itemCards } = category.card.card;

  if (itemCards === undefined) {
    itemCards = getItems(category.card.card.categories);
  }

  return (
    <div className="res-item-category">
      <div className="category" onClick={toggle}>
        <div>{title + " (" + itemCards.length.toString() + ")"}</div>
        <div className="arrow">
          {/* up arrow and down arrow */}
          {setItems && isExpand ? <div>&#11205;</div> : <div>&#11206;</div>}
        </div>
      </div>

      {/* expand/collapse when clicked */}
      {setItems && isExpand && (
        <div className="menu-item-container">
          {itemCards.map((item) => (
            <MenuCard key={item.card.info.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResItemCategory;
