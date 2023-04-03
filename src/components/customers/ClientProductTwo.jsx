import React from 'react'
import { useTranslation } from 'react-i18next'
import mouse from '../../assets/images/mouse.png'
import '../../assets/style/clients/Slider.css'
import SliderOne from './Sliders/SliderOne'
function ClientProductTwo() {
  const [t , i18n] = useTranslation()
  return (
    <>
        <div className="single__product pt-5 ">
            <div className="container pt-5">
                <h2 className='text-center fw-bold' style={{'color':'#2F2D88'}}>{t("SnabolAlkhairProducts")}</h2>
                <p className='text-center'>{t("ImaraSnabolalkhairproducts")}</p>

                <SliderOne />

                <div className="decore">
                    <img src={mouse} alt="" />
                </div>
            </div>
        </div>
    
    </>
  )
}

export default ClientProductTwo