import p1img from '../images/portfolio/1-around.png';
import p1img2 from '../images/portfolio/1-around2.png';
import p1img3 from '../images/portfolio/1-around3.png';
import p2img from '../images/portfolio/2-website.png';
import p3img from '../images/portfolio/3-ind.png';
import p4img from '../images/portfolio/4-p2p.png';
import p4img2 from '../images/portfolio/4-p2p2.png';
import css from '../images/icons/i-css.svg';
import express from '../images/icons/i-express.svg';
import github from '../images/icons/i-github.svg';
import html from '../images/icons/i-html.svg';
import js from '../images/icons/i-js.svg';
import mongo from '../images/icons/i-mongo.svg';
import node from '../images/icons/i-node.svg';
import npm from '../images/icons/i-npm.svg';
import react from '../images/icons/i-react.svg';
import netlify from '../images/icons/i-netlify.svg'


class Project {
    constructor({ name, ghLink, demoLink, description, coverImg, imgs, tech }) {
        this.coverImg = coverImg;
        this.name = name;
        this.links = { ghLink, demoLink };
        this.description = description;
        this.imgs = imgs;
        this.tech = tech;
    }
}

const p1 = new Project({ 
    name: "React Capstone Project", 
    ghLink: "https://github.com/William-Schutte/react-around-api-full",
    demoLink: "https://ws.p15.students.nomoreparties.site/",
    description: "",
    tech: [react, express, mongo, js, node, npm],
    coverImg: p1img,
    imgs: [p1img2, p1img3],
});

const p2 = new Project({ 
    name: "This Portfolio", 
    ghLink: "https://github.com/William-Schutte/personal-website",
    demoLink: "https://wschutte.com/",
    description: "",
    tech: [react, netlify, js, css, html],
    coverImg: p2img,
    imgs: [p2img],
});

const p3 = new Project({ 
    name: "Indubitably", 
    ghLink: "https://github.com/William-Schutte/indubitably",
    demoLink: "",
    description: "",
    tech: [react, express, js],
    coverImg: p3img,
    imgs: [],
});

const p4 = new Project({ 
    name: "Portland to Portland", 
    ghLink: "https://github.com/William-Schutte/web_project_3",
    demoLink: "https://william-schutte.github.io/web_project_3/",
    description: "",
    tech: [html, css, github],
    coverImg: p4img,
    imgs: [p4img, p4img2],
});

const p5 = new Project({ 
    name: "Title", 
    ghLink: "",
    demoLink: "",
    description: "",
    coverImg: "",
    imgs: [],
});

const projects = [p1, p2, p3, p4];
export default projects;