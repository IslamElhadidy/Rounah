import React from 'react'
import Header from '../reusable/Header'
import '../../assets/style/Aboutus/Aboutus.css'
import { useTranslation } from 'react-i18next'
import Achievment from '../reusable/Achievment'
import SpecialCustomers from '../reusable/SpecialCustomers'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
function Aboutus() {
    const [t , i18n] = useTranslation()
    const url = 'https://admin.kaairatalrounah.sa'
    const [information , setInformation] = useState([])
    const [aboutus , setAboutUs] = useState([])
    const [client , setClient] = useState('')


    const getInformation = async () => {
        const response = await axios.get(`${url}/api/information`,      {  
            headers: {
            'Accept-Language': "i18nextLng",
          }});
        setInformation(response.data.data.data)
        // console.log(response.data.data.data);
    }

    const getAbout = async () => {
        const response = await axios.get(`${url}/api/about-us`,      {  
            headers: {
            'Accept-Language': "i18nextLng",
          }});
        setAboutUs(response.data.data.data)
        // console.log(response.data.data.data);
    }

    const getcClients = async () => {
        const response = await axios.get(`${url}/api/client`,      {  
            headers: {
            'Accept-Language': "i18nextLng",
          }});
        setClient(response.data.data.data)
        // console.log(response.data.data.data);
    }


    useEffect(() => {

        getInformation()
        getAbout()
        getcClients()
        
      } , [])


  return (
    <>
        <Header />
        <div className="about pt-5 overflow-hidden">
            <div className="container">
                <div className="section__1 pt-5">
                    <h2 className='text-center pb-3'>{t("Innovationinmilks")}<br/>{t("andcheesetechnologies")}</h2>
                    <div data-aos="fade-right" data-aos-duration="3000" className="row acheiv  pt-5 justify-content-center">
                            <Achievment />
                    </div>
                </div>


                {
                    aboutus.map((aboutus) => {
                        return(
                            <div data-aos="fade-up" data-aos-duration="3000" key={aboutus.id} className="march__  text-center">
                                    <h2 className='pb-3'> {t("march")}
                                    
                                    </h2>
                                    <p className='fw-bold pb-1'>
                                        {t("KhairatAlRonahCompanyforIndustry")}
                                    </p>
                                    
                                    <span className='text-justify'>{t("rounahdesc")} </span>
                                     
                            </div>
                        )
                    })

                }



            </div>


                {
                    information && information.map((information) => {
                        return(
                            <div data-aos="fade-down" data-aos-duration="3000" key={information.id} className="bounties__ text-center ">
                            <h2 className='pb-2'> {t("SeeingthebountiesoftheRounah")}</h2>
                            
                            <p className='fw-bold pb-1'>{t("ThevisionofKhayratAl-RonahCompanyforIndustry")}</p>
                            
                            <span> {t("visiondesc")} </span>

                            </div> 
                        )
                    })
                }



            <div className="our__customers container" data-aos="zoom-out-up"
     data-aos-easing="linear"
     data-aos-duration="3000">
                    <h2 className='text-center'>{t("Ourdistinguishedcustomers")}</h2>
                    <div className="customers d-flex align-items-center justify-content-center gap-1">
                        <SpecialCustomers client={client} />
                    </div>
            </div>
        </div>
    </>
  )
}

export default Aboutus