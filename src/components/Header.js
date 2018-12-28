import React from 'react';
import ProfilePicture from '../images/portfolio/thumbnails/Selfie.jpg';
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className="head">
        <img 
            src={ProfilePicture} 
            alt="ProfilePicture"
            className="profile"
        />
    </div>
  );
};

export default Header;