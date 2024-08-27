import Review from "./Review";

const About = () => {
  return (
    <div className="about-container">
      <div>About Us</div>
      <div className="about">
        <div className="food-emoji">🍕</div>
        <div>
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </div>
      </div>

      <Review />
    </div>
  );
};

export default About;
