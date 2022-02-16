import React from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import ProductDetailComp from '../../components/ProductDetail'

const OutOfStock = () => {
  return (
    <>
        <NavBar/>
        <div className='outofstock-page'>

        <ProductDetailComp stock="Out Of Stock"/>
        </div>
        <Footer/>
    </>
  )
}

export default OutOfStock