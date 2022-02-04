import {} from "./styles";

import * as S from "./styles";

const Navbar = () => {
  return (
    <S.StyledNav>
      <S.StyledLogo to="/">logo</S.StyledLogo>
      <S.StyledLinksGroup className="wrapper">
        {/* <S.StyledLink to="/">Home</S.StyledLink> */}
        <S.StyledLink to="/adidas">Nike</S.StyledLink>
        <S.StyledLink to="/adidas">Adidas</S.StyledLink>
        <S.StyledLink to="/adidas">Reebook</S.StyledLink>
        <S.StyledLink to="/adidas">Asycs</S.StyledLink>
      </S.StyledLinksGroup>
    </S.StyledNav>
  );
};

export default Navbar;
