import {} from "./styles";

import * as S from "./styles";
import { useState } from "react";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

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
        <S.StyledLink to="/cart">Cart</S.StyledLink>
      </S.StyledLinksGroup>
      <button onClick={handleShowCart}>🛒</button>
      {showCart && <div>Cart items</div>}
    </S.StyledNav>
  );
};

export default Navbar;
