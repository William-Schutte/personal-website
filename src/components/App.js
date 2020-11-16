import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Tech from './Tech';
import Projects from './Projects';
import Contact from './Contact';
import ProjectDetailModal from './ProjectDetailModal';


class App extends React.Component {
  constructor() {
    super();
    this.aboutSection = React.createRef();
    this.state = {
      isModalOpen: false,
      project: {},
    };

    this.handleHeaderBtnClick = this.handleHeaderBtnClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleProjectDetailClick = this.handleProjectDetailClick.bind(this);
  }

  handleHeaderBtnClick() {
    this.aboutSection.current.scrollIntoView({ behavior: "smooth" });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleProjectDetailClick(selectedProject) {
    this.setState({
      isModalOpen: true,
      project: selectedProject,
    });
  }

  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleHeaderBtnClick}/>
        <section className="about" ref={this.aboutSection}>
          <AboutMe />
          <Tech />
        </section>
        <section className="content">
          <Projects openDetail={this.handleProjectDetailClick} />
          <Contact />
        </section>
        <footer className="footer">
          <p className="footer__text">William Schutte, &#169;2020</p>
        </footer>
        <ProjectDetailModal project={this.state.project} isOpen={this.state.isModalOpen} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default App;
