import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 0.7rem;
  margin-bottom: 15px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  & .right-side {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    text-align: right;
    /* min-height: 80px; */
    width: 80px;

    & form {
      padding: 0px;
    }
  }
  & .left-side {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* min-height: 100px; */
    & img {
      width: 100%;
      max-width: 70px;
    }
    & .product-info {
      margin-left: 15px;
      & p {
        color: ${(props) => props.theme.colors.greyMedium};
        font-size: 13px;
        margin: 0;
        & span {
          color: ${(props) => props.theme.colors.black};
        }
      }
    }
  }
`;

export const StyledInputNumer = styled.input`
  border: ${(props) => `1px solid ${props.theme.colors.black}`};
  width: 40px;
  padding: 3px 0px 3px 5px;
  border-radius: 0px;
`;

export const StyledRemove = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.greyMedium};
  &:hover {
    color: ${(props) => props.theme.colors.red};
  }
  &::-webkit-inner-spin-button {
    opacity: 1;
  }
  &::-webkit-outer-spin-button {
    opacity: 1;
  }
  cursor: pointer;
  & .material-icons {
    font-size: 20px;
  }
  /* @media (min-width: 600px) {
  }
  @media (min-width: 900px) {
  } */
`;
