import React, { useState, useCallback, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart, addToOrders, removeFromCart, saveAddress, emptyAddress } from '../redux/actions/cartAction'

const Cart = () => {
  const books = useSelector((state) => state.cart.cartArr)
  //const address = useSelector((state) => state.cart.address)

  const [disable, setDisable] = useState(true);
  const [tempCart, setTempCart] = useState([])
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const saveAdrs = (e) => {
    const addressFrom  = new FormData(document.getElementById('addressForm'));
    console.log(addressFrom)
    const newAddress = {
      Name: addressFrom.get('name'),
      Phone: addressFrom.get('phno'),
      Email: addressFrom.get('email'),
      Address: addressFrom.get('address')
    };
    dispatch(saveAddress(newAddress));
    setDisable(true)
  }

  const editAdrs = () => {
    setDisable(false)
  }

  const ShippingAddress = () => {

    return (
        <div className='address'>
          <form className='address-form' id='addressForm'>
            <table>
              <tbody>
                <tr>
                  <th colSpan="2">Shipping Address</th>
                </tr>
                <tr>
                  <td><label>Name : </label></td>
                  <td><input type="text" name="name" defaultValue="John" disabled={disable} required/></td>
                </tr>
                <tr>
                  <td><label>Phone No : </label></td>
                  <td><input type="number" name="phno" defaultValue="738365874" disabled={disable} required/></td>
                </tr>
                <tr>
                  <td><label>Email : </label></td>
                  <td><input type="email" name="email" defaultValue="john@gmail.com" disabled={disable} required/></td>
                </tr>
                <tr>
                  <td><label>Address : </label></td>
                  <td><textarea type="text" name="address" defaultValue="Enter complete address" disabled={disable} required></textarea></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td><center><button id="save" disabled={disable} onClick={saveAdrs} required>Save Address</button></center></td>
                  <td><center><button id="edit" disabled={!disable} onClick={editAdrs}>Edit Address</button></center></td>
                </tr>
              </tfoot>
            </table>
          </form>
        </div>

    )
  }


  useEffect(() => {
    const tempBooks = books.reduce((acc, curr) => {
      if (acc[curr.id]) acc[curr.id] = { ...curr, count: acc[curr.id].count + 1 };
      else acc[curr.id] = { ...curr, count: 1 };
      return acc;
    }, {});
    setTempCart(Object.values(tempBooks))
  },[books])

  const remove = (id) => {
    dispatch(removeFromCart(id));
  }

  const goToOrders = useCallback(() => navigate('/orders'),[navigate])
  const AddToOrders = () => {
    alert('Order placed!')
    const orders = tempCart.map((book) => ({
      ...book,
      date: new Date().toDateString()
    }))

    dispatch(addToOrders(orders));
    goToOrders();
  }

  const goToHome = useCallback(() => navigate('/'),[navigate])
  const empty = () => {
    dispatch(emptyCart())
    dispatch(emptyAddress())
    goToHome();
  }

  const ShoppingCart = () => {
    const item_prices = books.reduce((prev, cur) => prev + parseInt(cur.price), 0)
    const tax = item_prices * 12 / 100;
    const shipping_charges = 50;
    const total_price = (item_prices + tax + shipping_charges).toFixed(2);
    console.log(total_price);
    console.log(books);
    return (
      <div>
        {
          tempCart.map((book) => {
            return (
              <div key={book.id}>
              <div className='cart-book-container'>
                <div className='book-image'>
                    <img src={ book.coverPage } alt="coverpage"/>
                </div>
                <div className='book-cart-details'> 
                  <span>{book.title}</span><br/>
                  <span>Rs.{book.price} X {book.count}</span>
                  
                </div>
                <button id="remove" onClick={() => {remove(book.id)}}>Remove</button>
              </div>
                
              </div>
            )
          })
        }
        <div className='payment'>
          <table className='payment-table'>
            <tbody>
            <tr>
              <th colSpan="2">Payment Info</th>
            </tr>
            <tr>
              <td>Items Price :</td>
              <td>Rs.{item_prices}</td>
            </tr>
            <tr>
              <td>Tax :</td>
              <td>Rs.{tax}</td>
            </tr>
            <tr>
              <td>Shipping Charges :</td>
              <td>Rs.{shipping_charges}</td>
            </tr>
            <tr>
              <td>Total :</td>
              <td>Rs.{total_price}</td>
            </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><center><button id="checkout" onClick={AddToOrders}>Checkout</button></center></td>
                <td><center><button id="cancel" onClick={empty}>Cancel</button></center></td>
                </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }

  return(
    <div>
      { books.length !== 0 ? 
        <div className='cart'>
          <ShippingAddress />
          <ShoppingCart />
        </div>
        : <h1 style={{textAlign: "center"}}>Cart is Empty</h1>
      }
    </div>
  )
}

export default Cart;