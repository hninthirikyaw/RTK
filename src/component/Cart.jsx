import React from 'react'
import {IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
import { useDispatch } from 'react-redux'
import { addQuantity, decreaseQuantity, removeFromCart } from '../feature/services/cartSlice'


const Cart = (props) => {
    const {title, price, quantity, image} = props
    const dispatch = useDispatch()
    const itemPrice = quantity * price 
  return (
    <div className=' flex items-center justify-center gap-20 mb-4'>
         <div className=' w-[200px]  items-center'>
         <img src={image} className=" w-[100px] rounded shadow-md " />
         </div>
         <div>
         <p className=' text-xl font-semibold text-gray-600'>{title}</p>
         <p className=' text-sky-700 font-bold tracking-wider text-md'>${itemPrice}</p>
         <p onClick={()=> dispatch(removeFromCart(props))} className='  text-red-600 font-semibold' >remove</p>
         </div>
         <div className=' flex flex-col items-center justify-center'>
           <p onClick={()=> dispatch(addQuantity(props))} className='  px-2 py-1 rounded text-xl  items-center justify-center cursor-pointer hover:bg-gray-200' >
           <IoIosArrowUp />
           </p>
           <p className='my-1 font-semibold text-xl'>{quantity}</p>
           <p onClick={()=> dispatch(decreaseQuantity(props))} className='  px-2 py-1 rounded   text-2xl items-center justify-center cursor-pointer hover:bg-gray-200'>
            <IoIosArrowDown />
           </p>
         </div>
       </div>
  )
}

export default Cart
