import React from 'react'
import './swiperjs.css'
import { Swiper, SwiperSlide } from "swiper/react";

import bucketpolo from '../MCS/*Characters/Website_Banner/mcs_character_bucketpolo.png'
import cowboy from '../MCS/*Characters/Website_Banner/mcs_character_cowboy.png'
import floaty from '../MCS/*Characters/Website_Banner/mcs_character_floaty.png'
import flower from '../MCS/*Characters/Website_Banner/mcs_character_flower.png'
import goth from '../MCS/*Characters/Website_Banner/mcs_character_goth.png'
import lifeguard from '../MCS/*Characters/Website_Banner/mcs_character_lifeguard.png'
import monroe from '../MCS/*Characters/Website_Banner/mcs_character_monroe.png'
import tiger from '../MCS/*Characters/Website_Banner/mcs_tiger.png'

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
    <Swiper loop={true} allowTouchMove={false} slidesPerView={4} centeredSlides={false} speed={3000} autoplay={{
      "delay": 0,
      "disableOnInteraction": false
    }} navigation={false} className="mySwiper">
      <SwiperSlide><img src={bucketpolo} className='bucketpolo' alt="Bucket Polo" /></SwiperSlide>
      <SwiperSlide><img src={cowboy} className='cowboy' alt="Cowboy" /></SwiperSlide>
      <SwiperSlide><img src={floaty} className='floaty' alt="Floaty" /></SwiperSlide>
      <SwiperSlide><img src={flower} className='flower' alt="Flower" /></SwiperSlide>
      <SwiperSlide><img src={bucketpolo} className='bucketpolo' alt="Bucket Polo" /></SwiperSlide>
      <SwiperSlide><img src={cowboy} className='cowboy' alt="Cowboy" /></SwiperSlide>
      <SwiperSlide><img src={floaty} className='floaty' alt="Floaty" /></SwiperSlide>
      <SwiperSlide><img src={flower} className='flower' alt="Flower" /></SwiperSlide>
      </Swiper>
      <Swiper loop={true} allowTouchMove={false} slidesPerView={4} centeredSlides={false} speed={3000} autoplay={{
        "delay": 0,
        "disableOnInteraction": false,
        "reverseDirection": true,
      }} navigation={false} className="mySwiper">
        <SwiperSlide><img src={goth} className='goth' alt="Goth" /></SwiperSlide>
        <SwiperSlide><img src={lifeguard} className='lifeguard' alt="Lifeguard" /></SwiperSlide>
        <SwiperSlide><img src={monroe} className='monroe' alt="Monroe" /></SwiperSlide>
        <SwiperSlide><img src={tiger} className='tiger' alt="Tiger" /></SwiperSlide>
        <SwiperSlide><img src={goth} className='goth' alt="Goth" /></SwiperSlide>
        <SwiperSlide><img src={lifeguard} className='lifeguard' alt="Lifeguard" /></SwiperSlide>
        <SwiperSlide><img src={monroe} className='monroe' alt="Monroe" /></SwiperSlide>
        <SwiperSlide><img src={tiger} className='tiger' alt="Tiger" /></SwiperSlide>
        </Swiper>
    </div>
  )
}
