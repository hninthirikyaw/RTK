import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    console.log(data);
    setProducts(data);
    setLoading(false)
  };
  if(loading){
    return(
      <Loading />
    )
  }
  return (
    <div className=" flex flex-wrap justify-around items-center">
      {products.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Products;
