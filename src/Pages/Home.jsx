import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../customHooks/customFetch";

const styles = {
  minHeight: "500px",
  backgroundColor: "#eee",
};

const Home = () => {
  const { apiData: sneakers, loading, error } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20");

  return (
    <div style={styles}>
      <h1>This is the mome page</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {sneakers && <ProductCard sneakers={sneakers} />}
    </div>
  );
};

export default Home;
