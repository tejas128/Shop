import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import request from '../config/axiosConfig'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProducts = async() => {
        setLoading(true)
        try{
            const data = {
                limit: 10,
                page: 0
            }
            const products = await request({
                url:'/product/getAllProduct',
                method:'post',
                data
            })
            setProducts(products)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    },[])
    return (
        <div className='container'>
            {
                !loading ? 
                <div className='row'>
                    {
                        products.map((product, i) => (
                            <div className='col-md-6 col-lg-4 col-xl-3  mb-3'  key={i}>
                                <ProductCard product={product}/>
                            </div>
                        ))
                    }
                </div>
                :
                <span>Loading data...</span>
            }
        </div>
    )
}

export default Products