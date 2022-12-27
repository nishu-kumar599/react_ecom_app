import { useContext } from "react";
import "../Context/AddToCart.css";

import CartContext from "../Store/CartContext";
const AddCart = (prs) => {
  // const quantity = props.id;

  const { cartItems, removeItem, quantityDecrement, quantityIncrement } =
    useContext(CartContext);

  const uniqueItemsData = cartItems.reduce((prev, item) => {
    const existingItem = prev.find(({ id }) => id === item.id);
    if (existingItem) {
      existingItem.qty = existingItem.qty + item.qty;
    } else {
      prev.push(item);
    }
    return prev;
  }, []);

  return (
    <>
      <section>
        {cartItems != null ? (
          <div className="container">
            {uniqueItemsData.map((items, index) =>
              items.id !== cartItems.id
                ? (console.log(),
                  (
                    <div className="wrapper cart_details" key={index}>
                      <div className="row justify-content-center mt-5 px-4 bg-dark rounded-5 images">
                        <div className="col-sm-2  text-center px-4 py-4 ">
                          <img src={items.image} alt={items.title} />
                        </div>
                        <div className="col-sm-2 text-light">
                          <h5 className="mt-5">Brand:{items.title}</h5>
                        </div>
                        <div className="col-sm-2 text-light">
                          <h5 className="mt-5">price:${items.price}</h5>
                        </div>
                        <div className="col-sm-3 text-light ">
                          <div className="quantity_box mt-5">
                            Quantity:
                            <span
                              className="text-light border px-3 py-1 rounded-5 "
                              onClick={() => quantityIncrement(items)}
                            >
                              +
                            </span>
                            {items.quantity}
                            <span
                              className="text-light border px-3 py-1 rounded-5"
                              onClick={() => quantityDecrement(items.id)}
                            >
                              -
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-3 text-light delete_img">
                          <button onClick={() => removeItem(items.id)}>
                            <img
                              src={require("../Context/Delete.png")}
                              alt="cart-delete"
                            ></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                : null
            )}
          </div>
        ) : (
          <h1>Your card is empty</h1>
        )}
        <div className="container  mt-5">
          <div className="wrapper">
            <div className="row justify-content-end">
              <div className="col-sm-2 text-light bg-dark py-3 rounded-4">
                <p className="text-light">{}</p>
                <h5>
                  TotalAmount:$
                  {cartItems.reduce((amount, item) => item.price + amount, 0)}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddCart;
