import React from 'react'
import { Home, Details, Orders, Cart } from '../components';
import { Route, Routes } from 'react-router-dom'

const RouteList = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/details",
    element: <Details />
  },
  {
    path: "/orders",
    element: <Orders />
  },
  {
    path: "/cart",
    element: <Cart />
  },
]

const Routing = () => {
  return (
    <Routes>
      {
        RouteList.map((individualRoute, index) => {
          return(
            <Route key={index} path={individualRoute.path} element={individualRoute.element}/>
          )
        })
      }




      
      {/* <Route path="/details" element={ <Details /> }/>
      <Route path="/orders" element={ <Orders /> }/>
      <Route path="/cart" element={ <Cart /> }/> */}
    </Routes>
  )
}

export default Routing