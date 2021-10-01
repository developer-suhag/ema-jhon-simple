import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  // handle add to cart
  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    const exist = cart.find((p) => p.key === product.key);
    let newCart = [];

    if (exist) {
      const rest = cart.filter((p) => p.key !== product.key);
      product.quantity += 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.key);
  };

  // handle localStroage
  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (products.length) {
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        storedCart.push(addedProduct);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          setCart(storedCart);
        }
      }
    }
  }, [products]);

  // dynamic search
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  };

  return (
    <div>
      <div className="search-cart">
        <div>
          <input
            type="search"
            onChange={handleSearch}
            placeholder="type here to search"
            id=""
            className="search-field"
          />
        </div>
        <div className="cart">
          <span className="icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <span className="">
            {cart.reduce((previous, current) => previous + current.quantity, 0)}
          </span>
        </div>
      </div>
      <div className="shop-contaner">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              handleCart={handleCart}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="regular-btn">
                <span className="icon">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </span>
                Review Order
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
