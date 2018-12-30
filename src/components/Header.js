import React, {Component} from 'react';
import '../styles/Header.scss';
import Typing from 'react-typing-animation';

class Header extends Component{
    render() {
      return(
        <div id="one" className="header">
          <div className="titleMessage">
            <h1>VINCENT TAM</h1>
            <Typing loop={true} hideCursor={true}>
              <Typing.Delay ms={500} />
              <span class="titleMessage-text">Web Developer</span>
              <Typing.Backspace count={30} delay={300}/>
              <Typing.Delay ms={500} />
              <span class="titleMessage-text">Tech Enthusiast</span>
              <Typing.Backspace count={30} delay={300}/>
              <Typing.Delay ms={500} />
              <span class="titleMessage-text">Lifelong Learner</span>
              <Typing.Backspace count={30} delay={300}/>
            </Typing>
          </div>
        </div>
      );
    }
};

export default Header;