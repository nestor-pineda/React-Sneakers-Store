import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import useFetch from "../../customHooks/customFetch";
import { ProductInfo } from "./styles";
import { StyledButton } from "./styles";
import { Loader } from "./styles";

const SingleProductInfo = () => {
  const { id } = useParams();
  const { apiData: sneaker, loading, error } = useFetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers/" + id);

  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <>
      <div>
        {error && <div>{error}</div>}
        {loading && (
          <Loader>
            <img src="/images/loading.svg" alt="loading" />
          </Loader>
        )}
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
                    <StyledButton onClick={() => setCartItems([...cartItems, item])}>Add to cart</StyledButton>
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
