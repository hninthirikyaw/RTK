import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {cartItems} = useSelector(state=> state.cart)
  console.log(cartItems)
  return (
    <div className=" flex justify-around bg-sky-100 p-2 ">
      <Link to={`/`}>
        <h2 className=" text-2xl font-semibold tracking-wider">Shopie</h2>
      </Link>
      <div className=" flex justify-between gap-4 items-center">
      <input
        type="search" 
        
        className=" border-none px-2 py-1 rounded "
        placeholder="search products..."
      />

      <Link to={`/addtocart`}>
      <div className=" relative">
        <p className=" text-3xl text-sky-900">
          <AiOutlineShoppingCart />
        </p>
        <span className=" absolute bottom-4 left-5 bg-gray-600 w-5 h-5 rounded-[50%] flex items-center justify-center text-white">{cartItems.length}</span>
      </div>
      </Link>
      </div>
    </div>
  )
}

export default Navbar
