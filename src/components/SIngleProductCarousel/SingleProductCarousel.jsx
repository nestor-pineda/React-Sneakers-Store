import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "./styles";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1921 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1025 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 601 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const SingleProductCarousel = () => {
  const relatedProducts = [
    { name: "White Black", image: "https://images.stockx.com/images/Nike-Dunk-Low-White-Black-2022-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1643138443", id: "ad3cba1c-fe72-44f1-b8e3-e4d70d3281fd" },
    { name: "Summit White", image: "https://images.stockx.com/images/Nike-Retro-GTS-97-Summit-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1642621202", id: "316eab1e-fe98-466d-bf14-b39b622f927d" },
    {
      name: "Bad Bunny Benito",
      image: "https://images.stockx.com/images/adidas-Forum-Powerphase-Bad-Bunny-Benito.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1643222537",
      id: "8ab97a62-ba75-4f5b-8978-3d68c777a256",
    },
    {
      name: "Bape White",
      image: "https://images.stockx.com/images/Reebok-Club-C-85-Bape-White-Contrast-Stitch-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1638552556",
      id: "6df45f6e-cc9f-41c4-9776-557e12e6edf9",
    },
    {
      name: "Kith Salmon Toe",
      image: "https://images.stockx.com/images/ASICS-Gel-Lyte-V-Kith-Salmon-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1643116778",
      id: "609bb14e-0185-4adf-9d66-f475b1de9487",
    },
  ];

  return (
    <>
      <Carousel responsive={responsive} autoPlaySpeed={1000} transitionDuration={500}>
        {relatedProducts.map((item) => {
          return (
            <div key={item.id}>
              <CarouselItem>
                {/* <img src={item.image} alt="related products" />; */}
                <Link to={`/product/${item.id}`}>
                  <div className="image" style={{ backgroundImage: `url(${item.image})` }}></div>
                </Link>
                <h2>
                  <Link to={`/product/${item.id}`}>{item.name} </Link>
                </h2>
              </CarouselItem>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default SingleProductCarousel;
