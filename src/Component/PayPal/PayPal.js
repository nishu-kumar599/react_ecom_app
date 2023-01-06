import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
const PayPal = (product) => {
  const total = product.product.total;
  const description = product.product.title;

  const navigate = useNavigate();
  const createOrder = (data, action) => {
    // console.log(data);
    return action.order.create({
      purchase_units: [
        {
          description: description,
          amount: {
            currency_code: "USD",
            value: total,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    navigate({ pathname: "/Dashboard/Success" }, { replace: false });
    return actions.order.capture();
  };
  return (
    <>
      <div className="row justify-content-end mt-2">
        <div className="col-sm-2">
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      </div>
    </>
  );
};
export default PayPal;
