// import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import wishlist from "../../assets/wishimg.jpg"
const login = () => {
  return (
    <div className="notLogin">
      <h3>PLEASE LOG IN FIRST !!</h3>
      <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg" alt="img" />
      <Link to="/login" >
        <button className="btnLog">LOGIN</button>
      </Link>
    </div>
  );
};

export default login;