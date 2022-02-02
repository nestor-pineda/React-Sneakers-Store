import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../customHooks/customFetch";

const style = {
  height: 500,
  backgroundColor: "blue",
};

const Home = () => {
  const { apiData: sneakers, loading } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20");

  return (
    <div sx={{ backgroundColor: "blue" }}>
      <h1>This is the mome page</h1>
      {loading && <div>Loading...</div>}
      {sneakers && <ProductCard sneakers={sneakers} />}
    </div>
  );
};

export default Home;
