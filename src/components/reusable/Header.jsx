import React from 'react'
import HeaderSlider from './HeaderSlider'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function Header() {


  const [HeaderSlide , setHeaderSlide] = useState([])

  const url = 'https://admin.kaairatalrounah.sa'



  const getHeaderSlider = async () => {
      const response = await axios.get(`${url}/api/header-slider` , {  
        headers: {
       'Accept-Language': localStorage.getItem('i18nextLng'),
      }});
      

      setHeaderSlide(response.data.data)
      console.log(response.data.data);  
  }

  // const getAcceptLang = async () => axios.get({
  //   baseURL: 'https://admin.kaairatalrounah.sa/api/information',
  //   headers: {
  //     'Accept-Language' : 'ar,en'
  //   }});

  useEffect(() => {
    getHeaderSlider()
    // getAcceptLang()
  } , [])
  return (
    <>
            <div data-aos="zoom-in" data-aos-duration="3000">
                <HeaderSlider HeaderSlide={HeaderSlide} />
            </div>
    </>
  )
}

export default Header


// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import HeaderSlider from './HeaderSlider'
// import logo from '../../assets/images/bg.jpg'
// function Header() {

//   const [header , setHeader] = useState([])
//   const url = 'https://admin.kaairatalrounah.sa'
//   const getDataHeader = async () => {
//     const response = await axios.get(`${url}/api/header-slider`);
//     setHeader(response.data.data)
//     console.log(response.data.data);
//   }

//   useEffect(() => {
//     getDataHeader()

//   } ,[])
//   const dataItem = header.map((data) => { 
// const classuniqe = data.id === 1 ? 'active ':null
// console.log(classuniqe);
//     return(
//     <div className={`  carsousel-item  ${classuniqe} `}>
//      <img src={data.image} className="d-block w-100" alt="..." />
//    </div>

//       ) })
 



//   return (
//        <>

// <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//   <div className="carousel-inner">
   
//     {/* {dataItem} */}
//     <div className='active carsousel-item '>
//      <img src={header.image} className="d-block w-100" alt="..." />
//    </div>


//   </div>
//   <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true" />
//     <span className="sr-only">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true" />
//     <span className="sr-only">Next</span>
//   </button>
// </div>



//         </>

    
//   )
// }

// export default Header