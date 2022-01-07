import React from 'react';
import './faq.css';

export default function FAQSection() {
  return (
    <div id="faq" className='faqDiv'>
      <h1>FAQ</h1>
      <ol className='faqList'>
        <li>What is the Moody Creature Society?</li>
        <p>In an Alternate Universe, the Moody Creature Society are the first inhabitants of Earth to develop complex emotions. The 8,765 Society Members each contain a combination of 2 emotions, and over 200 unique traits so no 2 Members are exactly alike. The only exceptions are uniquely hand drawn embodiments of single emotions.</p>
        <li>How do I buy?</li>
        <p>You will be able to Mint Members of the Moody Creature Society HERE or buy on the secondary market on OpenSea.</p>
        <li>When is the Official Launch?</li>
        <p>Minting for the General Public will begin on March 24 2022 at 7PM EST. There will be opportunities to be part of the white list and pre-mint to avoid gas wars.</p>
        <li>Is there a Minting Limit?</li>
        <p>Minting will be limited to 20 Members per Transaction with no limit to the amount per wallet.</p>
        <li>What is the Mint Cost?</li>
        <p>.075 Etherum. No Bonding Curve.</p>
        <li>When will the Moody Creature Society Reveal?</li>
        <p>The reveal will occur on March 27 2022 at 4PM EST.</p>
      </ol>
    </div>
  )
}
