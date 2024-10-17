// import React from "react";
// import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Pages/login/Login";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/home/Home";
import Profile from "../Pages/profile/Profile";
import Signup from "../Pages/login/Signup";
import Wishlist from "../Pages/wishlist/Wishlist";
import Bag from "../Pages/bag/Bag";
import Orders from "../Pages/orders/Order";
import Product from "../Pages/product/Product";
import SingleProduct from "../Pages/product/SingleProduct";
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/bag" element={<Bag />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;