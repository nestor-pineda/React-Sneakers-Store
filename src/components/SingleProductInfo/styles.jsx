import styled from "styled-components";

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-bottom: 1px solid #1e1e1e;
  & .product-img {
    width: 96vw;
    /* height: 200px; */
    background: #fff center center/cover no-repeat;
    box-sizing: border-box;
    aspect-ratio: 9 / 5;
  }
  & .product-info {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    text-align: center;
    padding: 1em;
    & h2 {
      font-size: clamp(1.8rem, 4vw, 4rem);
      margin-top: 0px;
      margin-bottom: 1rem;
    }
    & h3 {
      font-size: clamp(1.6rem, 3vw, 3rem);
      margin-top: 0px;
      margin-bottom: 1rem;
      & span {
        color: #ccc;
      }
    }
    & h4 {
      font-size: clamp(1.4rem, 2.5vw, 2.5rem);
      margin-top: 0px;
      margin-bottom: 1rem;
      & span {
        color: #ccc;
      }
    }
    & p {
      font-size: clamp(1rem, 1.3vw, 1.3rem);
      margin-top: 0px;
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    & .product-img {
      width: 45%;
      /* background: #fff center center/cover no-repeat;
    box-sizing: border-box;
    aspect-ratio: 9 / 5; */
    }
    & .product-info {
      width: 45%;
      height: auto;
      background-color: #fff;
      text-align: left;
      padding: 1em;
      & h2 {
        margin-top: 0px;
      }
      & h3 {
        margin-top: 0px;
      }
      & h4 {
        margin-top: 0px;
      }
      & p {
        margin-top: 0px;
      }
    }
  }
`;

export const StyledButton = styled.button`
  background-color: #fff;
  border: 2px solid #422800;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-bottom: 2rem;
  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: #1e1e1e 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
  & a {
    color: #d73444;
    text-decoration: none;
    transition: color 0.5s ease 0s;
    &:hover {
      color: #1e1e1e;
    }
  }
`;
