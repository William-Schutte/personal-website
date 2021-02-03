import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Project(props) {
    useEffect(() => {
        Aos.init({})
    }, []);

    const bgProp = { backgroundImage: `url(${props.data.imgs[0]})` };
    console.log(props.data)

    function handleDetailsClick() {
        props.openDetail(props.data);
    }

    return (
        <li className="project" style={bgProp}
            data-aos="zoom-in"
            data-aos-delay={`${props.index % 3 * 200}`}
            data-aos-duration="1000">
            <div className="project__overlay">
                <h3 className="project__title">{props.data.name}</h3>
                <div className="project__tech-container">
                    {props.data.tech.map((icon, i) => (
                        <img className="project__icon" key={i} src={icon} alt="Technology icon" />
                    ))}
                </div>
                <button className="project__btn" onClick={handleDetailsClick}>Details</button>
                <a className="project__btn" href={props.data.links.ghLink} target="_blank" rel="noreferrer">View Code <i class="project__btn_link fas fa-external-link-alt"></i></a>
                <a className="project__btn" href={props.data.links.demoLink} target="_blank" rel="noreferrer">View Project <i class="project__btn_link fas fa-external-link-alt"></i></a>
            </div>
        </li>
    )
}
