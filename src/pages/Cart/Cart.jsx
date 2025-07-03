import React from 'react'
import './Cart.css'
const Cart = () => {
  return (
    <div className='cart-container'>
      <div className="cart-details">
        <ul className='cart-title'>
          <li>Items</li>
          <li>Title</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
          <li>Remove</li>
        </ul>
        <hr/>
      </div>
      <div className="cart-total">
        <h2>Cart Totals</h2>
        
      </div>
    </div>
  )
}

export default Cart