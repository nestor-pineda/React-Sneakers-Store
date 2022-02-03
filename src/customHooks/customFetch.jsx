import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "494e1f27damsh555a988407f3323p178078jsn6e849258c226",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("No hemos podido encontrar los datos");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [url]);

  return { apiData, loading, error };
};

export default useFetch;
