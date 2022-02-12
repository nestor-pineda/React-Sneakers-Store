import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.greyLight};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border-top: ${(props) => `1px solid ${props.theme.colors.black}`};

  & h1 {
    color: ${(props) => props.theme.colors.black};
  }
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    align-items: strech;
  }
`;
