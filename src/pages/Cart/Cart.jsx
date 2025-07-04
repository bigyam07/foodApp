import './Cart.css'
import { assets } from '../../assets/frontend_assets/assets.js'
import { food_list } from '../../assets/frontend_assets/assets.js'
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
        <div className="cart-items">
          <ul className='cart-item-list'>
            <li><img id='menu-list-image' src={food_list[1].image} alt="" /></li>
            <li>Greek salt</li>
            <li>$12</li>
            <li>2</li>
            <li>$24</li>
            <li><img src={assets.cross_icon} alt="" /></li>
          </ul>
        </div>
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
            <button className='promo-button'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart