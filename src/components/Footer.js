import React from 'react'
import "./footer.css"
// import LogoText from '../MCS/Website Collateral/MCS_Logo_B.png';
import LogoImg from '../img/MCS_Logo_Icon__W_1.png';

export default function Footer() {
  return (
    <div className='footerDiv'>
      <div className='footerImgDiv'>
        <img src={LogoImg} alt="Logo" className='footerImg' />
      </div>
      <div>
        <h4>Links</h4>
        <div className='linksFooterDiv'>
          <ul>
            <li><a href="#home" className='footerLink'>MCS</a></li>
            <li><a href="#ourStory" className='footerLink'>Our Story</a></li>
            <li><a href="#roadmap" className='footerLink'>Roadmap</a></li>
          </ul>
          <ul>
            <li><a href="#ourTeam" className='footerLink'>Our Team</a></li>
            <li><a href="#contact" className='footerLink'>Contact</a></li>
            <li><a href="#faq" className='footerLink'>FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
