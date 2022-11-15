import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);

  const { id } = useParams();

  const fetchData = async () => {
    const data = await axios.get(`https://dummyjson.com/products/${id}`);

    if (data?.data) {
      setProductData(data?.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const submitHandle = () => {
    navigate({ pathname: "/Product/AddCart" }, { replace: false });
  };
  return (
    <main>
      <div className="container product_detail">
        <div className="wrapper">
          {productData != null && (
            <div className="row product_image">
              <div className="col-sm-5">
                <img src={productData.thumbnail} alt={productData.title} />
                <div className="row product_thumbnail_images">
                  <div className="col-sm-3">
                    <img src={productData.images[0]} alt={productData.title} />
                  </div>
                  <div className="col-sm-3">
                    <img src={productData.images[1]} alt={productData.title} />
                  </div>
                  <div className="col-sm-3">
                    <img src={productData.images[2]} alt={productData.title} />
                  </div>
                  <div className="col-sm-3">
                    <img src={productData.images[3]} alt={productData.title} />
                  </div>
                </div>
              </div>
              <div className="col-sm-5 product_details">
                <h2>
                  {productData.brand}/{productData.category}
                </h2>
                <h1>{productData.title}</h1>
                <sup>
                  <b>Rating:</b>
                  {productData.rating}
                </sup>
                <h5>
                  <b>Stock left:</b>
                  {productData.stock}
                </h5>
                <div className="product-price">
                  <span>
                    <b>Price:</b>$ {productData.price}
                  </span>
                  <br />
                  <span>
                    <b>Discount Percentage:</b>$ {productData.price}
                  </span>
                </div>
                <p>
                  <b>Description</b>
                  <br />
                  {productData.description}
                </p>

                <button onClick={submitHandle}>Add To Cart</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
