import React from 'react'
// import Navbar from '../reusable/Navbar'
import cheesee from '../../assets/images/cheese.png'
import { useTranslation } from 'react-i18next'
function SpecialProduct() {
  const [t , i18n] = useTranslation()
  return (
    <>
                
                <div className="section__2 pt-5 pb-5 container">
                    <h2 className='pb-3 text-end mx-auto w-75'>{t("OurProducut")}</h2>
                    <p className='text-end w-75 mx-auto'>{t("OurProducutDesc")}</p>
                    <div className="product__ d-flex justify-content-center align-items-center pt-5">
                        <img src={cheesee} alt="" />
                        <h4> {t("Cheeseproducts")}</h4>
                    </div>
                </div>
    </>
  )
}

export default SpecialProduct