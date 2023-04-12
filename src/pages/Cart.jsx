import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../components/cart/CartItem'
import { AppContext } from '../context/AppContext'

function Cart() {
  const navigate = useNavigate()
  const {cart} = useContext(AppContext)
  let cartTotal = cart.reduce((total, cartItem) => (cartItem.item.discountAmount * cartItem.quantity) + total, 0)

  return (
    <div className='container'>
      {
        cart.length > 0 ? 
        <div>
          <h5 className='mb-3'>Your Cart ({cart.length} items)</h5>
          <div className='row'>
            <div className='col-lg-8 pe-lg-5 pe-auto'>
              {
                cart.map((item, i) => <CartItem key={i} item={item}/>)
              }
            </div>
            <div className='col-lg-4'>
              <div className='payment-summary'>
                <div
                  className='payment-summary-wrapper'
                >
                  <h5>ORDER SUMMARY:</h5>
                  <div className='payment-item'>
                    <h6>Products</h6>
                    <span>{cart.length}</span>
                  </div>
                  <div className='payment-item'>
                    <h6>Product Total</h6>
                    <span>₹ {cartTotal}</span>
                  </div>
                  <div className='payment-item'>
                    <h6>Delivery</h6>
                    <span>FREE</span>
                  </div>
                  <div className='payment-item final-amount'>
                    <h5>Total</h5>
                    <h5>{cartTotal.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                    })}/-</h5>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
        :
        <div className='d-flex justify-content-center'>
          <div className='empty-cart-wrapper'>
            <figure>
              <img className='empty-cart-img' src='empty-cart2.png' alt='empty-cart'/>
            </figure>
            <button  className='button mt-3' onClick={() => navigate('/')}>
              Shop Now
            </button>
          </div>
        </div>  
      }
    </div>
  )
}

export default Cart