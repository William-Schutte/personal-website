import iconCss from './images/i-css.svg';
import iconExpress from './images/i-express.svg';
import iconGithub from './images/i-github.svg';
import iconHtml from './images/i-html.svg';
import iconJs from './images/i-js.svg';
import iconMongo from './images/i-mongo.svg';
import iconNode from './images/i-node.svg';
import iconNpm from './images/i-npm.svg';
import iconReact from './images/i-react.svg';
import iconMail from './images/i-mail.png'
import iconMobile from './images/i-mobile.png'



function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__bg-gradient">
          <div className="header__row">
            <div className="header__text">
              <h1 className="header__name">William Schutte</h1>
              <h2 className="header__sub">Full Stack Web Developer</h2>
            </div>
            <button className="header__btn svg-shadow" />
          </div>
        </div>
      </header>

      <section className="about">
        <div className="about__me">
          <h3 className="about__title">Who am I?</h3>
          <p className="about__me-text">I'm an adaptable developer and engineer with a passion for mathematics and science.</p>
          <p className="about__me-text">I have a full-stack web-dev training program <br></br>under my belt, where I became proficient
            <br></br>with MERN stack tech including: <span className="bold">React, <br></br>Node, Express, MongoDB, Microsoft <br></br> Azure, </span>
              and <span className="bold">JS/HTML/CSS</span>.</p>
        </div>
        <div className="about__tech">
          <h3 className="about__title">Technologies</h3>
          <ul className="about__tech-icons-block">
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconReact} />
              <p className="about__tech-icon-name">React</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconExpress} />
              <p className="about__tech-icon-name">express.js</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconMongo} />
              <p className="about__tech-icon-name">MongoDB</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconNode} />
              <p className="about__tech-icon-name">Node.js</p>
            </li>
            {/* <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconNpm}/>
              <p className="about__tech-icon-name">npm</p>
            </li> */}
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconGithub} />
              <p className="about__tech-icon-name">GitHub</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img-alt" src={iconJs} />
              <p className="about__tech-icon-name">JavaScript</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconCss} />
              <p className="about__tech-icon-name">CSS</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconHtml} />
              <p className="about__tech-icon-name">HTML</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="content">

        <div className="projects">
          <h2 className="projects__title">Projects</h2>
          <div className="projects__container">
            <ul className="projects__block">
              <li className="projects__item">

              </li>
              <li className="projects__item">

              </li>
              <li className="projects__item">

              </li>
              <li className="projects__item">

              </li>
              <li className="projects__item">

              </li>
              <li className="projects__item">

              </li>
            </ul>
          </div>

        </div>
        <div className="contact">
          <h2 className="contact__title">Contact Me</h2>
          <ul className="contact__container">
            <li className="contact__item">
              <img className="contact__icon" src={iconMail} />
              <p className="contact__text">WilliamDSchutte<br></br>@gmail.com</p>
            </li>
            <li className="contact__item">
              <img className="contact__icon" src={iconMobile} />
              <p className="contact__text">+1 (305) 877 - 8459</p>
            </li>
            <li className="contact__item">
              <img className="contact__icon" src={iconGithub} />
              <p className="contact__text">/William-Schutte</p>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
