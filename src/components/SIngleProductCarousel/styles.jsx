import styled from "styled-components";

export const CarouselItem = styled.div`
  margin-top: 30px;
  width: 250px;
  /* height: 180px; */

  padding: 14px 20px;
  text-align: center;
  & .image {
    box-sizing: border-box;
    aspect-ratio: 9 / 6;
    background-color: black; /* fallback color */
    background-image: url("https://images.unsplash.com/photo-1583511655857-d19b40a7a54e");
    background-position: center;
    background-size: cover;
    transition: all 0.5s;
    cursor: pointer;
  }

  &:hover .image {
    transform: scale(1.2);
  }
  &:focus .image {
    transform: scale(1.2);
  }
  & h2 {
    & a {
      color: #1e1e1e;
      transition: color 0.5s ease 0s;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: #d73444;
      }
    }
  }
`;
