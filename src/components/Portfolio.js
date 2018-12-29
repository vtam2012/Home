import React from 'react';
import Button from './Button';
import Warbler from '../images/portfolio/thumbnails/Warbler.png';
import FaceRecognition from '../images/portfolio/thumbnails/FaceRecognition.png';
import BurgerBuilder from '../images/portfolio/thumbnails/BurgerBuilder.png';
import '../styles/Portfolio.scss';

const Portfolio= () => {
  return (
    <div className="Portfolio">
        <h1>Portfolio</h1>
        <hr />
        <ul className="Portfolio-links">
            <img src={Warbler} alt="Warbler" />
            <a href='https://warbler-client-vd.herokuapp.com/'>
                Warbler
            </a>
            <img src={FaceRecognition} alt="Face Recognition" />
            <a href='https://face-recognition-vd.herokuapp.com/'>
                Face Recognition
            </a>
            <img src={BurgerBuilder} alt="Burger Builder" />
            <a href='https://react-my-burger-2018.firebaseapp.com/'>
                Burger Builder
            </a>
        </ul>
    </div>
  );
};

export default Portfolio;