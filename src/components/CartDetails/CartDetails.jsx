import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledCartItem } from "./styles";

const CartDetails = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>This is the add Cart page</h1>
      {cartItems.map((item) => (
        <StyledCartItem key={item.id}>
          <div className="left-side">
            <img src={item.media.imageUrl} alt="sneaker" />
            <div className="product-info">
              <p>
                Name: <span>{item.name}</span>
              </p>
              <p>
                Brand: <span>{item.brand}</span>
              </p>
              <p>
                Price: <span>{item.retailPrice}€</span>
              </p>
            </div>
          </div>
          <div className="right-side">
            <form>
              <input type="number" id="quantity" name="quantity" min="0" max="100" step="10" value="30"></input>
            </form>
          </div>
        </StyledCartItem>
      ))}
    </div>
  );
};

export default CartDetails;
