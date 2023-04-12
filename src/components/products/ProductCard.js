import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

function ProductCard({product}) {
    const navigate = useNavigate()
    const {addQuantity, cart} = useContext(AppContext)

    const handleAddtoCart = () => {
        addQuantity(product)
    }
    

  return (
    <div className='product-card'>
        <figure className='product-card-img'>
            <img src={product.imageUrl} alt={product.name}/>
        </figure>
        <div className='product-card-body'>
            <h3 className='text-truncate' title={product.name}>{product.name}</h3>
            <p title={product.description}>{product.description}</p>
        </div>
        <div className='price d-flex'>
            <h4 className='discount-price'>₹ {product.discountAmount}</h4>
            <span className='actual-price'><del>{product.price}</del></span>
        </div>
        {
            cart.findIndex(item => item.item._id === product._id) !== -1 ?
            <div className='card-bottom' onClick={ () => navigate('/cart')}>
                <button className='button'>View Cart</button>
            </div>
            :
            <div className='card-bottom' onClick={handleAddtoCart}>
                <button className='button'>Add To Cart</button>
            </div>

        }
    </div>
  )
}

export default ProductCard