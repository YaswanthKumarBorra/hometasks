import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Orders = () => {
  const orders = useSelector((state) => state.cart.orders)
  const [orderedBooks, setOrderedBooks] = useState([]);

  useEffect(() => {
    setOrderedBooks(...orders)
  },[orders])
  
  const OrderList = () => {
    return (
      <div>
        {
          orderedBooks.map((order,index) => {
            return (
              <div className="order" key={index}>
                    <div className="order-header">
                        <span>Order Placed : {order.date}</span>
                        <span>Status : Delivered</span>
                    </div>
                    <div className="order-body">
                        <div className="book-order-img">
                            <img className='orderCover' src={order.coverPage} alt="Book CoverPage" />
                        </div>
                        <div className="book-order-info">
                            <div className="book-order-title">
                              Title : {order.title}
                            </div>
                            <div className="book-order-authors">
                                Author : {order.author}
                            </div>
                            <div className="book-order-price">
                                Price : {order.price} X {order.count}
                            </div>
                        </div>
                    </div>
                </div>
            )
          })
        }
      </div>
    )
  }

  return(
    <div>
      {
    (orders.length !== 0 ) 
    ? (<div className='orders'>
      <OrderList />
    </div>)
    : <h1 style={{textAlign: "center"}}>No Books Ordered</h1>}
    </div>
  )
}

export default Orders;