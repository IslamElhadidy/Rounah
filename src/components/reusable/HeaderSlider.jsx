import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

function HeaderSlider({HeaderSlide}) {
  return (
    <Swiper
    autoplay={{
        delay:  1500,
    }}
    loop={true}
    modules={[Autoplay]}
    // spaceBetween={15}
    slidesPerView={1}




>
        {
         HeaderSlide && HeaderSlide.map((slice) => 
             
              <SwiperSlide  key={slice.id} className='slider_img' >
                <img className='mw-100' src={slice.image} alt="" />
              </SwiperSlide>
            
          )
        }

  
</Swiper>
  )
}

export default HeaderSlider