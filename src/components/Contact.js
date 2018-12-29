import React from 'react';
import Button from './Button';
import Codepen from '../images/icons/codepen.png';
import Github from '../images/icons/github.png';
import LinkedIn from '../images/icons/linkedin.png';
import '../styles/Contact.scss';

const Contact= () => {
  return (
    <div className="Contact">
        <h2>Like what you see?</h2>
        <hr />
        <p> I'd love to hear from you!</p>
        <Button text="email"/>
        <ul className="Contact-links">
            <a href='https://www.linkedin.com/in/vincenttamsf14/'>
                <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href='https://codepen.io/vtam/'>
                <img src={Codepen} alt="Codepen" />
            </a>
            <a href='https://github.com/vtam2012'>
                <img src={Github} alt="Github" />
            </a>
        </ul>
    </div>
  );
};

export default Contact;