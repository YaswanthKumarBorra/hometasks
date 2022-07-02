import React from 'react'
import Home from '../components/Home';
import Details from '../components/Details';
import Orders from '../components/Orders';
import Cart from '../components/Cart';
import { Route, Routes } from 'react-router-dom'
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/details" element={ <Details /> }/>
      <Route path="/orders" element={ <Orders /> }/>
      <Route path="/cart" element={ <Cart /> }/>
    </Routes>
  )
}

export default Routing