import React from 'react';
import ProjectItem from './ProjectItem';
import Warbler from '../images/portfolio/thumbnails/Warbler.png';
import FaceRecognition from '../images/portfolio/thumbnails/FaceRecognition.png';
import BurgerBuilder from '../images/portfolio/thumbnails/BurgerBuilder.png';
import '../styles/Portfolio.scss';

const Portfolio= () => {
  return (
    <div className="portfolio">
        <h1>PORTFOLIO</h1>
        <br />
        <hr />
        <br />
        <ul className="portfolio-links">
           <ProjectItem 
                name="Warbler" 
                Imgurl={Warbler}
                URL={'https://warbler-client-vd.herokuapp.com/'}
            />
            <ProjectItem 
                name="Face Recognition" 
                Imgurl={FaceRecognition}
                URL={'https://face-recognition-vd.herokuapp.com/'}
            />
            <ProjectItem 
                name="Burger Builder" 
                Imgurl={BurgerBuilder}
                URL={'https://react-my-burger-2018.firebaseapp.com/'}
            />
        </ul>
    </div>
  );
};

export default Portfolio;