import { useState, useEffect } from "react";

import { PRODUCT_INFO_API } from "./constants";

const useResMenu = (resId) => {
  const [resData, setResData] = useState(null);
  const [itemCategory, setItemCategory] = useState([]);

  const fetchData = async () => {
    const data = await fetch(PRODUCT_INFO_API + resId);
    const json = await data.json();
    setResData(json.data.cards[2].card.card.info);
    const category = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const resC = category.filter((res) => {
      return res.card.card["@type"].includes("ItemCategory");
    });
    setItemCategory(resC);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [resData, itemCategory];
};

export default useResMenu;
