import { useContext, useState, useEffect } from "react";
import Login from "../../Components/Login/Login";
import { Context } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import "./Wishlist.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Wishlist = () => {
  const [wishData, setWishData] = useState([]);
  const { isAuth } = useContext(Context);
  const {setTotalItems} = useContext(Context)
  const toast = useToast(); 

  if (!isAuth) {
    return <Login />;
  }

  const showWishData = async () => {
    try {
      const res = await axios.get(
        `https://myntra-app-backend.vercel.app/wishlists/`,
        { withCredentials: true }
      );
      setWishData(res.data.myWishlist);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleMoveToBag = async (id) => {
    try {
      const addToBagRes = await axios.post(
        `https://myntra-app-backend.vercel.app/carts/add/${id}`,
        { withCredentials: true }
      );

      const deleteFromWishlistRes = await axios.delete(
        `https://myntra-app-backend.vercel.app/wishlists/delete/${id}`
      );

      if (
        addToBagRes.data.message === "Product Added Successfully" &&
        deleteFromWishlistRes.data.message === "Item was removed from Wishlist!"
      ) {
        toast({
          title: "Product Moved",
          description: "Product has been moved to your bag successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setTotalItems((prevTotalItems) => prevTotalItems + 1);
        setWishData((prevWishData) =>
          prevWishData.filter((item) => item._id !== id)
        );

      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "An error occurred while moving the product to your bag.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleDeleteWish = async (id) => {
    try {
      const deleteFromWishlistRes = await axios.delete(
        `https://myntra-app-backend.vercel.app/wishlists/delete/${id}`,
        { withCredentials: true }
      );

      if (
        deleteFromWishlistRes.data.message === "Item was removed from Wishlist!"
      ) {
        toast({
          title: "Item Removed",
          description: "Item has been removed from your wishlist.",
          status: "info",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setWishData((prevWishData) =>
          prevWishData.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "An error occurred while removing the item from your wishlist.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    showWishData();
  }, []);

  return (
    <div>
      <div className="fillItem">
        {wishData.map((ele) => (
          <div className="itemwish" key={ele._id}>
            <div className="itemwish2">
              <Link to={`/product/${ele._id}`}>
                <img src={ele.image} alt="ProductImage" className="imagewish" />
              </Link>
              <h4>{ele.brand}</h4>
              <p>{ele.title}</p>
              <div className="price">Rs. {ele.price}</div>
              <div className="sizeOptions">
                {ele.sizes.map((size, index) => (
                  <span key={index}>{size}</span>
                ))}
              </div>
              <div className="btnDiv">
                <button
                  className="deleteCart"
                  onClick={() => handleMoveToBag(ele._id)}
                >
                  MOVE TO BAG
                </button>
                <button
                  className="deleteCart" style={{marginLeft:"1rem"}}
                  onClick={() => handleDeleteWish(ele._id)}
                >
                  REMOVE ITEM
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
