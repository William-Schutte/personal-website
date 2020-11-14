function ProjectDetailModal(props) {
    return (
        <div className={`modal ${props.isOpen && (`modal_open`)}`} onClick={props.closeModal}>
            <div className="modal__container">
                <div className="modal__img-slider">

                </div>
                <h3 className="modal__title">{props.project.name}</h3>
                <p className="modal__description">Description</p>
                <div className="modal__links">
                    <a className="modal__link-btn">View Code</a>
                    <a className="modal__link-btn">View Project</a>
                    <button className="modal__link-btn">Back</button>
                </div>
                
            </div>
        </div>
    );
}

export default ProjectDetailModal