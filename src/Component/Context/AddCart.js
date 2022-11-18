import { useContext } from "react";
import "../Context/AddToCart.css";

import CartContext from "../Store/CartContext";
const AddCart = () => {
  const { cartItems, removeItem, addToCart } = useContext(CartContext);

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
              items.id !== cartItems.id ? (
                <div className="wrapper cart_details" key={index}>
                  <div className="row justify-content-center mt-5 px-4 bg-dark rounded-5 images">
                    <div className="col-sm-2  text-center px-4 py-4 ">
                      <img src={items.thumbnail} alt={items.title} />
                    </div>
                    <div className="col-sm-2 text-light">
                      <h5 className="mt-5">Brand:{items.brand}</h5>
                    </div>
                    <div className="col-sm-2 text-light">
                      <h5 className="mt-5">price:${items.price}</h5>
                    </div>
                    <div className="col-sm-3 text-light ">
                      <div className="quantity_box mt-5">
                        Quantity: &nbsp;
                        <span
                          className="text-light border px-3 py-1 rounded-5 "
                          onClick={() => addToCart(items)}
                        >
                          +
                        </span>
                        &nbsp; {cartItems.length}
                        &nbsp;
                        <span
                          className="text-light border px-3 py-1 rounded-5"
                          onClick={() => removeItem(items)}
                        >
                          -
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-3 text-light delete_img">
                      <h5 className="mt-5">Total Amount:${items.price}</h5>
                      <button onClick={() => removeItem(items.id)}>
                        <img
                          src={require("../Context/Delete.png")}
                          alt="cart-delete"
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        ) : (
          <h1>Your card is empty</h1>
        )}
        <div className="container  mt-5">
          <div className="wrapper">
            <div className="row justify-content-end">
              <div className="col-sm-2 text-light bg-dark py-3 rounded-4">
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
