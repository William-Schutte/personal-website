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
    constructor({ name, ghLink, demoLink, description, imgs, tech }) {
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
    description: [
        "This was the final guided project in my full-stack web-dev course, and as such, incorporates almost all of the techniques/frameworks covered in the class. This app features user creation, a login screen, and an Instagram-like image hosting, where users can upload and like pictures.", 
        "The front end is was designed as a React single-page-app from a given design spec on Figma, with React Router providing navigation to multiple screens. The backend is an Express RESTful API running on Microsoft Azure servers.",
        "MongoDB stores user and card data, allowing for user authorization and protected actions, like deleting cards and editing profile information."],
    tech: [react, express, mongo, js, node, npm],
    imgs: [p1img, p1img2, p1img3],
});

const p2 = new Project({ 
    name: "This Portfolio", 
    ghLink: "https://github.com/William-Schutte/personal-website",
    demoLink: "https://wschutte.com/",
    description: ["This page is a relatively simple React app deployed on Netlify. I started prototyping on Figma, created a basic HTML mockup, and started adding interactivity to my React components.",
        ""],
    tech: [react, netlify, js, css, html],
    imgs: [p2img],
});

const p3 = new Project({ 
    name: "Indubitably", 
    ghLink: "https://github.com/William-Schutte/indubitably",
    demoLink: "",
    description: ["This is my current project and is still a work in progress. I am designing a site to collect job information from Indeed to facilitate my job search.", 
        "Different cities and regions seem to have preferences for various frameworks or languages. I thought it would be interesting to see how these variables play out geographically, and maybe, it would even help me find a cool new job in a cool new city.",
        "Images above are of my Figma prototype. I'm currently teaching myself python to scrape indeed for data and organize it in a meaningful way to send it to my React app. The backend will be hosted on AWS."
    ],
    tech: [react, express, js],
    imgs: [p3img],
});

const p4 = new Project({ 
    name: "Portland to Portland", 
    ghLink: "https://github.com/William-Schutte/web_project_3",
    demoLink: "https://william-schutte.github.io/web_project_3/",
    description: ["One of my earlier assignments for my web-dev course, this responsive page demonstrates an understanding of HTML, CSS, and BEM methodology, as well as the ability to take a design and make it functional."],
    tech: [html, css, github],
    imgs: [p4img, p4img2],
});

const p5 = new Project({ 
    name: "Title", 
    ghLink: "",
    demoLink: "",
    description: [""],
    coverImg: "",
    imgs: [],
});

const projects = [p1, p2, p3, p4];
export default projects;