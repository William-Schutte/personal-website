import iconGithub from '../images/icons/i-github.svg';
import iconGmail from '../images/icons/i-gmail.png';
import iconLinkedin from '../images/icons/i-linkedin.png';
import iconResume from '../images/icons/i-resume.png';
import resume from '../images/Resume.pdf';


function Contact() {
    return (
        <div className="contact">
          <h2 className="contact__title">Contact Me</h2>
          <div className="contact__container">
            <a className="contact__item" href="mailto:williamdschutte@gmail.com" target="_blank">
              <img className="contact__icon" src={iconGmail} />
              <p className="contact__text contact__text_double">WilliamDSchutte<br></br>@gmail.com</p>
            </a>
            <a className="contact__item" href="http://www.github.com/william-schutte" target="_blank">
              <img className="contact__icon" src={iconGithub} />
              <p className="contact__text">/William-Schutte</p>
            </a>
            <a className="contact__item" href={resume} target="_blank">
              <img className="contact__icon" src={iconResume} />
              <p className="contact__text">Resume</p>
            </a>
            <a className="contact__item" href="https://www.linkedin.com/in/william-schutte/" target="_blank">
              <img className="contact__icon" src={iconLinkedin} />
              <p className="contact__text">LinkedIn</p>
            </a>
          </div>
        </div>
    );
}

export default Contact