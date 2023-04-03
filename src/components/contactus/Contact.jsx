import React from 'react'
import Form from './Form'
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import '../../assets/style/Contact/Contact.css'
import mail from '../../assets/images/mail.png'
import phone from '../../assets/images/phone.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Contact() {
  const [t , i18n] = useTranslation()
    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("../../animations/appointment.json")
        });
    
        return () => {
          lottie.destroy();
        };
      }, []);
  return (
    <>
            <div className="conatct__header pb-5 text-center">
                    <h1>{t("ContactUs")}</h1>
                    <p> {t("Headoffice")}</p>
                    <span>{t("Headofficedesc")}</span>
                    
                    <div className="contact__info pt-4 justify-content-center align-items-center d-flex flex-column gap-3">
                        <h4>{t("ContactUs")}</h4>
                        <Link to={'mailto:kaairatalrounah@gmail.com'} target='_blank' className='d-flex text-dark justify-content-start flex-row-reverse align-items-end gap-2'>kaairatalrounah@gmail.com <img src={mail} alt="" /></Link>
                        <Link to={'https://api.whatsapp.com/send/?phone=9660508696392'} target='_blank' className='d-flex  text-dark justify-content-start flex-row-reverse align-items-end gap-2'> 0508696392 966+ <img src={phone} alt="" /></Link>
                        <Link to={'https://api.whatsapp.com/send/?phone=9660504104422'} target='_blank' className='d-flex  text-dark justify-content-start flex-row-reverse align-items-end gap-2'> 0504104422 966+  <img src={phone} alt="" /></Link>
                    </div>
            </div>
        <div className="contact-content">
            <div className="container">
                <div className="row d-flex ">
                    <div className="col-lg-6 form__ col-md-12 col-sm-12 mb-3">
                        <Form />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12  mb-3">
                    <div className="img" ref={container}></div>
                    </div>
                </div>
            </div>
         </div>
    </>
    
   
  )
}

export default Contact