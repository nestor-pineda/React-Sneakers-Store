import styled from "styled-components";
import { keyframes } from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1em;
`;

const Border = keyframes`
0%,
  24% {
    border-color: transparent;
  }
  25% {
    border-top-color: ${(props) => props.theme.colors.black};
  }
  49% {
    border-right-color: transparent;
  }
  50% {
    border-right-color: ${(props) => props.theme.colors.black};
  }
  74% {
    border-bottom-color: transparent;
  }
  75% {
    border-bottom-color: ${(props) => props.theme.colors.black};
  }
  99% {
    border-left-color: transparent;
  }
  100% {
    border-color: ${(props) => props.theme.colors.black};
  }
`;

const BorderAfter = keyframes`
0% {
    height: 2px;
    width: 0;
    top: -2px;
    left: -2px;
    right: auto;
    bottom: auto;
  }
  24.99% {
    width: calc(100% + 4px);
    height: 2px;
    top: -2px;
    left: -2px;
    right: auto;
    bottom: auto;
  }
  25% {
    width: 2px;
    height: 0;
    top: -2px;
    right: -2px;
    left: auto;
    bottom: auto;
  }
  49.99% {
    width: 2px;
    height: calc(100% + 4px);
    top: -2px;
    right: -2px;
    left: auto;
    bottom: auto;
  }
  50% {
    width: 0;
    height: 2px;
    bottom: -2px;
    right: -2px;
    top: auto;
    left: auto;
  }
  74.99% {
    width: calc(100% + 4px);
    height: 2px;
    bottom: -2px;
    right: -2px;
    top: auto;
    left: auto;
  }
  75% {
    width: 2px;
    height: 0;
    bottom: -2px;
    left: -2px;
    right: auto;
    top: auto;
  }
  100% {
    width: 2px;
    height: calc(100% + 4px);
    bottom: -2px;
    left: -2px;
    right: auto;
    top: auto;
  }
`;

export const SneakerCard = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border: 2px solid transparent;
  position: relative;
  display: inline-block;
  padding: 0px 20px 20px 20px;
  &:before {
    content: "";
    width: 2px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.black};
    position: absolute;
    left: -2px;
    top: -2px;
    display: none;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    background-color: ${(props) => props.theme.colors.black};
  }
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.black};
    -webkit-animation: ${Border} 1s ease-out 1;
    animation: ${Border} 1s ease-out 1;
  }
  &:hover:after {
    -webkit-animation: ${BorderAfter} 1s ease-in-out 1;
    animation: ${BorderAfter} 1s ease-in-out 1;
  }
  &:hover:before {
    display: block;
  }

  & .image {
    width: 100%;
    height: 60%;
    background: center center/cover no-repeat;
  }

  & .text {
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.white};
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
  &:hover {
    background-color: ${(props) => props.theme.colors.white};
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
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

export const Title = styled.div`
  display: flex;
  min-width: 0;
  justify-content: center;
  & .filename__base {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & .filename__extension {
    flex-shrink: 0;
  }
`;
