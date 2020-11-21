import around1 from '../images/portfolio/around1.png';
import around2 from '../images/portfolio/around2.png';
import around3 from '../images/portfolio/around3.png';
import travelMenu1 from '../images/portfolio/travel-menu1.png';
import travelMenu2 from '../images/portfolio/travel-menu2.png';
import travelMenu3 from '../images/portfolio/travel-menu3.png';
import portfolio1 from '../images/portfolio/portfolio1.png';
import portfolio2 from '../images/portfolio/portfolio2.png';
import indubitably1 from '../images/portfolio/indubitably1.png';
import portland1 from '../images/portfolio/portland1.png';
import portland2 from '../images/portfolio/portland2.png';
import adventur1 from '../images/portfolio/adventur1.png';
import adventur2 from '../images/portfolio/adventur2.jpg';
import adventur3 from '../images/portfolio/adventur3.jpg';

import css from '../images/icons/i-css.svg';
import express from '../images/icons/i-express.svg';
import github from '../images/icons/i-github.svg';
import html from '../images/icons/i-html.svg';
import js from '../images/icons/i-js.svg';
import mongo from '../images/icons/i-mongo.svg';
import node from '../images/icons/i-node.svg';
import npm from '../images/icons/i-npm.svg';
import react from '../images/icons/i-react.svg';
import netlify from '../images/icons/i-netlify.svg';
import figma from '../images/icons/i-figma.svg';
import gatsby from '../images/icons/i-gatsby.svg';
import graphQL from '../images/icons/i-graphql.svg';


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
    imgs: [around1, around2, around3],
});

const p4 = new Project({ 
    name: "Where to Next?", 
    ghLink: "https://github.com/William-Schutte/travel-menu",
    demoLink: "https://wizardly-heyrovsky-06023e.netlify.app/",
    description: ["A simple React page with destinations I plan on visiting. Destinations can be filtered by region and sorted by flight cost, region, or id (default).",
        ""],
    tech: [react, netlify, js],
    imgs: [travelMenu1, travelMenu2, travelMenu3],
});

const p5 = new Project({ 
    name: "This Portfolio", 
    ghLink: "https://github.com/William-Schutte/personal-website",
    demoLink: "https://wschutte.com/",
    description: ["This page is a relatively simple React app deployed on Netlify. I started prototyping on Figma, created a basic HTML mockup, and started adding interactivity to my React components.",
        "You can follow the link to the page below, but you're already here!"],
    tech: [react, netlify, figma, js, css, html],
    imgs: [portfolio1, portfolio2],
});

const p3 = new Project({ 
    name: "Indubitably", 
    ghLink: "https://github.com/William-Schutte/indubitably",
    demoLink: "",
    description: ["This is my current project and is still a work in progress. I am designing a site to collect job information from Indeed to facilitate my job search.", 
        "Different cities and regions seem to have preferences for various frameworks or languages. I thought it would be interesting to see how these variables play out geographically, and maybe, it would even help me find a cool new job in a cool new city.",
        "Images above are of my Figma prototype. I'm currently teaching myself python to scrape indeed for data and organize it in a meaningful way to send it to my React app. The backend will be hosted on AWS."
    ],
    tech: [react, express, figma, js],
    imgs: [indubitably1],
});

const p6 = new Project({ 
    name: "Portland to Portland", 
    ghLink: "https://github.com/William-Schutte/web_project_3",
    demoLink: "https://william-schutte.github.io/web_project_3/",
    description: ["One of my earlier assignments for my web-dev course, this responsive page demonstrates an understanding of HTML, CSS, and BEM methodology, as well as the ability to take a design and make it functional."],
    tech: [html, css, github],
    imgs: [portland1, portland2],
});

const p2 = new Project({ 
    name: "ADVENT(ur)", 
    ghLink: "https://github.com/William-Schutte/gatsby-react-demo",
    demoLink: "https://wonderful-boyd-e49e91.netlify.app/",
    description: ["I love traveling. Learning new things is also up there. I created this responsive site for a hypothetical travel company while learning a new framework or two.",
        "Gatsby.js, an open-sourced React framework, provided the backbone for this site. I used Styled Components to dynamically incorporate CSS and make my React code more maintainable.",
        "Finally, I used a bit of GraphQL to manage assets and images."],
    tech: [gatsby, react, graphQL, netlify],
    imgs: [adventur1, adventur2, adventur3],
});

const projects = [p1, p2, p3, p4, p5, p6];
export default projects;