import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Products from './component/Products'
import AddToCart from './component/AddToCart'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/addtocart' element={<AddToCart />} />
      </Routes>
    </>
  )
}

export default App

