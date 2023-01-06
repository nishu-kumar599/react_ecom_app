import { useContext } from "react";
import "../../Component/AddToCart/AddToCart.css";
import CartContext from "../../Store/CartContext";

import CartItem from "../Cart/CartItem";
const AddToCartPage = () => {
  const cartCtx = useContext(CartContext);
  const cartItemAdd = (items) => {
    cartCtx.addToCart({
      ...items,
      amount: 1,
    });
  };
  const cartItemRemove = (id) => {
    // console.log(id);
    cartCtx.removeToCart({
      id,
    });
  };

  return (
    <>
      <div className="container">
        <div className="wrapper cart_details ">
          {cartCtx.items.map((item, index) => (
            <CartItem
              key={index}
              title={item.title}
              amount={item.amount}
              price={item.price}
              image={item.image}
              onAdd={cartItemAdd.bind(null, item)}
              onRemove={cartItemRemove.bind(null, item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default AddToCartPage;
