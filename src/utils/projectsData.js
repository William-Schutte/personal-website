import around1 from '../images/portfolio/around1.png';
import around2 from '../images/portfolio/around2.png';
import around3 from '../images/portfolio/around3.png';
import news1 from '../images/portfolio/news1.png';
import news2 from '../images/portfolio/news2.png';
import news3 from '../images/portfolio/news3.png';
import news4 from '../images/portfolio/news4.png';
import travelMenu1 from '../images/portfolio/travel-menu1.png';
import travelMenu2 from '../images/portfolio/travel-menu2.png';
import travelMenu3 from '../images/portfolio/travel-menu3.png';
import portfolio1 from '../images/portfolio/portfolio1.png';
import portfolio2 from '../images/portfolio/portfolio2.png';
import indubitably1 from '../images/portfolio/indubitably1.png';
import indubitably2 from '../images/portfolio/indubitably2.png';
import indubitably3 from '../images/portfolio/indubitably3.png';
import portland1 from '../images/portfolio/portland1.png';
import portland2 from '../images/portfolio/portland2.png';
import adventur1 from '../images/portfolio/adventur1.png';
import adventur2 from '../images/portfolio/adventur2.jpg';
import adventur3 from '../images/portfolio/adventur3.jpg';
import iterative1 from '../images/portfolio/iterative1.png';
import iterative2 from '../images/portfolio/iterative2.png';
import iterative3 from '../images/portfolio/iterative3.png';
import iterative4 from '../images/portfolio/iterative4.png';

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
import python from '../images/icons/i-python.svg';


class Project {
    constructor({ name, ghLink, demoLink, description, imgs, tech }) {
        this.name = name;
        this.links = { ghLink, demoLink };
        this.description = description;
        this.imgs = imgs;
        this.tech = tech;
    }
}

const p0 = new Project({ 
    name: "Iterative.ai Landing Page", 
    ghLink: false,
    demoLink: "https://iterative.ai/",
    description: [
        "Iterative.ai, a data science and machine learning version control platform, came to us wanting a new static landing page built with Gatsby.", 
        "I spearheaded a team of bootcamp graduates to develop and ship this site in about 3 weeks. We organized tasks on Trello and collaborated via Github to pull all the components together.",
        "We decided to use Styled Components as this design framework pairs nicely with Gatsby."],
    tech: [gatsby, react, js, github],
    imgs: [iterative1, iterative2, iterative3, iterative4],
});

const p1 = new Project({ 
    name: "News Explorer", 
    ghLink: "https://github.com/William-Schutte/news-explorer-frontend",
    demoLink: "https://ws.news.students.nomoreparties.site/",
    description: [
        "News Explorer is a React application that fetches articles from the powerful NewsAPI and displays articles for the user. Once logged in, users can save articles to their profile.", 
        "This fully responsive SPA was built with Create-React-App in Agile-like 2 week sprints with tasks self-assigned on a Jira Kanban board, served via an EC2 machine on AWS. The backend is also on the same server at the API subdomain, running Node.js/Express.",
        "MongoDB stores user and article data, while JWTs are used to keep users logged in and to remember searched articles when returning to the page."],
    tech: [react, express, mongo, js, node, npm],
    imgs: [news1, news2, news3, news4],
});

const p2 = new Project({ 
    name: "Indubitably", 
    ghLink: "https://github.com/William-Schutte/indubitably",
    demoLink: "http://ws-indubitably.com/",
    description: ["This is my current side project! I am designing a site to collect job information from Indeed to facilitate my job search. The backend is a Node.js server running Python scripts for web-scraping while utilizing Redis to handle queueing.", 
        "Different cities and regions seem to have preferences for various frameworks or languages. I thought it would be interesting to see how these variables play out geographically, and maybe, it would even help me find a new job in a cool new city!", 
        "Type in a job title and see what the market is looking like!",
    ],
    tech: [react, python, express, figma, js],
    imgs: [indubitably1, indubitably2, indubitably3],
});

const p3 = new Project({ 
    name: "Around the U.S. Image-Share Project", 
    ghLink: "https://github.com/William-Schutte/react-around-api-full",
    demoLink: "https://ws.p15.students.nomoreparties.site/",
    description: [
        "This was the final guided project in my full-stack web-dev course, and as such, incorporates almost all of the techniques/frameworks covered in the class. This app features user creation, a login screen, and an Instagram-like image hosting, where users can upload and like pictures.", 
        "The front end was designed as a React single-page-app from a given design spec on Figma, with React Router providing navigation to multiple screens. The backend is a custom Express RESTful API running on Microsoft Azure servers.",
        "MongoDB stores user and card data, allowing for user authorization and protected actions, like deleting cards and editing profile information."],
    tech: [react, express, mongo, js, node, npm],
    imgs: [around1, around2, around3],
});

const p4 = new Project({ 
    name: "ADVENT(ur)", 
    ghLink: "https://github.com/William-Schutte/gatsby-react-demo",
    demoLink: "https://wonderful-boyd-e49e91.netlify.app/",
    description: ["I love traveling. Learning new things is pretty great. So I created this responsive site for a hypothetical travel company while learning a new thing or two.",
        "Gatsby.js, an open-sourced React framework, provided the backbone for this site. I used Styled Components to dynamically incorporate CSS and make my React code more maintainable.",
        "Finally, I used a bit of GraphQL to manage assets and images."],
    tech: [gatsby, react, graphQL, netlify],
    imgs: [adventur1, adventur2, adventur3],
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

const p6 = new Project({ 
    name: "Portland to Portland", 
    ghLink: "https://github.com/William-Schutte/web_project_3",
    demoLink: "https://william-schutte.github.io/web_project_3/",
    description: ["One of my earlier assignments for my web-dev course, this responsive page demonstrates an understanding of HTML, CSS, and BEM methodology, as well as the ability to take a design and make it functional."],
    tech: [html, css, github],
    imgs: [portland1, portland2],
});

const p = new Project({ 
    name: "Where to Next?", 
    ghLink: "https://github.com/William-Schutte/travel-menu",
    demoLink: "https://wizardly-heyrovsky-06023e.netlify.app/",
    description: ["A simple React page with destinations I plan on visiting. Destinations can be filtered by region and sorted by flight cost, region, or id (default).",
        ""],
    tech: [react, netlify, js],
    imgs: [travelMenu1, travelMenu2, travelMenu3],
});

const projects = [p0, p1, p2, p3, p4, p5, p6];
export default projects;