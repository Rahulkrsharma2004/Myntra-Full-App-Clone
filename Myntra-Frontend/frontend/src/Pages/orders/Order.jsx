import {useContext} from "react";
import Login from "../../Components/Login/Login";
import { Context } from "../../Contexts/AuthContext";
import "./Order.css"

const Orders = () => {
  const {isAuth } = useContext(Context);
  if (!isAuth) {
    return <Login />;
  }
  return <div id="orderSection">
    
  </div>;
};

export default Orders;