import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { AppContext } from '../context/AppContext'
function AppLayout() {
    const {cart} = useContext(AppContext)
  return (
    <>
        <div className='container'>
            <nav className='header'>
                <Link to={'/'}>
                    <figure className='logo'>
                        <img src='/logo.webp' alt='logo'/>
                    </figure>
                </Link>
                <ul className='nav'>
                    <li>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/cart'}>
                            <div className='header-cart'>
                                <AiOutlineShoppingCart size={25}/>
                                <span className='cart-count'>{cart.length}</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet/>
    </>
  )
}

export default AppLayout