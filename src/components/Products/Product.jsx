import React from 'react'
import { useTranslation } from 'react-i18next'
import products from '../../assets/images/products.png'
function Product({product}) {
    const [t , i18n] = useTranslation()



  return (
    <>
              <div className="col-md-3 col-sm-6 d-flex gap-2 justify-content-center align-items-center flex-column mb-4">
                <div className="products_box">
                  <img src={product.image} alt="" />
                </div>
                <span> {product.title} </span>
              </div>

              

              

    </>
  )
}

export default Product