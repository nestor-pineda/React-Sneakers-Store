import styled from "styled-components";

export const CarouselItem = styled.div`
  margin-top: 30px;
  width: 250px;
  /* height: 180px; */
  border: 1px solid #1e1e1e;
  padding: 14px 20px;
  & .image {
    box-sizing: border-box;
    aspect-ratio: 9 / 6;
    background-color: black; /* fallback color */
    background-image: url("https://images.unsplash.com/photo-1583511655857-d19b40a7a54e");
    background-position: center;
    background-size: cover;
    transition: all 0.5s;
  }

  &:hover .image {
    transform: scale(1.2);
  }
  &:focus .image {
    transform: scale(1.2);
  }
`;
