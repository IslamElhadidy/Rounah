import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import wadi1 from '../../../assets/images/wadi_one.jpeg'
import wadi2 from '../../../assets/images/wadi_two.jpeg'
import wadi3 from '../../../assets/images/wadi_three.jpeg'
import wadi4 from '../../../assets/images/wadi_four.jpeg'
import wadi5 from '../../../assets/images/wadi_five.jpeg'
import wadi6 from '../../../assets/images/wadi_six.jpeg'
import wadi7 from '../../../assets/images/wadi_seven.jpeg'
import wadi8 from '../../../assets/images/wadi_eight.jpeg'
import wadi9 from '../../../assets/images/wadi_nine.jpeg'
import wadi10 from '../../../assets/images/wadi_ten.jpeg'
import wadi11 from '../../../assets/images/wadi_eleven.jpeg'
import wadi12 from '../../../assets/images/wadi_twelv.jpeg'
import wadi13 from '../../../assets/images/wadi_13.jpeg'
import wadi14 from '../../../assets/images/wadi_14.jpeg'
import wadi15 from '../../../assets/images/wadi_15.jpeg'
import wadi16 from '../../../assets/images/wadi_16.jpeg'
import wadi17 from '../../../assets/images/wadi_17.jpeg'
import wadi18 from '../../../assets/images/wadi_18.jpeg'
import wadi19 from '../../../assets/images/wadi_19.jpeg'


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
            <img src={wadi1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi5} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi6} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi7} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi8} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi9} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi10} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi11} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi12} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi13} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi14} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi15} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi16} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi17} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi18} alt="" />
        </SwiperSlide>
        <SwiperSlide className='slider_img'>
            <img src={wadi19} alt="" />
        </SwiperSlide>
        
    </div>
        
  
</Swiper>
  )
}

export default SliderTwo