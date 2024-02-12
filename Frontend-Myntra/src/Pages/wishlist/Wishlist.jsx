import React, { useContext } from "react";
import Login from "../../Components/Login/Login";
import { Context } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";


const Wishlist = () => {
  const { isAuth, setIsAuth } = useContext(Context)
  if (!isAuth) {
    return <Login />
  }
  return <div>
    <div className="wishlistMainDiv">
      <h1>YOUR WISHLIST IS EMPTY</h1>
      <br />
      <h3>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</h3>
      <br />
      <img src="" alt="" />
      <br />
      <Link to='/'><button>CONTINUE SHOPPING</button></Link>
    </div>
  </div>;
};

export default Wishlist;














