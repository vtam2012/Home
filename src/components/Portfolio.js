import React from 'react';
import ProjectItem from './ProjectItem';
import Warbler from '../images/portfolio/thumbnails/Warbler.png';
import FaceRecognition from '../images/portfolio/thumbnails/FaceRecognition.png';
import BurgerBuilder from '../images/portfolio/thumbnails/BurgerBuilder.png';
import '../styles/Portfolio.scss';

const Portfolio= () => {
  return (
    <div id="five" className="portfolio">
        <h1>PORTFOLIO</h1>
        <br />
        <hr />
        <br />
        <ul className="portfolio-links">
           <ProjectItem 
                name="Warbler" 
                Imgurl={Warbler}
                Codeurl={'https://github.com/vtam2012/warbler'}
                Demourl={'https://warbler-client-vd.herokuapp.com/'}
            />
            <ProjectItem 
                name="Face Recognition" 
                Imgurl={FaceRecognition}
                Codeurl={'https://github.com/vtam2012/face-recognition-brain'}
                Demourl={'https://face-recognition-vd.herokuapp.com/'}
            />
            <ProjectItem 
                name="Burger Builder" 
                Imgurl={BurgerBuilder}
                Codeurl={'https://github.com/vtam2012/BurgerBuilder'}
                Demourl={'https://react-my-burger-2018.firebaseapp.com/'}
            />
        </ul>
    </div>
  );
};

export default Portfolio;