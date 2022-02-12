import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 1rem;
  border: ${(props) => `1px solid ${props.theme.colors.black}`};

  & .right-side {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    min-height: 100px;
  }
  & .left-side {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 100px;
    & img {
      width: 100%;
      max-width: 70px;
    }
    & .product-info {
      margin-left: 15px;
      & p {
        color: ${(props) => props.theme.colors.greyMedium};

        margin: 0;
        & span {
          color: ${(props) => props.theme.colors.black};
        }
      }
    }
  }
`;
