import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const Navigate = useNavigate();
  // console.log(props);
  const submitHandle = () => {
    Navigate({ pathname: `/Product/${props.id}` }, { replace: true });
  };
  return (
    <div className="product" onClick={submitHandle}>
      <div className="wrapper">
        <div className="row">
          <div className="col-sm-12 product-box" id={props.key}>
            <span>{props.id}</span>
            <img src={props.images} alt={props.title} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h5>Price: {props.price}</h5>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
