import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://obscure-shore-51996.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return [products];
};

export default useProducts;
