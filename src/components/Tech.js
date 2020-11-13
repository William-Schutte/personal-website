import iconCss from '../images/icons/i-css.svg';
import iconExpress from '../images/icons/i-express.svg';
import iconHtml from '../images/icons/i-html.svg';
import iconJs from '../images/icons/i-js.svg';
import iconMongo from '../images/icons/i-mongo.svg';
import iconNode from '../images/icons/i-node.svg';
import iconNpm from '../images/icons/i-npm.svg';
import iconReact from '../images/icons/i-react.svg';
import iconGithub from '../images/icons/i-github.svg';

function Tech() {
    return (
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
    );
}

export default Tech