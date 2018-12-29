import React, {Component} from 'react';
import '../styles/Header.scss';
import Typing from 'react-typing-animation';
import SFSkyline from '../images/SFSkyline.jpg';
import Button from './Button';
import Pier14 from '../images/Pier14.jpeg';
import GoldenGate from '../images/GoldenGate.jpg';

class Header extends Component{
    render() {
      return(
        <div className="Header">
          <img src={SFSkyline} alt="SF Skyline" />
          <div className="titleMessage">
            <h1>VINCENT TAM</h1>
            <Typing loop={true} hideCursor={true}>
              <Typing.Delay ms={1000} />
              <span class="titleMessage-text">Web Developer</span>
              <Typing.Backspace count={30} delay={500}/>
              <Typing.Delay ms={1000} />
              <span class="titleMessage-text">Tech Enthusiast</span>
              <Typing.Backspace count={30} delay={500}/>
              <Typing.Delay ms={1000} />
              <span class="titleMessage-text">Lifelong Learner</span>
              <Typing.Backspace count={30} delay={500}/>
            </Typing>
          </div>
        </div>
      );
    }
};

export default Header;