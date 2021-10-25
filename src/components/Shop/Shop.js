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
import useCart from "../../hooks/useCart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useCart();
  const [displayProducts, setDisplayProducts] = useState([]);

  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const size = 10;

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setDisplayProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  // handle add to cart

  const handleCart = (product) => {
    const exist = cart.find((p) => p.key === product.key);
    let newCart = [];

    if (exist) {
      const rest = cart.filter((p) => p.key !== product.key);
      // product.quantity += 1;
      exist.quantity += 1;
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
        // debugger;
        const addedProduct = products.find((product) => product.key === key);
        storedCart.push(addedProduct);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          setCart(storedCart);
        }
      }
    }
  }, []);

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
          {/* <span className="">
            {cart.reduce((previous, current) => previous + current.quantity, 0)}
          </span> */}
        </div>
      </div>
      <div className="shop-contaner">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product._id}
              handleCart={handleCart}
              product={product}
            ></Product>
          ))}
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
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
