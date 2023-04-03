import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import '../../assets/style/Articles/Articles.css'
import axios from 'axios';




function ArticleDetails() {
  const params = useParams()
    const [details,setDetails] = useState('')

    const url = 'https://admin.kaairatalrounah.sa'

    const getDetails = async () => {
      const response = await axios.get(`${url}/api/blogs/${params.id}`, {  
        headers: {
       'Accept-Language': localStorage.getItem('i18nextLng'),
      }});;
      setDetails(response.data.data)
      console.log(response.data.data);
  }

  useEffect(() => {

    getDetails()

  } , [])
    
    const [t , i18n] = useTranslation()
  return (
    <>



                <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000" className="articleDetails overflow-hidden">
                  <div className="container">
                      <img src={details.image} alt="" />
                      <h2 className='auto_write' data-aos="fade-right"data-aos-duration="3000">
                      {t("learnabout")}
                      </h2>
                      <div className="content__ar" data-aos="fade-left"data-aos-duration="2000">
                          <h4 className='text-center'>{t("benifitofcheese")}</h4>
                          <p className='pt-5'>
                           {t("learnaboutrate")}
                           </p>
                      </div>

                  </div>
                </div>
            

        



    </>
  )
}

export default ArticleDetails