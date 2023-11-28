import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "./AuthProvider";
import { useUserData } from "./UserDataProvider";

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("false");
  const { dispatch } = useUserData();
  const [addressForm, setAddressForm] = useState({
    _id: "",
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phone: "",
  });
  const { auth } = useAuth();

  const [editAddressIndex, setEditAddressIndex] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const deleteAddress = async (address) => {
    
  };

  return (
    <AddressContext.Provider
      value={{
        editAddressIndex,
        setEditAddressIndex,
        addressForm,
        setAddressForm,
        isAddressModalOpen,
        setIsAddressModalOpen,
        isEdit,
        setIsEdit,
        deleteAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
export const useAddress = () => useContext(AddressContext);
