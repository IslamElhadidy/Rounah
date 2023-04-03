import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/images/logo.png'
import '../../assets/style/navbar/navbar.css'
import sa from '../../assets/images/Sa.png'
import us from '../../assets/images/Us.webp'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  const [click,setClick] = useState('ar')
  const [t , i18n] = useTranslation()
  const active = "active"
  const notactive = ""

  
  const handleButtonClilck = () => {
    setClick(window.localStorage.getItem('i18nextLng'))
}


  return (
    <>


                <nav className="navbar pt-3 navbar-expand-md navbar-light bg-transparent border-bottom border-lg border-dark">
                    <div className="container nav__container">
                        <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex ms-auto">





                           
                              <li className='nav-link'>
                                <NavLink className={({isActive}) =>isActive? active : notactive}  to="/" >{t("Home")}</NavLink>
                              </li>
                              <li className='nav-link'>
                                <NavLink to="/products">{t("Products")}</NavLink>
                              </li>
                              <li className='nav-link'>
                                <NavLink to="/about">{t("Aboutus")}</NavLink>
                              </li>
                              <li className='nav-link'>
                                <NavLink to="/articles">{t("Ourarticles")}</NavLink>
                              </li>
                              <li className='nav-link'>
                                <NavLink to="/contactus">{t("ContactUs")}</NavLink>
                              </li>
                              <li className='nav-link'>
                                <NavLink to="/clients">{t("Customers")}</NavLink>
                              </li>
                            
                              <button className='special_lang_btn'>
                              {i18n.language === "en" &&   <button className="btn d-flex gap-2 align-items-center" onClick={()=>{i18n.changeLanguage('ar')}} >
                            <img src={sa} alt="lang" width="20px" height="20px" />
                            <p className="text-secondary lang ml-2">AR</p>
                            </button> }
                            {i18n.language === "ar" &&   <button className="btn d-flex gap-2 align-items-center" onClick={()=>{i18n.changeLanguage('en')}} >
                            <img src={us} alt="lang" width="20px" height="20px"  />
                            <p className="text-secondary lang ml-2">EN</p>
                            </button> }
                              </button>
                        </div>
                        </div>
                    </div>
                </nav>
            
    
    </>
  )
}

export default Navbar