import React from 'react';
import '../styles/Header.scss';
import SFSkyline from '../images/SFSkyline.jpg';
import Pier14 from '../images/Pier14.jpeg';
import GoldenGate from '../images/GoldenGate.jpg';

const Header = () => {
  return (
    <div className="Header">
      <img src={SFSkyline} alt="SF Skyline" />
    </div>
  );
};

export default Header;