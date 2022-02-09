import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border-top: 1px solid #1e1e1e;

  & h1 {
    color: #ff0000;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    align-items: strech;
  }
`;
