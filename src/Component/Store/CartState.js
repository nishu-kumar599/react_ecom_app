import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_ITEM, DECREMENT, INCREMENT } from "./Type";
const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    totalAmount: 0,
  };
  const [state, dispatch] = useReducer(CartReducer, initalState);
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const quantityIncrement = (items) => {
    dispatch({ type: INCREMENT, payload: items });
  };

  const quantityDecrement = (id) => {
    dispatch({ type: DECREMENT, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        totalAmount: state.totalAmount,
        addToCart,
        removeItem,
        quantityDecrement,
        quantityIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
