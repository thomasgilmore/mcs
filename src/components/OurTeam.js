import React from 'react'
import './ourteam.css'
import LaserBeamEyes from '../MCS/Website Collateral/Characters_AboutTeam/mcs_character_Conor.jpg';
import PurpleGlitter from '../MCS/Website Collateral/Characters_AboutTeam/mcs_character_Yev.jpg';
import GoldKissyHeart from '../MCS/Website Collateral/Characters_AboutTeam/mcs_character_Ashley.jpg';
import PinkBubblegum from '../MCS/Website Collateral/Characters_AboutTeam/mcs_character_Crystal.jpg';

export default function OurTeam() {
  return (
    <div id="ourTeam" className='ourTeamDiv'>
      <h1>Our Team</h1>
      <div className='rowOurTeam'>
        <div className='teamMemberDiv'>
          <a href="https://twitter.com/GutterChad" target="_blank" rel="noreferrer"><img src={LaserBeamEyes} className='ourTeamImg' alt="Gutter Chad" /></a>
          <p className="teamMemberText">GutterChad is a founding member and Project Manager of the Moody Creature Society. He is a huge New York Giants fan and can't wait to bring his son to his first game</p>
        </div>
        <div className='teamMemberDiv'>
          <a href="https://twitter.com/yev_creates" target="_blank" rel="noreferrer"><img src={PurpleGlitter} className='ourTeamImg' alt="@yev_creates" /></a>
          <p className="teamMemberText">Yev is the Designer of the Moody Creature Society. An aesthete and typophile with a systematic approach to...everything.</p>
        </div>
      </div>
      <div className='rowOurTeam'>
        <div className='teamMemberDiv'>
          <a href='https://twitter.com/ashculco' target="_blank" rel="noreferrer"><img src={GoldKissyHeart} className='ourTeamImg' alt="@ashculco" /></a>
          <p className="teamMemberText">Ashley is creative manager of the Moody Creature Society. Mama bear. Loves Astrology and all things Frenchie.</p>
        </div>
        <div className='teamMemberDiv'>
          <img src={PinkBubblegum} className='ourTeamImg' alt="@TacosAndBubbles" />
          <p className="teamMemberText">Crystal is the marketing manager of Moody Creature Society. She is a big foodie and will never miss an opportunity to pet a cat.</p>
        </div>
      </div>
      
    </div>
  )
}
