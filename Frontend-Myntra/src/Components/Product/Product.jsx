import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    image,
    brand,
    title,
    price,
    _id: id,
  } = product;

  return (
    <div className="itemBox">
      <Link color="a" to={`/product/${id}`}>
        <div className="itemImage">
          <img src={image} alt="ProductImage" />
        </div>
        <div className="itemDetails">
          <h4>{brand}</h4>
          <p>{title}</p>
          <div>
            Rs. {price} 
          </div>
        </div>
      </Link>
    </div>
   
  );
};

export default Product;