import React from 'react'
import '../../assets/style/clients/Clients.css'
import customer1 from '../../assets/images/customer2 (2).png'
import customer2 from '../../assets/images/customer2.png'
import cheesee from '../../assets/images/cheese.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useEffect } from 'react'
function Clients() {
    const [t , i18n] = useTranslation()


    const [client , setClient] = useState('')
    const url = 'https://admin.kaairatalrounah.sa'
    const getcClients = async () => {
        const response = await axios.get(`${url}/api/client`, {  
            headers: {
           'Accept-Language': localStorage.getItem('i18nextLng'),
          }});
        setClient(response.data.data.data)

    }


    
    useEffect(() => {

        getcClients()
        
      } , [])
  return (
    <>

                <div className="clients__one"  >
                <div className="clients__header">
                    <h2 className='container text-center'>{t("Ourdistinguishedcustomers")}</h2>
                </div>
                <div className="container"  data-aos="zoom-in"data-aos-duration="2000"> 
                    <div className="customer__one">
                        <div className="d-flex justify-content-center">
    
                            <div className="right__ d-flex flex-column justify-content-center  align-items-center ">
                                <h2> {t("AlwadiAlasli")}</h2>
                                <p className='text-end px-4'>{t("AlwadiAlaslidesc")} </p>
                                
                            </div>
    
                            <div className="left__">
                                <img src= {customer1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={'/clientproduct/1'} className="product__" data-aos="zoom-in"data-aos-duration="2000">
                        <img src= {cheesee} alt="" />
                        <h4> {t("AlwadiAlasliProducts")}  </h4>
                </Link>
                
                </div>

                {/* `/clientproduct/${client[0].id}` */}
    


        <div className="clients__two">
            <div className="clients__header">
                <h2 className='container text-center'>{t("Ourdistinguishedcustomers")}</h2>
            </div>
            <div className="container" data-aos="zoom-in"data-aos-duration="2000" >
                <div className="customer__two">
                    <div className="d-flex justify-content-center">
                        <div className="right__ d-flex flex-column justify-content-center  align-items-center ">
                            <h2>{t("SnabolAlkhairProducts")}</h2>
                            <p className='text-end px-4'>{t("SnabolAlkhairdesc")}</p>
                            
                        </div>
                        <div className="left__">
                            <img src={customer2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/clientproduct/2'} className="product__ " data-aos="zoom-in"data-aos-duration="2000">
                    <img src={cheesee} alt="" />
                    <h4>{t("SnabolAlkhairProducts")}</h4>
            </Link>
        </div>
    </>
  )
}

export default Clients