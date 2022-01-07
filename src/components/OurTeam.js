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
        <div>
          <img src={LaserBeamEyes} className='ourTeamImg' alt="Gutter Chad" />
        </div>
        <div>
          <img src={PurpleGlitter} className='ourTeamImg' alt="@yev_creates" />
          <p>Yev is the Designer of the Moody Creature Society. An aesthete and typophile with a systematic approach to...everything.</p>
        </div>
      </div>
      <div className='rowOurTeam'>
        <div>
          <img src={GoldKissyHeart} className='ourTeamImg' alt="@ashculco" />
        </div>
        <div>
          <img src={PinkBubblegum} className='ourTeamImg' alt="@TacosAndBubbles" />
        </div>
      </div>
      
    </div>
  )
}
