import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
  }
  @media (min-width: 900px) {
    padding-left: 40px;
  }
`;

export const StyledLogo = styled(Link)`
  font-size: 2em;
  text-decoration: none;
  margin: 10px 0px 5px 0px;
  color: #fff;
  @media (min-width: 600px) {
    margin: 0px 30px 0px 0px;
  }
  @media (min-width: 900px) {
    margin: 0px 50px 0px 0px;
  }
`;

export const StyledLinksGroup = styled.div`
  margin: 5px 0px 10px 0px;
  @media (min-width: 600px) {
    margin: 0px 0px 0px 0px;
  }
`;

export const StyledLink = styled(Link)`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  transition: 0.5s color ease;
  text-decoration: none;
  color: #fff;
  font-size: 1em;
  margin: 0 10px;
  &:hover {
    color: #d73444;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: relative;
    transition: 0.5s color ease;
    text-decoration: none;
    /* font-size: 1.2em; */
  }
  &:after {
    content: "";
    transition: 0.5s all ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    bottom: -0.25em;
    height: 5px;
    height: 0.35rem;
    width: 0;
    background: #d73444;
    left: 0;
  }
  &:visited {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: relative;
    transition: 0.5s color ease;
    text-decoration: none;
    color: #81b3d2;
    font-size: 1.2em;
  }
  &:active {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: relative;
    transition: 0.5s color ease;
    text-decoration: none;
    color: #81b3d2;
    font-size: 1.2em;
  }
  &:hover:after {
    width: 100%;
  }
  @media (min-width: 600px) {
    font-size: 1.2em;
  }
  @media (min-width: 900px) {
    font-size: 1.4em;
    margin: 0 15px;
  }
`;
