import React from 'react';
import '../styles/Skills.scss';
import SkillItem from './SkillItem';
import htmllogo from '../images/icons/html.png';
import csslogo from '../images/icons/css.png';
import javascript from '../images/icons/javascript.png';
import reactlogo from '../images/icons/react.png';

const Skills = () => {
  return (
    <div className="skills">
        <h1>TECHNICAL SKILLS</h1>
        <hr />
         <ul className="skills-links">
            <h2>FRONTEND: </h2>
            <SkillItem 
                name="HTML" 
                Imgurl={htmllogo}
            />
            <SkillItem 
                name="CSS" 
                Imgurl={csslogo}
            />
            <SkillItem 
                name="JavaScript" 
                Imgurl={javascript}
            />
            <SkillItem 
                name="React" 
                Imgurl={reactlogo}
            />
         </ul>
         <br />
         <ul className="skills-links">
                <h2>BACKEND: </h2>
                <li>Node.js</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Heroku</li>
                <li>Firebase</li>
         </ul>
         <br />
         <ul className="skills-links">
                <h2>OTHER: </h2>
                <li>Git</li>
                <li>Test Driven Development (TDD)</li>
                <li>Agile</li>
         </ul>
    </div>
  );
};

export default Skills;