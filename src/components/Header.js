import { Link } from "react-router-dom";

export const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://tse1.mm.bing.net/th?id=OIP.c-VZqQELK0BTOZYuUCCQZQHaHa&pid=Api&P=0&h=180"
      />
    </div>

    <div className="nav-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
