import React from 'react'
import '../../assets/style/footer/Footer.css'
import logo from '../../assets/images/logo.png'
import fb from '../../assets/images/fb.png'
import twitter from '../../assets/images/twitter.png'
import email from '../../assets/images/email.png'
import whatts from '../../assets/images/whatts.png'
import insta from '../../assets/images/insta.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
function Footer() {
    const [t , i18n] = useTranslation()
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center align-items-center mx-auto">
                    <div className="col-md-4 col-sm-6">
                        <div className="footer__box d-flex align-items-center flex-column gap-3">
                            <h4>{t("Products")}</h4>
                            <ul className='d-flex justify-content-center align-items-start list__content flex-column gap-3'>
                                <li><a href="/products">{t("Cheese")}</a></li>
                                <li><a href="/clients">{t("Clientsproducts")}</a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="footer__box d-flex align-items-center   flex-column gap-3">
                            <h4>{t("Aboutus")}</h4>
                            <ul className='d-flex flex-column align-items-end justify-content-center list__content gap-3'>
                                <li><a href="/about">{t("AboutRounah")}</a></li>
                                <li><a href="/contactus">{t("MediaCenter")}</a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="footer__box  special__   d-flex align-items-center  flex-column gap-3">
                            <h4>{t("ContactUs")}</h4>
                            <ul className='d-flex list__content  align-items-center justify-content-center flex-column gap-3'>
                                <li><a href="mailto:kaairatalrounah@gmail.com">kaairatalrounah@gmail.com</a></li>
                                <li><a className='d-flex flex-row-reverse gap-1' href="https://api.whatsapp.com/send/?phone=9660508696392" target='_blank'><span>966+</span> 0508696392</a></li>
                                <li><a className='d-flex flex-row-reverse gap-1' href="https://api.whatsapp.com/send/?phone=9660504104422" target='_blank'><span>966+</span> 0504104422</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="social__footer pb-5 pt-4 d-flex justify-content-between">
                    <ul className='d-flex gap-3'>
                        <li><a href="https://www.facebook.com/profile.php?id=100090793077134" ><img src={fb} alt="" /></a></li>
                        <li><a href="mailto:kaairatalrounah@gmail.com"><img src={email} alt="" /></a></li>
                        <li><a href="https://api.whatsapp.com/send/?phone=9660508696392" target='_blank'><img src={whatts} alt="" /></a></li>
                        <li><a href="https://www.instagram.com/kaairatalrounah" target={'_blank'}><img src={insta} alt="" /></a></li>
                    </ul>
                    <a href="/"><img src={logo} alt="" /></a>
                </div>

                <div className="copywrite pt-3 border-1 border-top">
                    <p className="text-center fw-bold">{t("copywrite")}  </p>

                    <Link to={'https://api.whatsapp.com/send/?phone=996543861163'} target='_blank' className="d-flex span_text text-white justify-content-center align-items-center fw-normal">Developed By Khattab Company</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer