import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselItem } from "./styles";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/customFetch";

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
  const { id } = useParams();
  const { apiData: sneaker, loading, error } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&brand=adidas&releaseYear=gt:2021&gender=men&");

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {sneaker && (
        <>
          {sneaker.results.map((item) => {
            return (
              <Carousel responsive={responsive}>
                <div key={item.id}>
                  <CarouselItem style={{ backgroundImage: `url(${item.media.imageUrl})` }}>
                    {/* <div class="image"></div> */}
                    hola
                  </CarouselItem>
                </div>
              </Carousel>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SingleProductCarousel;
