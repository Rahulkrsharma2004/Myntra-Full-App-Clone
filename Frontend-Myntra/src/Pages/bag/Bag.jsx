import React, { useContext, useState, useEffect } from "react";
import Cart from "../../Components/Cart/Cart";
import Login from "../../Components/Login/Login";
import { Context } from "../../Contexts/AuthContext";
import axios from "axios"
import './Bag.css'

const Bag = () => {
  const { isAuth, setIsAuth } = useContext(Context)
  const [bagData, setBagData] = useState([])

  if (!isAuth) {
    return <Cart />
  }

  const showCartData = async () => {
    try {
      const res = await axios.get(`https://myntra-app-backend-production.up.railway.app/cart/`, { withCredentials: true })
      console.log(res)
      setBagData(res.data.myCart)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showCartData()
  }, [])

  const handleorder = () => {
    alert("Order Successfully placed")
  }

  const handledelete = async (productId) => {
    try {
      const res = await axios.delete(`https://myntra-app-backend-production.up.railway.app/cart/delete/${productId}`, { withCredentials: true });
      console.log(res);
      setBagData(prevBagData => prevBagData.filter(item => item.productId !== productId));
    } catch (error) {
      console.log(error);
    }
  };
  


  return <div className="mainDivCart">
    {
      // console.log(bagData)
      bagData.map((ele) => (
        <div className="maincart">
          <div className="itemBag">
            <div className="bagImage">
              <img src={ele.image} alt="ProductImage" className="imagebag" />
            </div>
            <div className="itemDetails">
              <h4>{ele.brand}</h4>
              <p>{ele.title}</p>
              <div>
                Rs. {ele.price}
              </div>
              <div className="sizeOptions">
                {ele.sizes.map((size, index) => (
                  <span key={index} style={{ marginRight: '20px', color: "red", cursor: "pointer" }}>{size}</span>
                ))}
              </div>
              <div>
                <button className="deleteCart" onClick={() => handledelete(ele.productId)}>DELETE</button>

                <button className="orderCart" onClick={handleorder}>ORDER</button>
              </div>
            </div>

          </div>
        </div>

      ))
    }
  </div>;
};

export default Bag;