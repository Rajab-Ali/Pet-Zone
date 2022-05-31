import React from 'react'
import './productshop.css'
import ProductCard from '../../Components/ProductCard'
import Layout from '../../Layout'
const Index = () => {
  return (
    <Layout>
        <div className='col-md-12 mt-5 mb-4'>
          <h2 className='text-center'>Product Shop</h2>
        </div>
        <div className='col-md-9 product-shop-cont '> 
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>
    </Layout>
  )
}

export default Index