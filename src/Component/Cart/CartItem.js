import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Cart from "../Cart/Cart";

const CartItem = (props) => {
  const cartTotal = useContext(CartContext);
  const total = {
    cartTotal: cartTotal.totalAmount,
    price: props.price,
    title: props.title,
  };
  return (
    <>
      <section>
        <div className="container mt-4">
          <div className="wrapper">
            <div
              className="row justify-content-center align-items-center px-4 bg-dark rounded-5 images"
              key={props.id}
            >
              <div className="col-sm-3  text-center px-4 py-4 ">
                <img src={props.image} alt={props.title} />
              </div>
              <div className="col-sm-3 text-light text-center">
                <h6>Brand:{props.title}</h6>
              </div>
              <div className="col-sm-3 text-light text-center">
                <h6>price:${props.price}</h6>
              </div>
              <div className="col-sm-3 text-light ">
                <div className="row">
                  <div className="col-sm-3 text-center ">
                    <span
                      className="text-light border px-3 pt-1 pb-2 rounded-5 mt-4 cursor-pointer"
                      onClick={props.onAdd}
                    >
                      +
                    </span>
                  </div>
                  <div className="col-sm-6 text-center">
                    <h6 className="Quantity">Quantity:x{props.amount}</h6>
                  </div>
                  <div className="col-sm-3 text-center ">
                    <span
                      className="text-light border  px-3 pt-1 pb-2 rounded-5 cursor-pointer"
                      onClick={props.onRemove}
                    >
                      -
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cart cartItemsTotal={total} />
    </>
  );
};
export default CartItem;
