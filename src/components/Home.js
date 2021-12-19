import React from 'react'
import './home.css'
import McsBanner from '../MCS/Website Collateral/MCS_Banner (1).png'

export default function Home() {
  return (
    <div className='homeDiv' id="home">
      <div className='homeDivText'>
        <h1>Welcome to Moody Creature Society</h1>
      </div>
      <div className='homeDivPicture'>
        <img src={McsBanner} className='McsBanner' alt="Banner" />
      </div>
    </div>
  )
}
