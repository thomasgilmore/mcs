import React from 'react'
import './originalcreatures.css';
import InfiniteCarousel from 'react-leaf-carousel';
import bucketpolo from '../MCS/*Characters/Website_Banner/mcs_character_bucketpolo.png'
import cowboy from '../MCS/*Characters/Website_Banner/mcs_character_cowboy.png'
import floaty from '../MCS/*Characters/Website_Banner/mcs_character_floaty.png'
import flower from '../MCS/*Characters/Website_Banner/mcs_character_flower.png'
import goth from '../MCS/*Characters/Website_Banner/mcs_character_goth.png'
import lifeguard from '../MCS/*Characters/Website_Banner/mcs_character_lifeguard.png'
import monroe from '../MCS/*Characters/Website_Banner/mcs_character_monroe.png'
import tiger from '../MCS/*Characters/Website_Banner/mcs_tiger.png'

export default function OriginalCreatures() {
  return (
    <div className='originalCreaturesDiv'>
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={false}
    showSides={true}
    sidesOpacity={1}
    sideSize={1}
    slidesToScroll={1}
    slidesToShow={6}
    scrollOnDevice={true}
  >
    <div>
    <img src={bucketpolo} className='bucketpolo' alt="Bucket Polo" />

    </div>
    <div>
    <img src={cowboy} className='cowboy' alt="Cowboy" />
    </div>
    <div>
    <img src={floaty} className='floaty' alt="Floaty" />
    </div>
    <div>
    <img src={flower} className='flower' alt="Flower" />
    </div>
  </InfiniteCarousel>,
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div><img src={bucketpolo} className='bucketpolo' alt="Bucket Polo" /></div>
    <div><img src={cowboy} className='cowboy' alt="Cowboy" /></div>
    <div><img src={floaty} className='floaty' alt="Floaty" /></div>
    <div><img src={flower} className='flower' alt="Flower" /></div>
      </InfiniteCarousel>
    </div>
  )
}
