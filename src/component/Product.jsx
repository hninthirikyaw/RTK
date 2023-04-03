import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../feature/services/cartSlice'

const Product = (props) => {
    const {title,price,quality,image} = props
    const dispatch = useDispatch()
  return (
    <div className=' flex flex-col gap-2 p-7 shadow-xl'>
        <img src={image} className=' object-contain w-[180px] h-[200px]' />
      <p>{title.substring(0,25)}...</p>
      <p>${price}</p>
      <button onClick={()=>dispatch(addToCart(props))} className='text-white px-3 py-2 bg-purple-800 hover:bg-purple-500 rounded shadow-md'>Add to cart</button>
    </div>
  )
}

export default Product
