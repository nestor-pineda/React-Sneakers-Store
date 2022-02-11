import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  justify-contemt: flex-start;
  align-items: stretch;
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  border: 1px solid #1e1e1e;
  
  & .right-side { 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    background-color:#fff;
    min-height:100px;
  }
  & .left-side {
    display: flex;
    justify-contemt: flex-start;
    align-items: center;
    min-height:100px;
    background-color: #fff;
    & img {
      width: 100%;
      max-width:70px;
    }
    & .product-info {
      margin-left:15px;
      & p {
        color:#c0c0c0;
      
        margin:0;
        & span {
          color:#1e1e1e;
        }
      }
    }
    
 
    `;
