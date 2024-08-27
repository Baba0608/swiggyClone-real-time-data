import { createContext, useContext } from "react";

const cartContext = createContext({
  total: 0,
  cartItems: [],
});

export const useCart = () => {
  return useContext(cartContext);
};

export default cartContext;
