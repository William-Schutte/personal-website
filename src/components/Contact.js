import React, { useEffect } from 'react';
import iconGithub from '../images/icons/i-github.svg';
import iconGmail from '../images/icons/i-gmail.png';
import iconLinkedin from '../images/icons/i-linkedin.png';
import iconResume from '../images/icons/i-resume.png';
import resume from '../images/Resume.pdf';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(() => {
    Aos.init({})
  }, []);

  return (
    <div className="contact">
      <h2 className="contact__title"
        data-aos="zoom-out"
        data-aos-delay="0"
        data-aos-duration="1000">Contact Me</h2>
      <div className="contact__container"
        data-aos="zoom-out"
        data-aos-delay="50"
        data-aos-duration="1000">
        <a className="contact__item" href="mailto:williamdschutte@gmail.com" target="_blank" rel="noreferrer">
          <img className="contact__icon" src={iconGmail} alt="Gmail Icon" />
          <p className="contact__text contact__text_double">WilliamDSchutte<br></br>@gmail.com</p>
        </a>
        <a className="contact__item" href="http://www.github.com/william-schutte" target="_blank" rel="noreferrer">
          <img className="contact__icon" src={iconGithub} alt="Github Icon" />
          <p className="contact__text">/William-Schutte</p>
        </a>
        <a className="contact__item" href={resume} target="_blank" rel="noreferrer">
          <img className="contact__icon" src={iconResume} alt="Resume Icon" />
          <p className="contact__text">Resume</p>
        </a>
        <a className="contact__item" href="https://www.linkedin.com/in/william-schutte/" target="_blank" rel="noreferrer">
          <img className="contact__icon" src={iconLinkedin} alt="LinkedIn Icon" />
          <p className="contact__text">LinkedIn</p>
        </a>
      </div>
    </div>
  );
}

export default Contact