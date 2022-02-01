import { Link } from "react-router-dom";
import { StyledNav } from "./styles";

const Navbar = () => {
  return (
    <StyledNav>
      <h1 className="logo">logo</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
