import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyledCartItem, StyledRemove, StyledInputNumer } from "./styles";
import "./styles.scss";

const CartDetails = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const deleteItem = (item, index) => {
    const cartItemsTemp = [...cartItems];
    cartItemsTemp.splice(index, 1);
    setCartItems(cartItemsTemp);
  };

  return (
    <div>
      {cartItems.map((item, index) => (
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
            {/* <form> */}
            <StyledInputNumer type="number" id="quantity" name="quantity" min="1" max="100" step="1" placeholder="1"></StyledInputNumer>

            {/* </form> */}
            <StyledRemove onClick={() => deleteItem(item, index)}>
              <span className="material-icons">&#xe888;</span>
            </StyledRemove>
          </div>
        </StyledCartItem>
      ))}
    </div>
  );
};

export default CartDetails;
