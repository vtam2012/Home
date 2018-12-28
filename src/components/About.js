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
        <p>Hello! My name is Vincent Tam and I am a self-taught web developer living in San Francisco, California. As a young man graduating from high school, I was unsure of what I wanted to be in this life. I did know however that I was a curious individual who sought to seek answers for the all the questions I had about the world. Therefore, I inherently had a love for mathematics and the sciences as they are wonderful languages which can transcribe the amazing phenomena of this world. When the moment came for me to apply to college, I was able to narrow my choices down to two majors: Computer Science & Engineering or Civil Engineering. This was because I envisioned myself as someone who would leave his mark on the world. One way to accomplish this was to have a hand in creating something as grand as the Golden Gate Bridge or the Sagrada Familia. The other way was to become Chief Technology Officer of a up and coming tech company like Bill Gates, Mark Zuckerberg, or Elon Musk.</p>
        <br />
        <p>While I started college as a Computer Science & Engineering major, I had switched majors to Civil Engineering in my sophomore year because of my dilemma. In March of 2014, I eventually graduated from the University of California, Davis campus with a Bachelor of Science in Civil Engineering.</p> 
        <br />
        <p>Upon graduation, I started an internship as a structural engineer. After completion of my internship, I realized the work of a structural engineer was not as glamourous and fun as I thought it would be. At this time, the tech industry exploded, and it seems that programming/coding was beginning to gain traction. I therefore decided to shift my focus towards my second passion for computer science.</p>  
        <br />
        <p>Because of my lack of funds and my unwillingness to take out a second loan to return to school, I have decided to teach myself using various online resources. Due to ever changing updates to technology and methods, it seems that for one to become a solid developer requires one to also become a lifelong student anyway. I am therefore constantly learning and always seeking to improve upon my skills. I have listed a few of my learned skills below.</p> 
        <br />
        <p><strong>"There is no destination, no finish line! The journey is all there is! Simply strive to become better than you were yesterday!"-Vincent Tam</strong></p>
        <br />
      </div>
    </div>
  );
};

export default About;