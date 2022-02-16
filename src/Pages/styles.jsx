import styled from "styled-components";

export const Products = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Loader = styled.div`
  width: 100%;
  height: 80vh;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: stretch;
  & img {
    width: 100%;
    max-width: 150px;
  }
`;

export const LoadButtonsSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 50px 0px;
`;

export const Button = styled.button`
  min-width: 130px;
  appearance: none;
  background-color: ${(props) => props.theme.colors.black};
  border-width: 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0 15px;
  opacity: 1;
  outline: 0;
  padding: 1.2em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1), background-color 100ms cubic-bezier(0.694, 0, 0.335, 1), color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  & span {
    display: inline-flex;
    align-items: center;
    & p {
      margin: 0 10px;
    }
  }
  &:before {
    animation: opacityFallbackOut 0.5s step-end forwards;
    backface-visibility: hidden;
    background-color: ${(props) => props.theme.colors.red};
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
  }

  &:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

  &:after {
    background-color: ${(props) => props.theme.colors.red};
  }

  & span {
    z-index: 1;
    position: relative;
  }
  @media (min-width: 900px) {
    min-width: 160px;
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
  color: #1e1e1e;
  text-transform: uppercase;
  font-weight: 700;
`;

export const StyledCart = styled.div`
  padding: 20px;
  height: 100vh;
  width: 100%;
`;

export const StyledCartH1 = styled.h1`
  text-align: center;
  color: #1e1e1e;
  text-transform: uppercase;
  font-weight: 700;
  & span {
    color: ${(props) => props.theme.colors.red};
  }
`;
