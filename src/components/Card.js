import { IMAGE_URL } from "../utils/constants";

import { Link } from "react-router-dom";

export const Card = ({ resData }) => {
  const {
    id: resId,
    name,
    cloudinaryImageId: id,
    avgRating,
    costForTwo,
    cuisines,
  } = resData.info;
  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={IMAGE_URL + id} />
      </div>
      <div className="res-name">
        <Link to={"/restaurant/" + resId}>{name}</Link>
      </div>
      <div>{cuisines.join(", ")}</div>
      <div>Rating: {avgRating}</div>
      <div>{costForTwo}</div>
    </div>
  );
};
