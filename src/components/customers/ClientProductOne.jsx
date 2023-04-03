import React from 'react'
import SliderOne from './Sliders/SliderOne'
import mouse from '../../assets/images/mouse.png'
import '../../assets/style/clients/Slider.css'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import axios from 'axios';
import SliderTwo from './Sliders/SliderTwo'
function ClientProduct() {
  const [t , i18n] = useTranslation()

  const params = useParams()
  const [customer , setCustomer] = useState([])

  const url = 'https://admin.kaairatalrounah.sa'

  const getCustomer = async () => {
    const response = await axios.get(`${url}/api/client/${params.id}`, {  
      headers: {
        "Accept-Language": localStorage.getItem('i18nextLng'),
      }});
    setCustomer(response.data.data)
    console.log(response.data.data);
    console.log(localStorage.getItem('i18nextLng'));
}

useEffect(() => {

  getCustomer()

} , [])

  return (
    
    <>
        <div className="single__product pt-5 ">
            <div className="container pt-5">
                <h2 className='text-center fw-bold' style={{'color':'#2F2D88'}}> {customer.title}</h2>
                {/* {t("ImaraSnabolalkhairproducts")} */}
                <p className='text-center'> {customer.content}</p>
                {/* {t("ImaraSnabolalkhairproductsdesc")} */}

                  
                    <SliderTwo customer={customer}  />
                  


                <div className="decore">
                    <img src={mouse} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ClientProduct