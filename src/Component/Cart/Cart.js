import { useState } from "react";
import PayPal from "../PayPal/PayPal.js";

const Cart = (props) => {
  const [payment, makePayment] = useState(false);
  const totalAmount = props.cartItemsTotal;
  // console.log(totalAmount.cartTotal);
  // console.log(props.cartItemsTotal.totalAmount);
  const product = {
    total: totalAmount.cartTotal,
    title: totalAmount.title,
  };
  return (
    <>
      <section>
        <div className="container  mt-5">
          <div className="wrapper">
            <div className="row justify-content-end">
              <div className="col-sm-2 text-light bg-dark py-3 rounded-4 text-center align-items-sm-center">
                <h6>
                  TotalAmount:$
                  {totalAmount.cartTotal}
                </h6>
              </div>
            </div>
            {payment ? (
              <div className="payment_button">
                <PayPal className="paypal" product={product} />
              </div>
            ) : (
              <div className="row justify-content-end mt-2">
                <div className="col-sm-2">
                  <button
                    className="fw-semibold rounded-2 px-3 py-2"
                    onClick={() => makePayment(true)}
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
