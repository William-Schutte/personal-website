import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Tech from './components/Tech';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="about">
        <div className="about__me">
          <h3 className="about__title">Who am I?</h3>
          <p className="about__me-text">I'm an adaptable developer and engineer with a passion for mathematics and science.</p>
          <p className="about__me-text">I have a full-stack web-dev training program <br></br>under my belt, where I became proficient
            <br></br>with MERN stack tech including: <span className="bold">React, <br></br>Node, Express, MongoDB, Microsoft <br></br> Azure, </span>
              and <span className="bold">JS/HTML/CSS</span>.</p>
        </div>
        <Tech />
      </section>
      <section className="content">
        <Projects />
        <Contact />
        
      </section>
      <footer className="footer">
        <p className="footer__text">William Schutte, &#169;2020</p>
      </footer>
    </div>
  );
}

export default App;
