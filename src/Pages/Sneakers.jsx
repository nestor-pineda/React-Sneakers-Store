import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../customHooks/customFetch";
import { Products } from "./styles";
import { useParams } from "react-router-dom";
import { Loader } from "./styles";

const Sneakers = () => {
  const { brand } = useParams();
  const { apiData: sneakers, loading, error } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20&brand=" + brand);

  return (
    <>
      <div>
        <h1>Blog Details - {brand}</h1>
      </div>

      <Products>
        {error && <div>{error}</div>}
        {loading && (
          <Loader>
            <img src="/images/loading.svg" alt="loading" />
          </Loader>
        )}
        {sneakers && <ProductCard sneakers={sneakers} />}
      </Products>
    </>
  );
};

export default Sneakers;

/* https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20&brand=adidas&releaseYear=gt:2021&gender=men& */
