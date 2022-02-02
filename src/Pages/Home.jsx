import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  const [sneakers, newSneakers] = useState(null);

  useEffect(() => {
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "494e1f27damsh555a988407f3323p178078jsn6e849258c226",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        newSneakers(data);
      });
  }, []);

  return <div>{sneakers && <ProductCard sneakers={sneakers} />}</div>;
};

export default Home;
