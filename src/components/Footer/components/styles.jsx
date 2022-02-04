import styled from "styled-components";

export const FooterBlock = styled.div`
  width: 100%;
  max-width: 250px;
  background-color: white;
  margin: 0px 15px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;
  & a {
    display: inline-flex;
    text-decoration: none;
    color: #232323;
    &:hover {
      color: #fff000;
    }
    & svg {
      margin-right: 10px;
    }
  }
`;

export const StyledLogoFooter = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: white;
  margin: 0px 15px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-items: flex-sart;
`;

export const StyledCopyright = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #000;
  text-align: center;
`;
