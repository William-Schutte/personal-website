import React from 'react';
import projectData from '../utils/projectsData';
import Project from './Project';

export default function Projects() {
    return (
        <div className="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__container">
                <ul className="projects__block">
                    {projectData.map((prjct, i) => (
                        <Project key={i} data={prjct} />
                    ))}                    
                </ul>
            </div>

        </div>
    );
}