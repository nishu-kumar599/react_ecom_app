import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import axios from "axios";
const Dashboard = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const data = await axios.get("https://dummyjson.com/products/");
    // console.log(data);
    if (data?.data?.products) {
      setUser(data?.data?.products);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(user);
  return (
    <main>
      {user.map((product, index) => (
        <Product
          key={index}
          images={product.images[0]}
          title={product.title}
          description={product.description}
          price={product.price}
          id={product.id}
        />
      ))}
    </main>
  );
};
export default Dashboard;
