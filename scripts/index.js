const portfolioSection = document.querySelector('.portfolio');
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
