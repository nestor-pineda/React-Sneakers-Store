import ProductCard from "../components/ProductCard/ProductCard";
import useFetch from "../customHooks/customFetch";
import { Products } from "./styles";
import { useParams } from "react-router-dom";
import { Loader } from "./styles";
import { useState } from "react";
import { LoadButtonsSection, LoadButton } from "./styles";

const Sneakers = () => {
  const { brand } = useParams();
  const [page, setPage] = useState(0);

  const { apiData: sneakers, loading, error } = useFetch(`https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20&page=${page}&brand=${brand}`);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const loadLess = () => {
    setPage((prevPage) => prevPage - 1);
  };

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
        <LoadButtonsSection>
          <LoadButton onClick={loadLess} className="button-48">
            <span className="text">
              {loading ? (
                "Loading..."
              ) : (
                <span>
                  <img src="/images/back-arrow.svg" alt="back" /> <p>less</p>
                </span>
              )}{" "}
            </span>
          </LoadButton>
          <LoadButton onClick={loadMore} className="button-48">
            <span className="text">
              {loading ? (
                "Loading..."
              ) : (
                <span>
                  <p>more</p>
                  <img src="/images/forward-arrow.svg" alt="back" />
                </span>
              )}
            </span>
          </LoadButton>
        </LoadButtonsSection>
      </Products>
    </>
  );
};

export default Sneakers;

/* https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20&brand=adidas&releaseYear=gt:2021&gender=men& */
