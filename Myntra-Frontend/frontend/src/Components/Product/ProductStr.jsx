import axios from "axios";
import "./ProductStr.css";
import { Link } from "react-router-dom";
import { Context } from "../../Contexts/AuthContext";
import { useContext } from "react";
import { useToast } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ProductStr = ({ product }) => {
// eslint-disable-next-line react/prop-types
  const { image, brand, title, price, _id: id } = product;
  const { isAuth } = useContext(Context);
  const toast = useToast();

  const handleAddWish = async (id) => {
    if (!isAuth) {
      toast({
        title: "Not Logged In",
        description: "You need to log in to add items to your wishlist.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position:"top"
      });
    } else {
      try {
        const res = await axios.post(
          `https://myntra-app-backend.vercel.app/wishlists/add/${id}`,
          { withCredentials: true }
        );
        console.log(res)
        if (res.data.message === "Product Added Successfully in Wishlist" ) {
          // alert("Added")
          toast({
            title: "Product Added",
            description: "The product was successfully added to your wishlist.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position:"top"
          });
        }
      } catch (error) {
        console.error("Error", error);
        toast({
          title: "Error",
          description: "There was an error adding the product to your wishlist.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position:"top"
        });
      }
    }
  };

  return (
    <div className="itemBox">
      <Link color="a" to={`/product/${id}`}>
        <div className="itemImage">
          <img src={image} alt="ProductImage" />
        </div>
      </Link>
      <div className="itemDetails">
        <h4>{brand}</h4>
        <p>{title}</p>
        <div>Rs. {price}</div>
        <div className="btnDiv">
          <button
            className="AddToWishlistBtn"
            onClick={() => handleAddWish(id)}
          >
            ADD TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductStr;
