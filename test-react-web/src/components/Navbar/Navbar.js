import React, { useEffect, useState } from 'react';
import Logo from './Navbar_img/Logo.svg';
import Circeya from './Navbar_img/Circeya.svg';
import './Navbar.css';
import './NavbarMedia.css';
import Tel from './Navbar_img/Vector.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__circeya_logo">
        <img className="navbar__circeya_logo__picture" src={Logo} alt="logo" />
        <img className="navbar__circeya_logo__name" src={Circeya} alt="Circeya_name" />
      </div>
      <div className="navbar__telephone-section">
        <div className="navbar__telephone-section__tel">+7 (495) 495-49-54</div>
        <div className="navbar__telephone-section__tel-picture">
          <img src={Tel} alt="telpicture" />
          <div />
        </div>
      </div>
    </div>
  );
}
