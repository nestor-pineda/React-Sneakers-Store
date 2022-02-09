import styled from "styled-components";

export const FooterBlock = styled.div`
  width: 100%;
  max-width: 250px;
  background-color: #f5f5f5;
  margin: 0px 15px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;
  order: 2;
  & a {
    display: inline-flex;
    text-decoration: none;
    color: #1e1e1e;
    &:hover {
      color: #d73444;
    }
    & svg {
      margin-right: 10px;
    }
  }
  @media (min-width: 600px) {
    order: 1;
  }
`;

export const StyledLogoFooter = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  margin: 15px 0px 5px 15px;
  padding: 0 10px;
  display: flex;
  align-items: flex-start;
  justify-items: flex-end;
  order: 1;
  @media (min-width: 600px) {
    margin: 0px 15px 0px 0px;
    align-self: flex-end;
    align-items: flex-end !important;
    justify-items: flex-end !important;
    order: 3;
    height: 160px;
    position: relative;
    & img {
      position: absolute;
      right: 0px;
    }
  }
`;

export const StyledCopyright = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1e1e1e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
