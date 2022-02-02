import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/customFetch";

const SingleProduct = () => {
  const { id } = useParams();
  const { apiData: sneaker, loading } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers/" + id);

  return (
    <div>
      <h1>This is the singel product page with id: {id}</h1>
      {loading && <div>Loading...</div>}
      {sneaker && (
        <>
          {sneaker.results.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.media.imageUrl} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.retailPrice}</p>
                <p>{item.brand}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SingleProduct;
