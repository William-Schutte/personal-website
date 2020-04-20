const portfolioSection = document.querySelector('.portfolio');

const cardItem1 = portfolioSection.querySelector('.card1');
const cardItem2 = portfolioSection.querySelector('.card2');
const cardItem3 = portfolioSection.querySelector('.card3');
const cardItem4 = portfolioSection.querySelector('.card4');


function generatePopup(item) {
    let title = item.querySelector('.card__title').textContent;
    let imageURLs = item.querySelectorAll('.image-urls')
    let text1 = item.querySelector('.card__text1').textContent;
    let text2 = item.querySelector('.card__text2').textContent;
    let icons = item.querySelector('.card__icons').innerHTML;
}

cardItem1.addEventListener("click", () => generatePopup(cardItem1));
cardItem2.addEventListener("click", () => generatePopup(cardItem2));
cardItem3.addEventListener("click", () => generatePopup(cardItem3));
cardItem4.addEventListener("click", () => generatePopup(cardItem4));
