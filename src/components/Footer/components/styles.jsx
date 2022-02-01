import styled from "styled-components";

export const FooterBlock = styled.div`
  width: 100%;
  max-width: 300px;
  border-right: 1px solid black;
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
  }
`;
