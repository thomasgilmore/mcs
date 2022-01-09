import React, { useState } from 'react';
import './faq.css';
import { Collapse } from 'react-bootstrap';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export default function FAQSection() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div id="faq" className='faqDiv'>
      <h1>FAQ</h1>
      <ol className='faqList'>
        <li>What is the Moody Creature Society?
        <button
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text"
        aria-expanded={open1}
        className='faqButtons'
      >
        {open1 ? <AiOutlineArrowUp/> : <AiOutlineArrowDown />}
      </button>
      </li>
      <Collapse in={open1}>
        <div id="example-collapse-text">
        <p>In an Alternate Universe, the Moody Creature Society are the first inhabitants of Earth to develop complex emotions. The 8,765 Society Members each contain a combination of 2 emotions, and over 200 unique traits so no 2 Members are exactly alike. The only exceptions are uniquely hand drawn embodiments of single emotions.</p>
        </div>
      </Collapse>
        <li>How do I buy?<button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open2}
        className='faqButtons'
      >
        {open2 ? <AiOutlineArrowUp/> : <AiOutlineArrowDown />}
      </button>
      </li>
      <Collapse in={open2}>
        <div id="example-collapse-text">
        <p>You will be able to Mint Members of the Moody Creature Society HERE or buy on the secondary market on OpenSea.</p>
        </div>
      </Collapse>
        <li>When is the Official Launch?<button
        onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text"
        aria-expanded={open3}
        className='faqButtons'
      >
        {open3 ? <AiOutlineArrowUp/> : <AiOutlineArrowDown />}
      </button>
      </li>
      <Collapse in={open3}>
        <div id="example-collapse-text">
        <p>Minting for the General Public will begin on March 24 2022 at 7PM EST. There will be opportunities to be part of the white list and pre-mint to avoid gas wars.</p>
        </div>
      </Collapse>
        <li>Is there a Minting Limit?<button
        onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text"
        aria-expanded={open4}
        className='faqButtons'
      >
        {open4 ? <AiOutlineArrowUp/> : <AiOutlineArrowDown />}
      </button>
      </li>
      <Collapse in={open4}>
        <div id="example-collapse-text">
        <p>Minting will be limited to 20 Members per Transaction with no limit to the amount per wallet.</p>
        </div>
      </Collapse>
        <li>What is the Mint Cost?<button
        onClick={() => setOpen5(!open5)}
        aria-controls="example-collapse-text"
        aria-expanded={open5}
        className='faqButtons'
      >
        {open5 ? <AiOutlineArrowUp/> : <AiOutlineArrowDown />}
      </button>
      </li>
      <Collapse in={open5}>
        <div id="example-collapse-text">
        <p>.075 Etherum. No Bonding Curve.</p>
        </div>
      </Collapse>
        <li>When will the Moody Creature Society Reveal?<button
        onClick={() => setOpen6(!open6)}
        aria-controls="example-collapse-text"
        aria-expanded={open6}
        className='faqButtons'
      >
        {open6 ? <AiOutlineArrowUp/> : <AiOutlineArrowDown />}
      </button>
      </li>
      <Collapse in={open6}>
        <div id="example-collapse-text">
        <p>The reveal will occur on March 27 2022 at 4PM EST.</p>
        </div>
      </Collapse>
      </ol>
    </div>
  )
}
