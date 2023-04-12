import { createContext, useState } from "react";

export const AppContext = createContext()

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): []
}


const AppProvider = ({children}) => {
    const [cart, setCart] = useState(initialState.cart)
    const [cartTotal, setCartTotal] = useState(0)

    const addQuantity = (product) => {
        var tempCart = [...cart] 
        const item = cart.find(item => item.item._id === product._id)
        if(!item){
            tempCart.push({
                item: product,
                quantity: 1
            })
        }else{
            tempCart = tempCart.map((cartItem) => {
                if(cartItem.item._id === product._id){
                    console.log({
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    })
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                }else{
                    return cartItem
                }
            })
        }
        setCart(tempCart)
        localStorage.setItem('cart', JSON.stringify(tempCart))

    }

    const minusQuantity = (product) => {
        var cartItems = [...cart]
        const item = cartItems.find(item => item.item._id === product._id)
        if(item.quantity === 1){
            cartItems = cartItems.filter(item => item.item._id !== product._id)
        }else{
            cartItems = cartItems.map((cartItem) => {
                if(cartItem.item._id === product._id){
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    }
                }else{
                    return cartItem
                }
            })
        }
        setCart(cartItems)
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const removeItem = (productId) => {
        var cartItems = [...cart]
        cartItems = cartItems.filter(cartItem => cartItem.item._id !== productId)
        setCart(cartItems)
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    
    return(
        <AppContext.Provider
            value={{
                cart,
                setCart,
                setCartTotal,
                addQuantity, 
                minusQuantity,
                removeItem,
                cartTotal
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider