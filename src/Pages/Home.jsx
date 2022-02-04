import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../customHooks/customFetch";
import { Products } from "./styles";

/* const styles = {
  minHeight: "500px",
  backgroundColor: "#eee",
}; */

const Home = () => {
  const { apiData: sneakers, loading, error } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20&brand=adidas&releaseYear=gt:2021&gender=men&");

  return (
    <>
      <h1>This is the mome page</h1>

      <Products>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}

        {sneakers && <ProductCard sneakers={sneakers} />}
      </Products>
    </>
  );
};

export default Home;

/* https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=vans&sort=retailPrice:desc */
