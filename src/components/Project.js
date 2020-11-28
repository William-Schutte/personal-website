import React from 'react';

export default function Project(props) {
    const bgProp = { backgroundImage: `url(${props.data.imgs[0]})` };


    function handleDetailsClick() {
        props.openDetail(props.data);
    }

    return (
        <li className="project" style={bgProp} >
            <div className="project__overlay">
                <h3 className="project__title">{props.data.name}</h3>
                <div className="project__tech-container">
                    {props.data.tech.map((icon, i) => (
                        <img className="project__icon" key={i} src={icon} alt="Technology icon" />
                    ))}
                </div>
                <button className="project__btn" onClick={handleDetailsClick}>Details</button>
                <a className="project__btn" href={props.data.links.ghLink} target="_blank" rel="noreferrer">View Code</a>
                <a className="project__btn" href={props.data.links.demoLink} target="_blank" rel="noreferrer">View Project</a>
            </div>
        </li>
    )
}