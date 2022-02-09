import styled from "styled-components";

export const Products = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  background-color: #fff;
`;

export const Loader = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: stretch;
  & img {
    width: 100%;
    max-width: 150px;
  }
`;
