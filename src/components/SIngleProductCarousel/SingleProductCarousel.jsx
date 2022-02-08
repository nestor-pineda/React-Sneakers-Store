import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "./styles";
import { useState } from "react";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SingleProductCarousel = () => {
  const relatedProducts = [
    { title: "Blog Post 1", body: "This is the body of the blog post...", author: "Nestor", id: 1 },

    { title: "Blog Post 2", body: "This is the body of the blog post...", author: "Raquel", id: 2 },

    { title: "Blog Post 3", body: "This is the body of the blog post...", author: "Nestor", id: 3 },
  ];

  return (
    <>
      <Carousel responsive={responsive}>
        {relatedProducts.map((item) => {
          return (
            <div key={item.id}>
              <CarouselItem>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </CarouselItem>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default SingleProductCarousel;
