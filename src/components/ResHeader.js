import { LOCATION_IMAGE } from "../utils/constants";
import { RATING_SVG } from "../utils/constants";

const ResHeader = ({ resData }) => {
  const {
    name,
    city,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla: { lastMileTravelString, minDeliveryTime, maxDeliveryTime },
    feeDetails: { totalFee },
  } = resData;

  return (
    <div className="res-header">
      <div className="res-title">
        <h2>{name}</h2>
      </div>

      <div className="res-outer">
        <div className="res-inner">
          <div className="res-rating">
            <div className="rating-svg">{RATING_SVG}</div>
            <div>
              <b>
                {avgRatingString} {"(" + totalRatingsString + ")"} -{" "}
                {costForTwoMessage}
              </b>
            </div>
          </div>
          <div className="res-cusines">{cuisines.join(", ")}</div>
          <div>
            <b>Outlet</b> {city}
          </div>
          <div>
            <b>
              {minDeliveryTime} - {maxDeliveryTime} mins
            </b>
          </div>
          <hr />
          <div className="res-location">
            <div>
              <img src={LOCATION_IMAGE} />
            </div>
            <div>
              <b>{lastMileTravelString}s</b> | ₹{totalFee / 100} Delivery fee
              will apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResHeader;
