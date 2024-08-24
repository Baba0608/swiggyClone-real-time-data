import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import ResHeader from "./ResHeader";
import ResItemCategory from "./ResItemCategory";

import useResMenu from "../utils/useResMenu";
import { useState } from "react";

const ResDetails = () => {
  const { resId } = useParams();

  const [resData, itemCategory] = useResMenu(resId);
  const [expandIndex, setExpandIndex] = useState(0);

  if (resData === null) return <Shimmer />;

  return (
    <div className="res-page-container">
      <ResHeader resData={resData} />

      <div className="res-menu">
        <div className="menu-title"> MENU</div>
        <div className="menu-container">
          {itemCategory.map((details, index) => (
            <ResItemCategory
              key={details.card.card.title}
              category={details}
              setItems={index === expandIndex ? true : false}
              setExpandIndex={() => setExpandIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResDetails;
