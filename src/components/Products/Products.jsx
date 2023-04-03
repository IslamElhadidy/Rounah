import React from 'react'
import products from '../../assets/images/products.png'
import '../../assets/style/Products/Products.css'
import { useTranslation } from 'react-i18next'
import Product from './Product'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function Products() {
  
  const [product , setProduct] = useState('') 

  const url = 'https://admin.kaairatalrounah.sa'



  const getProduct = async () => {
      const response = await axios.get(`${url}/api/products`, {  
        headers: {
       'Accept-Language': localStorage.getItem('i18nextLng'),
      }});;
      setProduct(response.data.data.data)
      console.log(response.data.data.data);
  }

  
  useEffect(() => {

    getProduct()
    
  } , [])
  const [t , i18n] = useTranslation()
  return (
    <div>
        
        <div className="products pt-5 overflow-hidden">
          <div className="container">
            <h2 className='text-end'>{t("Cheese")}</h2>
            <div className="row pt-5"  data-aos="fade-up-right" data-aos-duration="3000" >

              {
                product && product.map((product) => {
                  return(
                    <Product product={product} key={product.id} />
                  )
                })
              }


            </div>
          </div>

        </div>
    </div>
  )
}

export default Products