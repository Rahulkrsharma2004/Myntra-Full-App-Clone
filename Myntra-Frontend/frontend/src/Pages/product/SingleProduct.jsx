import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Slider } from "antd";
import "./SingleProduct.css";
import { RiStarSFill } from "react-icons/ri";
import { BiHeart, BiDetail } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Context } from "../../Contexts/AuthContext";

const SingleProduct = () => {
  const { isAuth } = useContext(Context);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [proQuantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let response = await axios.get(
          `https://myntra-app-backend.vercel.app/products?_id=${id}`
        );
        response = response.data.products.filter((ele) => {
          if (id == ele._id) {
            return response;
          }
        });
        setProduct(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return "Loading...";
  }

  if (!product) {
    return "Product not found";
  }

  const handleAddBag = async (id) => {
    if (!isAuth) {
      toast({
        title: "Login Required",
        description: "Please login to add the product to your bag.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      try {
        const res = await axios.post(
          `https://myntra-app-backend.vercel.app/carts/add/${id}`,
          { withCredentials: true }
        );
        if (res.data.message === "Product Added Successfully") {
          toast({
            title: "Added to Bag",
            description: "Product has been added to your bag successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      } catch (error) {
        console.log(error);
        toast({
          title: "Error",
          description: "An error occurred while adding the product to your bag.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };

  const handleAddWish = async (id) => {
    if (!isAuth) {
      toast({
        title: "Login Required",
        description: "Please login to add the product to your wishlist.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      try {
        const res = await axios.post(
          `https://myntra-app-backend.vercel.app/wishlists/add/${id}`,
          { withCredentials: true }
        );
        if (res.data.message === "Product Added Successfully in Wishlist") {
          toast({
            title: "Added to Wishlist",
            description: "Product has been added to your wishlist successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      } catch (error) {
        console.log("Error", error);
        toast({
          title: "Error",
          description: "An error occurred while adding the product to your wishlist.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };

  return (
    <div className="singleProComponent">
      <div className="singleProNavigation"></div>
      <div className="singlePro">
        <div className="singleProGallery">
          <img src={product[0].image} alt="Product" />
        </div>
        <div className="singleProDetails">
          <div className="singleProName">
            <h2>{product[0].brand}</h2>
            <h2>{product[0].title}</h2>
            <p>
              <RiStarSFill className="itemStars" /> | {product.reviews} Reviews
            </p>
          </div>
          <div className="singleItemDetails">
            <div>
              Rs. {product[0].price} <s>Rs. {product.oldPrice}</s>
              <span>({product.discount}% OFF)</span>
            </div>
            <p>Inclusive of all taxes</p>
            <h5 style={{ color: product.inStock ? "red" : "#14958f" }}>
              Status : {product.inStock ? "Out Of Stock" : "In Stock"}
            </h5>
          </div>
          <h3>SIZE:</h3>
          <div className="sizeOptions">
            {product[0].sizes.map((size, index) => (
              <span
                key={index}
                style={{
                  marginRight: "20px",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                {size}
              </span>
            ))}
          </div>

          <div className="singleProQuantity">
            <p>Select Quantity : {proQuantity}</p>
            <Slider
              defaultValue={1}
              max={product.inStock ? 20 : 0}
              onChange={setQuantity}
            />
          </div>
          <div className="singleProButtons">
            <button onClick={() => handleAddBag(id)}>
              <HiOutlineShoppingBag className="singleProIcons" />
              ADD TO BAG
            </button>
            <button onClick={() => handleAddWish(id)}>
              <BiHeart className="singleProIcons" />
              ADD TO WISHLIST
            </button>
          </div>
          <div className="singleProDescription">
            <h3>
              PRODUCT DETAILS <BiDetail />
            </h3>
            <p>{product[0].description}</p>
            {product.size && <h4>Size: {product.size}</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
