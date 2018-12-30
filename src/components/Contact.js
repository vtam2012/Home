import React from 'react';
import Button from './Button';
import Codepen from '../images/icons/codepen.png';
import Github from '../images/icons/github.png';
import LinkedIn from '../images/icons/linkedin.png';
import '../styles/Contact.scss';

const Contact= () => {
  return (
    <div className="contact">
        <p>Like what you see?</p>
        <h2> I'd love to hear from you!</h2>
        <br />
        <Button>
          <a href='mailTo:vtam2012@gmail.com'>
              <span className="btn-text">EMAIL</span>
          </a>
        </Button>
        <Button>
          <a href='https://github.com/vtam2012/home/blob/master/src/Resume/Tam_Vincent_Resume2018.pdf'>
              <span className="btn-text">RESUME</span>
          </a>
        </Button>
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