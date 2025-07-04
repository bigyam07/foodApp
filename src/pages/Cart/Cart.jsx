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
        <hr />
      </div>
      <div className="cart-footer">
        <div className="cart-total ">
          <h2>Cart Totals</h2>
          <div className="sub-total">
            <span>Subtotal</span>
            <span>48</span>
          </div>
          <hr />
          <div className="delivery-fee">
            <span>Delivery Fee</span>
            <span>2</span>
          </div>
          <hr />
          <div className="total-amount">
            <span>Total</span>
            <span>50</span>
          </div>
          <button className='checkout-button'>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promo">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-code-section">
            <input type="text" alt='' placeholder='promo code'></input>
            <button class='promo-button'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart