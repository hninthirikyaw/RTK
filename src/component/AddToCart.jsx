import React from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className=" flex flex-col gap-2 items-center justify-center h-screen ">
        <p>Your cart is Empty!</p>
        <Link to={`/`}>
          <button className=" px-3 py-2 bg-violet-800 hover:bg-violet-500 text-white rounded-lg shadow-lg">Fill it</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div>
        {cartItems?.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
        <hr />
      </div>
      <div className=" flex justify-around items-center">
        <p>Total</p>
        <p>${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default AddToCart;
