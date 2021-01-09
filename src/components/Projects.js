import React, { useEffect } from 'react';
import projectData from '../utils/projectsData';
import Project from './Project';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projects(props) {
	useEffect(() => {
		Aos.init({})
	}, []);

	return (
		<div className="projects">
			<h2 className="projects__title"
				data-aos="fade-down"
				data-aos-delay="500"
				data-aos-duration="1000">Projects</h2>
			<div className="projects__container">
				<ul className="projects__block">
					{projectData.map((prjct, i) => (
						<Project key={i} index={i} data={prjct} openDetail={props.openDetail}/>
					))}
				</ul>
			</div>

		</div>
	);
}