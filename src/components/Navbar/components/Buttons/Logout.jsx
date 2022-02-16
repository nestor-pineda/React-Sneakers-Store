import { useAuthDispatch, logout } from "../../../../contexts";
import { useNavigate } from "react-router-dom";
import { StyledLog } from "./styles";

const Logout = () => {
  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  // const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/"); //navega de nuevo al login sin usuario
  };

  return (
    <StyledLog onClick={handleLogout}>
      <span class="material-icons">&#xe9ba;</span>
    </StyledLog>
  );
};

export default Logout;
