import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

function CartItem({item}) {
    const { addQuantity, minusQuantity, removeItem} = useContext(AppContext)
  return (
    <div className='cart-item'>
        <div className='row align-ite'>
            <div className='col-lg-6'>
                <div className='row align-items-center'>
                    <div className='col-sm-6'>
                        <figure className='cart-image'>
                            <img src={item.item.imageUrl} alt={item.item.name}/>
                        </figure>
                    </div>
                    <div className='col-sm-6'>
                        <h5>{item.item.name}</h5>
                        <p>₹ {item.item.discountAmount}</p>
                        <span className='remove-btn' onClick={() =>removeItem(item.item._id) }>Remove</span>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='counter'>
                            <div className='counter-action' onClick={() => minusQuantity(item.item)}>-</div>
                            <div className='counter-quantity'>{item.quantity}</div>
                            <div className='counter-action' onClick={() => addQuantity(item.item)}>+</div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='total'>
                            ₹ {item.quantity * item.item.discountAmount}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem