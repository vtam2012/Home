import React from 'react';
import AboutPicture from '../images/About.jpeg';
import '../styles/About.scss';

const About = () => {
  return (
    <div className="About">
      <img 
         src={AboutPicture} 
         alt="AboutMePicture"
         className="profile"
      />
      <div className="text">
        <h4>About Me</h4>
        <p>Hello! My name is Vincent Tam and I am a self-taught web developer living in San Francisco, California.</p>
        <br />
        <p>While I started college with the intention of majoring in Computer Science & Engineering, I eventually graduated from the University of California, Davis campus with a Bachelor of Science in Civil Engineering.</p> 
        <br />
        <p>Upon graduation, I started an internship as a structural engineer. After completion of my internship, I realized the work of a structural engineer was not as glamourous and fun as I thought it would be. At this time, the tech industry exploded, and it seems that programming/coding was beginning to gain traction. I therefore decided to shift my focus towards my second passion for computer science.</p>  
        <br />
        <p>Currently, I specialize in building full-stack web applications in React, Redux, and Node. I have included links to some of my works below. Feel free to reach out if you have any questions.</p> 
        <br />
        <p><strong>"There is no destination, no finish line! The journey is all there is! Simply strive to become better than you were yesterday!"-Vincent Tam</strong></p>
        <br />
      </div>
    </div>
  );
};

export default About;