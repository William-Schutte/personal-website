import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AboutMe() {
  useEffect(() => {
    Aos.init({})
  }, []);

  return (
    <div className="about__me">
      <h3 className="about__title"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000">Who am I?</h3>
      <p className="about__me-text"
        data-aos="fade-right"
        data-aos-delay="150"
        data-aos-duration="1000">I'm an adaptable developer and engineer with a passion for mathematics and science.</p>
      <p className="about__me-text"
        data-aos="fade-right"
        data-aos-delay="250"
        data-aos-duration="1000">I have expertise with both frontend and backend<br></br> web dev frameworks. I love working
            with MERN stack <br></br>tech including: <span className="bold">React, Node, Express, MongoDB, </span>
        <br></br>and <span className="bold">Javascript</span>.</p>
      <p className="about__me-text"
        data-aos="fade-right"
        data-aos-delay="350"
        data-aos-duration="1000">I have projects deployed across multiple <br></br>cloud service providers like <span className="bold">Microsoft <br></br>Azure</span> and <span className="bold">AWS</span>.</p>
    </div>
  );
}

export default AboutMe