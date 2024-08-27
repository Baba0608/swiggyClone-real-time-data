import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Robert Downey Jr",
    image:
      "https://i.pinimg.com/originals/45/de/42/45de424a29a8000a65787ec74440799c.png",
    comment:
      "I've ordered like 300 times from them and their service is excellent 95/100 times. Also, whenever there's a occasional mishap, they make sure they compensate the customer for it.",
  },
  {
    name: "Dhoni",
    image:
      "https://thetalentedworld.net/wp-content/uploads/2020/06/ms-dhoni.jpg",
    comment:
      "The best food delivery service out there in my personal experience. Even when there is a problem occasionally with late delivery or food getting spilled, they give me a full refund.",
  },
  {
    name: "Prabhas",
    image:
      "https://i2.cinestaan.com/image-bank/1500-1500/127001-128000/127724.jpg",
    comment:
      "I love swiggy compared to others, Only difference is swiggy understands customer concerns and they understand them where as zomato is useless",
  },
  {
    name: "Jon Snow",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg",
    comment:
      "They give you fast delivery and good food esay to order it was awesome app and you can order in web also so i love it",
  },
  {
    name: "Rohit Sharma",
    image:
      "https://i1.wp.com/short-biography.com/wp-content/uploads/rohit-sharma/Rohit-Sharma.jpg?w=2000&ssl=1",
    comment:
      "I'm really happy with the quality of food I've received from Swiggy. The delivery is always fast and the food is delicious and healthy. The delivery agent is also friendly and helpful. Overall, I'm very satisfied with Swiggy and would recommend it to anyone looking for a good food delivery service.",
  },
];

const Review = () => {
  let [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIndex((index + 1) % reviews.length);
  //     }, 5000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      index = (index + 1) % reviews.length;
      console.log(index);
      setIndex(index);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="review-container">
      <div>Reviews</div>
      {reviews.map((review, i) => (
        <ReviewCard key={review.name} data={review} visible={index === i} />
      ))}
    </div>
  );
};

export default Review;
