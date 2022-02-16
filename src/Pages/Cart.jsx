import CartDetails from "../components/CartDetails/CartDetails";
import React from "react";
import { useAuthDispatch, logout, useAuthState } from "../contexts";
import { useNavigate } from "react-router-dom";
import { StyledCart, StyledCartH1, Button } from "./styles";

const AddProduct = (props) => {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/login"); //navega de nuevo al login sin usuario
  };

  return (
    <StyledCart>
      <StyledCartH1>
        Welcome to your cart<span> {userDetails.user.email}</span>
      </StyledCartH1>

      <CartDetails />

      <div style={{ width: "100%", textAlign: "center" }}>
        <Button onClick={handleLogout}>
          <span className="text"> Logout</span>
        </Button>
      </div>
    </StyledCart>
  );
};

export default AddProduct;
