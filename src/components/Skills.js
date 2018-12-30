import React from 'react';
import '../styles/Skills.scss';
import htmllogo from '../images/icons/html.png';
import csslogo from '../images/icons/css.png';
import javascript from '../images/icons/javascript.png';
import reactlogo from '../images/icons/react.png';

const Skills = () => {
  return (
    <div className="Skills">
        <h1>TECHNICAL SKILLS</h1>
        <hr />
         <ul className="Skills-links">
            <img src={htmllogo} alt="HTML Logo" />
            <img src={csslogo} alt="CSS Logo" />
            <img src={javascript} alt="JavaScript Logo" />   
            <img src={reactlogo} alt="React Logo" />
         </ul>
    </div>
  );
};

export default Skills;