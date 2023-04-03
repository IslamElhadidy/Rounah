import React from 'react'
import '../../assets/style/Home/Home.css'
// import cheesee from '../../assets/images/cheese.png'
// import saudia from '../../assets/images/section.png'
import { Link } from 'react-router-dom'
import Header from '../reusable/Header'
import UniqueArticle from '../ourarticle/UniqueArticle'
import { useTranslation } from 'react-i18next'
import Achievment from '../reusable/Achievment'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ach from '../../assets/images/acheiv.png'
import ach2 from '../../assets/images/achv2.png'
import ach3 from '../../assets/images/achv3.png'  
function Home() {
    const [t , i18n] = useTranslation()
    const [information , setInformation] = useState([])
    const [feature , setFeature] = useState('')
    const [productCover , setProductCover] = useState('') 
    const [blogs , setBlogs] = useState('') 

    const url = 'https://admin.kaairatalrounah.sa'


    const getInformation = async () => {
        const response = await axios.get(`${url}/api/information`, {  
            headers: {
           'Accept-Language': window.localStorage.getItem("i18nextLng")

          }});

        setInformation(response.data.data.data)
        console.log(response.data.data.data);

        
    }
    // console.log(window.localStorage.getItem('i18nextLng'));





    const getFearure = async () => {
        const response = await axios.get(`${url}/api/future`, {  
            headers: {
           'Accept-Language': localStorage.getItem('i18nextLng'),
          }});
        setFeature(response.data.data)
        // console.log(response.data.data);
    }

    const getProductCover = async () => {
        const response = await axios.get(`${url}/api/products-cover`, {  
            headers: {
           'Accept-Language': localStorage.getItem('i18nextLng'),
          }});
        setProductCover(response.data.data)
        // console.log(response.data.data);
    }

    const getBlog = async () => {
        const response = await axios.get(`${url}/api/blogs`, {  
            headers: {
           'Accept-Language': localStorage.getItem('i18nextLng'),
          }});
        setBlogs(response.data.data.data)
        // console.log(response.data.data.data);
    }



    useEffect(() => {

        getInformation()
        getFearure()
        getProductCover()
        getBlog()
        
      } , [])


  return (
    <>
        <div className="home">
            <Header  />
            
            <div className="container pt-5 overflow-hidden">
                <div className="section__1 pt-5 pb-5">
                    <h2 className='text-center pb-3'>{t("Innovationinmilks")}<br/>{t("andcheesetechnologies")}</h2>
                    <div data-aos="fade-right" data-aos-duration="3000" className="row acheiv pt-5 justify-content-center ">


                        <Achievment information={information} />

{/*                      
                        



                        <img src={ach} alt="" />
                        <img src={ach2} alt="" />
                        <img src={ach3} alt="" /> */}



                    {/* <Achievment src='../../../public/assets/acheiv.png' />
                    <Achievment src='../../../public/assets/acheiv.png' />
                    <Achievment src='../../../public/assets/acheiv.png' /> */}

                    
                    </div>
                </div>

                <Link to={'/products'} className="section__2 pt-5">
                    {
                        productCover && productCover.map((productCover) => {
                            return (
                                <div data-aos="zoom-in" data-aos-duration="3000" key={productCover.id}>
                                    <h2 className='pb-3 text-center'>{t("OurProducut")}</h2>
                                    <div className="product__ d-flex justify-content-center align-items-center pt-5">
                                    <img src={productCover.image} alt="" />
                                    <h4>{t("Cheeseproducts")}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Link>



                <div className="section__3 pt-5">
                    {
                       feature && feature.map((feature) => {
                            return (
                            <div key={feature.id} className="box__section3 d-flex justify-content-center">
                                <div className="left__">
                                    <img className='image' src={feature.image} alt="" />
                                </div>
                                <div className="right__ d-flex flex-column  justify-content-center align-items-center ">
                                    <h2> {t("Towardsabrightfuture")}</h2>
                                    <p>{t("Towardsabrightfuturedesc")}</p>
                                    <Link to={'/contactus'} className='button'>{t("InvestinRounah")}</Link>
                                    {/* {t("InvestinRounah")} */}
                                </div>
                            </div>
                            )
                        })
                    }
                </div>

                <div className="section__4 pt-5">
                    <div data-aos="fade-right" data-aos-duration="2000" className=" header__section4 d-flex justify-content-between">
                        <p>{t("section4desc")}</p>
                        <Link to="/articles">{t("Seeallarticlesonourblog")}</Link>
                    </div>

                    <div className="row pt-5">


                        <div className='d-flex justify-content-center gap-3 mb-3'  data-aos="fade-left" data-aos-duration="2000" >
                        {
                               blogs && blogs.map((blog) => {
                                    return(
                                        <UniqueArticle blog={blog} key={blog.id} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>


            </div>
        </div>
    
    </>
  )
}

export default Home