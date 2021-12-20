import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import bucketpolo from '../MCS/*Characters/Website_Banner/mcs_character_bucketpolo.png'
import cowboy from '../MCS/*Characters/Website_Banner/mcs_character_cowboy.png'
import floaty from '../MCS/*Characters/Website_Banner/mcs_character_floaty.png'
import flower from '../MCS/*Characters/Website_Banner/mcs_character_flower.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function SwiperJS () {
  return (
    <div>
    <Swiper loop={true} allowTouchMove={false} slidesPerView={4} spaceBetween={10} centeredSlides={false} autoplay={{
      "delay": 1000,
      "disableOnInteraction": false
    }} showsPagination={false} navigation={false} className="mySwiper">
      <SwiperSlide><img src={bucketpolo} className='bucketpolo' alt="Bucket Polo" /></SwiperSlide>
      <SwiperSlide><img src={cowboy} className='cowboy' alt="Cowboy" /></SwiperSlide>
      <SwiperSlide><img src={floaty} className='floaty' alt="Floaty" /></SwiperSlide>
      <SwiperSlide><img src={flower} className='flower' alt="Flower" /></SwiperSlide>
      <SwiperSlide><img src={bucketpolo} className='bucketpolo' alt="Bucket Polo" /></SwiperSlide>
      <SwiperSlide><img src={cowboy} className='cowboy' alt="Cowboy" /></SwiperSlide>
      <SwiperSlide><img src={floaty} className='floaty' alt="Floaty" /></SwiperSlide>
      <SwiperSlide><img src={flower} className='flower' alt="Flower" /></SwiperSlide>
      </Swiper>
    </div>
  )
}
