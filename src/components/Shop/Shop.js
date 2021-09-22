import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handle add to cart
  const handleCart = (product) => {
    console.log(product.name);
  };
  return (
    <div className="shop-contaner">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.key}
            handleCart={handleCart}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>Order Summary</h3>
        <h5>Items ordered: 0</h5>
      </div>
    </div>
  );
};

export default Shop;
