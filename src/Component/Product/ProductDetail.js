import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../Product/Product.css";
import { useParams } from "react-router-dom";
import { GlassMagnifier } from "react-image-magnifiers";
import { FcCollapse, FcExpand } from "react-icons/fc";
import CartContext from "../Store/CartContext";

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(0);
  const { id } = useParams();
  const [value, setValue] = useState(1);

  const changeImage = (e) => {
    const images = e.target.src;
    if (images) {
      setImage(images);
    }
  };

  const fetchData = async () => {
    const data = await axios.get(`https://dummyjson.com/products/${id}`);

    if (data?.data) {
      setProductData(data?.data);
    }
  };
  useEffect(() => {
    fetchData();
  });
  const onCartValue = (e) => {
    const val = e.target.value;
    if (val) {
      setValue(val);
    }
  };

  return (
    <main>
      <div className="container product_detail">
        <div className="wrapper">
          {productData != null && (
            <div className="row product_image">
              <div className="col-sm-6 product_big_image">
                <span className="icon_left">
                  <FcCollapse></FcCollapse>
                </span>
                <GlassMagnifier
                  imageSrc={image !== 0 ? image : productData.thumbnail}
                  imageAlt={productData.title}
                />
                <span className="icon_right">
                  <FcExpand />
                </span>
                <div className="row product_thumbnail_images">
                  {productData.images.map((img, index) => (
                    <div className="col-sm-3" key={index}>
                      <img
                        src={img}
                        alt={productData.title}
                        onClick={changeImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-sm-6 product_details">
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
                <div className="row add_to_cart_section">
                  <div className="col-sm-12 d-flex  ">
                    <form>
                      <input
                        onClick={onCartValue}
                        placeholder={value}
                        type="number"
                        min={1}
                        max={5}
                      />
                    </form>

                    <button
                      onClick={() =>
                        addToCart({
                          id: productData.id,
                          quantity: value,
                          title: productData.title,
                          price: productData.price,
                          image: productData.thumbnail,
                        })
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
