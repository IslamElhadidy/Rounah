import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../../assets/style/Articles/Articles.css'
import UniqueArticle from './UniqueArticle'
function Articles() {
    const [t , i18n] = useTranslation()
    const [blogs , setBlogs] = useState('') 

    const url = 'https://admin.kaairatalrounah.sa'

    const getBlog = async () => {
        const response = await axios.get(`${url}/api/blogs` , {  
            headers: {
           'Accept-Language': localStorage.getItem('i18nextLng'),
          }});;
        setBlogs(response.data.data.data)
        // console.log(response.data.data.data);
        console.log(localStorage.getItem('i18nextLng'));
    }
    
    useEffect(() => {

        getBlog()
        
      } , [])
  return (
    <>
        <div className="articles text-end" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
            <div className="container">
                <h2 className='pb-5'>{t("Articles")}</h2>
                <div className="row">
                    <div className="d-flex justify-content-center gap-3 mb-3">
                            {
                                blogs && blogs.map((blog) => {
                                    return(
                                        <UniqueArticle blog={blog}  key={blog.id} />
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Articles