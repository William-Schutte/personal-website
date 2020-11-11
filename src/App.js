import triangles from './images/bg-triangles.png';
import iconCss from './images/i-css.svg';
import iconExpress from './images/i-express.svg';
import iconGithub from './images/i-github.svg';
import iconHtml from './images/i-html.svg';
import iconJs from './images/i-js.svg';
import iconMongo from './images/i-mongo.svg';
import iconNode from './images/i-node.svg';
import iconNpm from './images/i-npm.svg';
import iconReact from './images/i-react.svg';



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
              <img className="about__tech-icon-img" src={iconReact}/>
              <p className="about__tech-icon-name">React</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconExpress}/>
              <p className="about__tech-icon-name">express.js</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconMongo}/>
              <p className="about__tech-icon-name">MongoDB</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconNode}/>
              <p className="about__tech-icon-name">Node.js</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconNpm}/>
              <p className="about__tech-icon-name">npm</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconGithub}/>
              <p className="about__tech-icon-name">GitHub</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconJs}/>
              <p className="about__tech-icon-name">JavaScript</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconCss}/>
              <p className="about__tech-icon-name">CSS 3</p>
            </li>
            <li className="about__tech-icon">
              <img className="about__tech-icon-img" src={iconHtml}/>
              <p className="about__tech-icon-name">HTML 5</p>
            </li>
          </ul>
        </div>

      </section>

    </div>
  );
}

export default App;
