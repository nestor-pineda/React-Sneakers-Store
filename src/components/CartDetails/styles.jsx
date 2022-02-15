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
    width: 60px;

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
