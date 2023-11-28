import { useState } from "react";
import "./Cart.css";

import { Coupons } from "./components/Coupons/Coupons";

import { useUserData } from "../../contexts/UserDataProvider";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataProvider";

export const Cart = () => {
  const [couponSelected, setCouponSelected] = useState([]);
  const { userDataState } = useUserData();
  const navigate = useNavigate();
  const { loading } = useData();

  return (
    !loading &&
    (userDataState.cartProducts.length ? (
      <div>
        <h1 className="page-heading">Cart</h1>
        <div className="cart-container">
          
          <div>
            <Coupons
              couponSelected={couponSelected}
              setCouponSelected={setCouponSelected}
            />
            
          </div>
        </div>
      </div>
    ) : (
      <div className="no-items-container">
        <h2 className="page-heading">Cart is Empty!</h2>
        <button
          className="explore-btn"
          onClick={() => navigate("/product-listing")}
        >
          Explore
        </button>
      </div>
    ))
  );
};
