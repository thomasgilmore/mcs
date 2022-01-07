import React from 'react'
import "./footer.css"
import LogoText from '../MCS/Website Collateral/MCS_Logo_B.png';
import LogoImg from '../MCS/Website Collateral/MCS_Icon_Bcircle.png';

export default function Footer() {
  return (
    <div className='footerDiv'>
      <div>
        <img src={LogoImg} alt="Logo" className='footerImg' />
        <img src={LogoText} alt='Logo' className='footerText' />
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
