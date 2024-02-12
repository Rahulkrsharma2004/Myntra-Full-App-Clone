import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const cart = () => {
  return (
    <div className="notLogin">
      <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="img" />
      <h3>Het, It feels so light !</h3>
      <p>There is nothing in your bag. Lets add something.</p>
      <Link to="/">
        <button>ADD ITEMS FROM HOME OR LOGIN</button>
      </Link>
    </div>
  );
};

export default cart;