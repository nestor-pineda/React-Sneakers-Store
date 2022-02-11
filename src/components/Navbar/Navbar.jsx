import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
// import {} from "./styles";

import * as S from "./styles";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const count = cartItems.reduce((counter, obj) => (obj !== undefined ? (counter += 1) : counter), 0);

  console.log(count);

  return (
    <S.StyledNav>
      <S.StyledLogo to="/">
        <img src="/images/logo-sneakers-animation.svg" alt="logo" />
      </S.StyledLogo>

      <S.StyledLinksGroup className="wrapper">
        {/* <S.StyledLink to="/">Home</S.StyledLink> */}
        <S.StyledLink to="/nike">Nike</S.StyledLink>
        <S.StyledLink to="/adidas">Adidas</S.StyledLink>
        <S.StyledLink to="/reebok">Reebook</S.StyledLink>
        <S.StyledLink to="/asics">Asycs</S.StyledLink>
        <S.StyledCart to="/cart">
          <img srcSet="/images/cart.svg" alt="cart" />
          <span>{count}</span>
        </S.StyledCart>
      </S.StyledLinksGroup>
    </S.StyledNav>
  );
};

export default Navbar;
