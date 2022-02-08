import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/customFetch";
import { ProductInfo } from "./styles";
import { Link } from "react-router-dom";
import { StyledButton } from "./styles";

const SingleProductInfo = () => {
  const { id } = useParams();
  const { apiData: sneaker, loading, error } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers/" + id);

  return (
    <>
      <div>
        <h1>This is the singel product page with id: {id}</h1>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {sneaker && (
          <>
            {sneaker.results.map((item) => {
              return (
                <ProductInfo key={item.id}>
                  <div className="product-img" style={{ backgroundImage: `url(${item.media.imageUrl})` }}></div>
                  <div className="product-info">
                    <h2>{item.name}</h2>
                    <h3>
                      <span>Price:</span> {item.retailPrice}€
                    </h3>
                    <h4>
                      <span>Brand:</span> {item.brand}
                    </h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum autem soluta voluptas corporis id, dolorum libero mollitia, nulla iusto saepe excepturi modi ullam officia eveniet sequi distinctio eius aliquam.</p>
                    <StyledButton>
                      <Link to={`/product/${item.id}`}>Add to cart</Link>
                    </StyledButton>
                  </div>
                </ProductInfo>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default SingleProductInfo;
