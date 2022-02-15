import CartDetails from "../components/CartDetails/CartDetails";
import React from "react";
import { useAuthDispatch, logout, useAuthState } from "../contexts";
import { useNavigate } from "react-router-dom";

const AddProduct = (props) => {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/login"); //navega de nuevo al login sin usuario
  };

  return (
    <div style={{ padding: "20px" }}>
      <CartDetails />
      <p>Welcome {userDetails.user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AddProduct;
