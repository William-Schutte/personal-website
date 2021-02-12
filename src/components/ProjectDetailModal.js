import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function ProjectDetailModal(props) {

    return (
        <div className={`modal ${props.isOpen && (`modal_open`)}`}>
            {props.isOpen && (
                <div className="modal__container">
                    <div className="modal__img-slider">
                        <AutoplaySlider
                            play={true}
                            cancelOnInteraction={true}
                            interval={7000}
                            bullets={false}
                        >
                            {props.project.imgs.map((img, i) => (
                                <div key={`img-${i}`} data-src={img} className="modal__img" />
                            ))}
                        </AutoplaySlider>
                    </div>
                    <div className="modal__info-column">
                        <h3 className="modal__title">{props.project.name}</h3>
                        {props.project.description.map((text, i) => (
                            <p key={`description-${i}`} className="modal__description">{text}</p>
                        ))}

                        <div className="modal__links">
                            {props.project.links.ghLink && (
                                <a className="modal__link-btn" href={props.project.links.ghLink} target="_blank" rel="noreferrer">View Code</a>
                            )}
                            <a className="modal__link-btn" href={props.project.links.demoLink} target="_blank" rel="noreferrer">View Project</a>
                            <button className="modal__link-btn modal__link-btn_secondary" onClick={props.closeModal}>Back</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDetailModal