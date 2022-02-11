import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const store = {
    cartItems,
    setCartItems,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};
