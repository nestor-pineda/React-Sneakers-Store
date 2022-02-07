// import { useParams } from "react-router-dom";
// import useFetch from "../customHooks/customFetch";
import SingleProductInfo from "../components/SingleProductInfo/SingleProductInfo";
import SingleProductCarousel from "../components/SIngleProductCarousel/SingleProductCarousel";

const SingleProduct = () => {
  /*   const { id } = useParams();
  const { apiData: sneaker, loading, error } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers/" + id); */

  return (
    <>
      <SingleProductInfo />
      <SingleProductCarousel />
    </>
  );
};

export default SingleProduct;
