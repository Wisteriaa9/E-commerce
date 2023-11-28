import { userDataReducer, initialUserData } from "../reducer/userDataReducer";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAuth } from "./AuthProvider";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";;

const UserDataContext = createContext();

export function UserProvider({ children }) {
  const [cartLoading, setCartLoading] = useState(false);
  const [error, setError] = useState("");
  const [userDataState, dispatch] = useReducer(
    userDataReducer,
    initialUserData
  );

  const { auth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const totalDiscountedPrice = userDataState.cartProducts?.reduce(
    (acc, curr) => acc + curr.discounted_price * curr.qty,
    0
  );

  const totalOriginalPrice = userDataState.cartProducts?.reduce(
    (acc, curr) => acc + curr.original_price * curr.qty,
    0
  );

  const discountPercent = () => {
    const totalPrice = userDataState?.cartProducts?.reduce(
      (acc, curr) => ({
        ...acc,
        original: acc.original + curr.original_price,
        discount: acc.discount + curr.discounted_price,
      }),
      { original: 0, discount: 0 }
    );

    const totalDiscount =
      (totalPrice.original - totalPrice.discount) / totalPrice.original;

    return totalDiscount?.toFixed(2) * 100;
  }; 

  return (
    <UserDataContext.Provider
      value={{
        userDataState,
        dispatch,
        totalDiscountedPrice,
        totalOriginalPrice,
        discountPercent,
        initialUserData,
       
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export const useUserData = () => useContext(UserDataContext);
