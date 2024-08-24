import { Card } from "./Card";
import Shimmer from "./Shimmer";

import { API } from "../utils/constants";

import { useState, useEffect } from "react";

export const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [inputText, setInputText] = useState("");

  const fetchData = async () => {
    try {
      let res = await fetch(API);
      res = await res.json();
      setResList(
        res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );

      setFilteredList(
        res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeText = (e) => {
    if (e.target.value === "") {
      setFilteredList(resList);
    }
    setInputText(e.target.value);
  };

  const filterRes = () => {
    const filtered = resList.filter((res) => {
      return res.info.name.toLowerCase().includes(inputText.toLowerCase());
    });
    setFilteredList(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      filterRes();
    }
  };

  // console.log(resList);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={inputText}
          onChange={changeText}
          onKeyUp={handleKeyPress}
        />
        <button className="search-btn" onClick={filterRes}>
          Search
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((res) => (
          <Card key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
