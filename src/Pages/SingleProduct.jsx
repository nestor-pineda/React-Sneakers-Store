import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [sneaker, newSneaker] = useState(null);

  useEffect(() => {
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers/" + id, {
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
        newSneaker(data);
      });
  }, []);

  return (
    <div>
      <h1>This is the singel product page with id: {id}</h1>
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
