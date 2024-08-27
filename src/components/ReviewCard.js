const ReviewCard = ({ data, visible }) => {
  const { image, name, comment } = data;
  return (
    <div className={`review-card ${visible ? "" : "hide"}`}>
      <img src={image} className="review-img" />
      <div className="review-details">
        <div className="comment">{comment}</div>
        <div className="review-name">-{name}-</div>
      </div>
    </div>
  );
};

export default ReviewCard;
