import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png"
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div className="hero container">
      
      <div className="hero-text">
        <h1>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Education is one thing no one can take away from you.',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Teachers can open the door, but you must enter it yourself.',
        2000,
       'A person who never made a mistake never tried anything new.',
        2000
      ]}
      wrapper="span"
      speed={60}
      
      repeat={Infinity}
    />
          
</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          aspernatur quidem sint expedita harum saepe error vel nesciunt dolor
          ut? Fugiat delectus maiores illo alias esse debitis.
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
