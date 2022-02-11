import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const AddProduct = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>This is the add Cart page</h1>
      {cartItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default AddProduct;
