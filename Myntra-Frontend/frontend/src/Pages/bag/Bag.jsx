import { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Bag.css";
import Cart from "../../Components/Cart/Cart";
import { Context } from "../../Contexts/AuthContext";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Bag = () => {
  const { isAuth, setTotalItems, totalItems } = useContext(Context);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      const showCartData = async () => {
        try {
          const res = await axios.get(
            `https://myntra-app-backend.vercel.app/carts/`,
            { withCredentials: true }
          );
          const cartData = res.data.myCart;
          const countData = res.data.myCart.length;

          const totalPrice = cartData.reduce((acc, item) => {
            return acc + item.price;
          }, 0);
          console.log('Total Price:', totalPrice);
          setTotalPrice(totalPrice);
          setCartData(cartData);
          setTotalItems(countData);
        } catch (error) {
          console.log("error11", error);
        }
      };

      showCartData();
    }
  }, [isAuth, setTotalItems]);

  const handleDeleteBag = async (id) => {
    try {
      const deleteFromBag = await axios.delete(
        `https://myntra-app-backend.vercel.app/carts/delete/${id}`,
        { withCredentials: true }
      );

      console.log(deleteFromBag);

      if (deleteFromBag.data.message === "Item is removed from cart!") {
        toast({
          title: "Product Deleted",
          description: "Product has been deleted from your cart",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setCartData((prevBagData) =>
          prevBagData.filter((item) => item._id !== id)
        );
        setTotalItems((prevTotalItems)=>prevTotalItems-1)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAllItems = async () => {
    try {
      await axios.delete('https://myntra-app-backend.vercel.app/carts/delete', { withCredentials: true });
      setCartData([]);
      setTotalItems(0);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        handleDeleteAllItems();
        navigate("/");
      }, 2000);
    }, 3000);
  };

  if (!isAuth) {
    return <Cart />;
  }

  return (
    <div>
      <div className="mainDivCart">
        {cartData.map((ele) => (
          <div key={ele._id} className="maincart">
            <div className="itemBag">
              <div className="bagImage">
                <img src={ele.image} alt="ProductImage" className="imagebag" />
              </div>
              <div className="itemDetails">
                <h4>{ele.brand}</h4>
                <p>{ele.title}</p>
                <div>Rs. {ele.price}</div>
                <div className="sizeOptions">
                  {ele.sizes.map((size, index) => (
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
                <div style={{ margin: "auto" }}>
                  <button
                    className="deleteItemfromBag"
                    onClick={() => handleDeleteBag(ele._id)}
                  >
                    DELETE ITEM
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr
        style={{
          border: "2px gray solid",
          marginBottom: "3rem",
          marginTop: "3rem",
        }}
      />
      <div className="bagPaymentDiv">
        <div>
          <h1>PAYMENT CARD</h1>
          <h1>
            Total Number Of Items = <span>{totalItems}</span>
          </h1>
          <h1>
            Total Amount = <span>{totalPrice}</span>
          </h1>
          
          {/* Payment Button or Loader */}
          {!loading && !success && (
            <button onClick={handlePayment}>PAYMENT</button>
          )}

          {/* Loader Animation */}
          {loading && (
            <div className="loader">
              Processing Payment...
            </div>
          )}

          {/* Success Animation */}
          {success && (
            <div className="successMessage">
              <span>✔</span> Payment Successful!
            </div>
          )}

          <img
            src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/blog_service/2021-08-10-be-flexible-offer-multiple-payment-options-on-your-online-store.jpg"
            alt="Payment Options"
          />
        </div>
      </div>
    </div>
  );
};

export default Bag;
