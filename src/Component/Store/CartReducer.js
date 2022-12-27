import { ADD_TO_CART, REMOVE_ITEM, DECREMENT, INCREMENT } from "./Type";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    case INCREMENT: {
      console.log("this is items", state.cartItems);
      // console.log("this is payloadss", action.payload);
      const found = state.cartItems.findIndex(
        (obj) => obj.id === action.payload.id
      );
      console.log(found.quantity);
      const updateCart = +found.quantity + 1;
      console.log(updateCart);

      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    }

    case DECREMENT: {
      for (let i = 0; i < state.cartItems?.id; i++) {
        if (Number(state.cartItems[i].id) === Number(action.payload)) {
          state.cartItems.splice(i, 1);
          break;
        }
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
