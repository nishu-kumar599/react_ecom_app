import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEM } from "./Type";
const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
  };
  const [state, dispatch] = useReducer(CartReducer, initalState);
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,

        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
