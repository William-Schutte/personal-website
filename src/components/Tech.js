import { useEffect } from 'react'
import iconExpress from '../images/icons/i-express.svg';
import iconJs from '../images/icons/i-js.svg';
import iconMongo from '../images/icons/i-mongo.svg';
import iconNode from '../images/icons/i-node.svg';
import iconFigma from '../images/icons/i-figma.svg';
import iconReact from '../images/icons/i-react.svg';
import iconGatsby from '../images/icons/i-gatsby.svg';
import iconPython from '../images/icons/i-python.svg';

import Aos from 'aos'
import 'aos/dist/aos.css'

function Tech() {
  useEffect(() => {
    Aos.init({})
  }, []);

  return (
    <div className="about__tech">
      <h3 className="about__title"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000">Technologies</h3>
      <ul className="about__tech-icons-block"
        data-aos="flip-up"
        data-aos-delay="150"
        data-aos-duration="1000">
        <li className="about__tech-icon">
          <img className="about__tech-icon-img" src={iconReact} alt="icon" />
          <p className="about__tech-icon-name">React</p>
        </li>
        <li className="about__tech-icon">
          <img className="about__tech-icon-img" src={iconGatsby} alt="icon" />
          <p className="about__tech-icon-name">Gatsby</p>
        </li>
        <li className="about__tech-icon">
          <img className="about__tech-icon-img-alt" src={iconJs} alt="icon" />
          <p className="about__tech-icon-name">JavaScript</p>
        </li>
        <li className="about__tech-icon">
          <img className="about__tech-icon-img-alt" src={iconPython} alt="icon" />
          <p className="about__tech-icon-name">Python</p>
        </li>
        <li className="about__tech-icon">
          <img className="about__tech-icon-img" src={iconExpress} alt="icon" />
          <p className="about__tech-icon-name">express.js</p>
        </li>
        <li className="about__tech-icon">
          <img className="about__tech-icon-img" src={iconNode} alt="icon" />
          <p className="about__tech-icon-name">Node.js</p>
        </li>
        <li className="about__tech-icon">
          <img className="about__tech-icon-img" src={iconMongo} alt="icon" />
          <p className="about__tech-icon-name">MongoDB</p>
        </li>
        <li className="about__tech-icon">
          <img className="about__tech-icon-img" src={iconFigma} alt="icon" />
          <p className="about__tech-icon-name">Figma</p>
        </li>
      </ul>
    </div>
  );
}

export default Tech