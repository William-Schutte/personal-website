import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Tech from './Tech';
import Projects from './Projects';
import Contact from './Contact';
import ProjectDetailModal from './ProjectDetailModal';


function App() {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [project, setProject] = React.useState({});
  const aboutSection = React.createRef(); // Will not work in Functional component
  

  function handleHeaderBtnClick() {
    aboutSection.scrollIntoView();
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleProjectDetailClick(selectedProject) {
    setProject(selectedProject);
    setModalOpen(true);
  }


  return (
    <div className="App">
      <Header />
      <section className="about" ref={aboutSection}>
        <AboutMe />
        <Tech />
      </section>
      <section className="content">
        <Projects openDetail={handleProjectDetailClick} />
        <Contact />
      </section>
      <footer className="footer">
        <p className="footer__text">William Schutte, &#169;2020</p>
      </footer>
      <ProjectDetailModal project={project} isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
