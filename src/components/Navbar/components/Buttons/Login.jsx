import { useNavigate } from "react-router-dom";
import { StyledLog } from "./styles";

const Login = () => {
  let navigate = useNavigate();

  const navToLogin = () => {
    navigate("/login"); //navega de nuevo al login sin usuario
  };

  return (
    <StyledLog onClick={navToLogin}>
      <span className="material-icons">&#xe87c;</span>
    </StyledLog>
  );
};

export default Login;
