import { useAuthDispatch, logout, useAuthState } from "../../../../contexts";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  // const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/login"); //navega de nuevo al login sin usuario
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
