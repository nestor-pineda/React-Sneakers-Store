import styled from "styled-components";

export const StyledLog = styled.button`
  background: transparent;
  position: absolute;
  border: none;
  color: #fff;
  margin-left: 28px;
  margin-top: 2px;
  & .material-icons {
    font-size: 16px;
  }
  @media (min-width: 600px) {
    margin-left: 0px;
    margin-top: 4px;
    right: 20px;
    & .material-icons {
      font-size: 18px;
    }
  }
  @media (min-width: 900px) {
    margin-left: 0px;
    margin-top: 4px;
    right: 30px;
    & .material-icons {
      font-size: 21px;
    }
  }
`;
