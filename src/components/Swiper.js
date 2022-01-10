import React from 'react'
import './swiperjs.css'
import { Swiper, SwiperSlide } from "swiper/react";

import mcs_character_1 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_1.jpg'
import mcs_character_2 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_2.jpg'
import mcs_character_3 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_3.jpg'
import mcs_character_4 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_4.jpg'
import mcs_character_5 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_5.jpg'
import mcs_character_6 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_6.jpg'
import mcs_character_7 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_7.jpg'
import mcs_character_8 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_8.jpg'
import mcs_character_9 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_9.jpg'
import mcs_character_10 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_10.jpg'
import mcs_character_11 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_11.jpg'
import mcs_character_12 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_12.jpg'
import mcs_character_13 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_13.jpg'
import mcs_character_14 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_14.jpg'
import mcs_character_15 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_15.jpg'
import mcs_character_16 from '../MCS/Website Collateral/Characters_Carousel/mcs_character_16.jpg'

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
    <Swiper loop={true} allowTouchMove={false} breakpoints={{
      520: {"slidesPerView": 2}, 
      780: {"slidesPerView": 3}, 
      1040: {"slidesPerView": 4}, 
      1300: {"slidesPerView": 5}, 
      1560: {"slidesPerView": 6}, 
      1820: {"slidesPerView": 7}, 
      2080: {"slidesPerView": 8}
    }} centeredSlides={false} speed={3000} autoplay={{
      "delay": 0,
      "disableOnInteraction": false,
    }} navigation={false} className="mySwiper">
      <SwiperSlide><img src={mcs_character_1} className='bucketpolo' alt="Bucket Polo" /></SwiperSlide>
      <SwiperSlide><img src={mcs_character_2} className='cowboy' alt="Cowboy" /></SwiperSlide>
      <SwiperSlide><img src={mcs_character_3} className='floaty' alt="Floaty" /></SwiperSlide>
      <SwiperSlide><img src={mcs_character_4} className='flower' alt="Flower" /></SwiperSlide>
      <SwiperSlide><img src={mcs_character_5} className='bucketpolo' alt="Bucket Polo" /></SwiperSlide>
      <SwiperSlide><img src={mcs_character_6} className='cowboy' alt="Cowboy" /></SwiperSlide>
      <SwiperSlide><img src={mcs_character_7} className='floaty' alt="Floaty" /></SwiperSlide>
      <SwiperSlide><img src={mcs_character_8} className='flower' alt="Flower" /></SwiperSlide>
      </Swiper>
      <Swiper loop={true} allowTouchMove={false} breakpoints={{
        520: {"slidesPerView": 2}, 
        780: {"slidesPerView": 3}, 
        1040: {"slidesPerView": 4}, 
        1300: {"slidesPerView": 5}, 
        1560: {"slidesPerView": 6}, 
        1820: {"slidesPerView": 7}, 
        2080: {"slidesPerView": 8}
      }} centeredSlides={false} speed={3000} autoplay={{
        "delay": 0,
        "disableOnInteraction": false,
        "reverseDirection": true,
      }} navigation={false} className="mySwiper">
        <SwiperSlide><img src={mcs_character_9} className='goth' alt="Goth" /></SwiperSlide>
        <SwiperSlide><img src={mcs_character_10} className='lifeguard' alt="Lifeguard" /></SwiperSlide>
        <SwiperSlide><img src={mcs_character_11} className='monroe' alt="Monroe" /></SwiperSlide>
        <SwiperSlide><img src={mcs_character_12} className='tiger' alt="Tiger" /></SwiperSlide>
        <SwiperSlide><img src={mcs_character_13} className='goth' alt="Goth" /></SwiperSlide>
        <SwiperSlide><img src={mcs_character_14} className='lifeguard' alt="Lifeguard" /></SwiperSlide>
        <SwiperSlide><img src={mcs_character_15} className='monroe' alt="Monroe" /></SwiperSlide>
        <SwiperSlide><img src={mcs_character_16} className='tiger' alt="Tiger" /></SwiperSlide>
        </Swiper>
    </div>
  )
}
