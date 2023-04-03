import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import slider_one from '../../../assets/images/slider_one.jpeg'
import slider_two from '../../../assets/images/slider_two.jpeg'
import slider_three from '../../../assets/images/slider_three.jpeg'
import slider_four from '../../../assets/images/slider_four.jpeg'
import slider_five from '../../../assets/images/slider_five.jpeg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import '../../../assets/style/clients/Slider.css'

function SliderTwo() {
  return (
    <Swiper
    autoplay={{
        delay:  1700,
    }}
    loop={true}
    modules={[Autoplay, Pagination, Navigation]}
    // spaceBetween={15}
    slidesPerView={1}
    pagination={{
        clickable: true,
      }}
      navigation={true}


>
        

    <div className="all-sliders-pic ">
        <SwiperSlide className='slider_img'>
            <img src={slider_one} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={slider_two} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={slider_three} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={slider_four} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={slider_five} alt="" />
        </SwiperSlide>

        
    </div>
        
  
</Swiper>
  )
}

export default SliderTwo