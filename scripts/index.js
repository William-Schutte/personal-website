const portfolioSection = document.querySelector('.portfolio');
const portfolioContent = [
    {   
        id: 1,
        name: "Personal Portfolio Page",
        description: ["Any developer needs their own site to show off what they can do. See how I made this one.", "I started developing this site about halfway through my Web-Dev coding bootcamp after I had a solid, foundational understanding of HTML and CSS, and right as I began diving into JS.",
            "This site is still a work in progress, but I am quickly integrating more features and content every week."],
        skills: ["JS-icon.png", "CSS3-icon.svg", "HTML5-icon.svg"],
        imgUrls: ["../images/portfolio-cards/card-personal-page.png"]
    },
    {   
        id: 2,
        name: "Personal Portfolio Page",
        description: ["I started developing this site about halfway through my Web-Dev coding bootcamp after I had a solid, foundational understanding of HTML and CSS, and right as I began diving into JS.",
            "This site is still a work in progress, but I am quickly integrating more features and content every week."],
        skills: ["JS-icon.png", "CSS3-icon.svg", "HTML5-icon.svg"],
        imgUrls: [""]
    },
    {   
        id: 3,
        name: "Personal Portfolio Page",
        description: ["I started developing this site about halfway through my Web-Dev coding bootcamp after I had a solid, foundational understanding of HTML and CSS, and right as I began diving into JS.",
            "This site is still a work in progress, but I am quickly integrating more features and content every week."],
        skills: ["JS-icon.png", "CSS3-icon.svg", "HTML5-icon.svg"],
        imgUrls: [""]
    },
];

const popup = document.querySelector('.popup');
const popupUnderlay = popup.querySelector('.popup__underlay');
const closeBtn = popup.querySelector('.popup__close-btn');
const popupContent = popup.querySelector('.popup__content');
const popupTitle = popup.querySelector('.popup__title');
const popupIcons = popup.querySelector('.popup__icons');
const popupText1 = popup.querySelector('.text1');
const popupText2 = popup.querySelector('.text2');
const cardItem1 = portfolioSection.querySelector('.card1');
const cardItem2 = portfolioSection.querySelector('.card2');
const cardItem3 = portfolioSection.querySelector('.card3');
const cardItem4 = portfolioSection.querySelector('.card4');

const cardTemplate = document.querySelector("#cardTemplate");
const portfolioGrid = document.querySelector(".portfolio__grid");

function generateCard(card) {
    const newCard = cardTemplate.content.cloneNode(true);
    
    console.log(newCard);
    newCard.querySelector(".card__title").textContent = card.name;
    newCard.querySelector(".card__image").setAttribute("src", card.imgUrls[0]);
    newCard.querySelector(".card__description").textContent = card.description[0];

    // skills next



    portfolioGrid.append(newCard);
}

portfolioContent.forEach(generateCard)


function generatePopup(item) {
    popup.classList.toggle('popup_opened');

    let title = item.querySelector('.card__title').textContent;
    let imageURLs = item.querySelectorAll('.image-urls')
    let text1 = item.querySelector('.card__text1').textContent;
    let text2 = item.querySelector('.card__text2').textContent;
    let icons = item.querySelector('.card__icons').innerHTML;

    popupTitle.textContent = title;
    popupIcons.innerHTML = icons;
    popupText1.textContent = text1;
    popupText2.textContent = text2;
}

cardItem1.addEventListener("click", () => generatePopup(cardItem1));
cardItem2.addEventListener("click", () => generatePopup(cardItem2));
cardItem3.addEventListener("click", () => generatePopup(cardItem3));
cardItem4.addEventListener("click", () => generatePopup(cardItem4));
closeBtn.addEventListener("click", () => popup.classList.toggle('popup_opened'));
popupUnderlay.addEventListener("click", () => popup.classList.toggle('popup_opened'));
