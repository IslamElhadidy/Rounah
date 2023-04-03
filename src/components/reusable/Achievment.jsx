import React from 'react'
import { useTranslation } from 'react-i18next'
import ach from '../../assets/images/acheiv.png'
import ach2 from '../../assets/images/achv2.png'
import ach3 from '../../assets/images/achv3.png'    
import '../../assets/style/Home/Home.css'

function Achievment({information}) {
    const [t , i18n] = useTranslation()
  return (
    <>
{/* 
                        <div className="col-md-4 col-sm-6 mb-5">
                            <div className="box d-flex flex-column justify-content-center align-items-center gap-2">
                                <img src={ach2} className='pb-4' alt="" />
                                <h4> {t("InnovationandDevelopment")}</h4>
                                <p className='text-center'> {t("InnovationandDevelopmentdesc")}</p>

                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 mb-5">
                             <div className="box d-flex flex-column justify-content-center align-items-center gap-2">
                                <img src={ach3} className='pb-4'  alt="" />
                                <h4> {t("OurSocialResponsibility")} </h4>
                                <p className='text-center'>  {t("OurSocialResponsibilitydesc")}</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="box d-flex flex-column justify-content-center align-items-center gap-2">
                                <img src={ach} className='pb-4'  alt="" />
                                <h4>{t("Rounahrewards")}</h4>
                                <p className='text-center'> {t("Rounahrewardsdesc")}</p>
                            </div>
                        </div> */}

<div className="process">
            <div className="container">
                <div className=" box-container">
                    <div className="onebox d-flex justify-content-center align-items-center">
                                 <img src={ach2} className='pb-4' alt="" />
                                <h4> {t("InnovationandDevelopment")}</h4>
                                <p className='text-center'> {t("InnovationandDevelopmentdesc")}</p>
                    </div>
                    <div className="onebox mb-lg-5 special-bg mb-md-5 d-flex justify-content-center align-items-center">
                    <img src={ach3} className='pb-4'  alt="" />
                                <h4 className='text-center'> {t("OurSocialResponsibility")} </h4>
                                <p className='text-center'>  {t("OurSocialResponsibilitydesc")}</p>
                    </div>
                    <div className="onebox d-flex justify-content-center align-items-center">
                    <img src={ach} className='pb-4'  alt="" />
                                <h4 className='text-center'>{t("Rounahrewards")}</h4>
                                <p className='text-center'> {t("Rounahrewardsdesc")}</p>
                    </div>
                </div>
            </div>
        </div>


    </>
  )
}

export default Achievment