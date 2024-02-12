import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import wishlist from "../../assets/wishimg.jpg"
const login = () => {
  return (
    <div className="notLogin">
      <h3>PLEASE LOG IN FIRST !!</h3>
      <img src="https://myntraa-clone.netlify.app/assets/login.png" alt="img" />
      <Link to="/login">
        <button>LOGIN</button>
      </Link>
    </div>
  );
};

export default login;