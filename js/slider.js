let pageElem = document.querySelector('.page'),
    mainSliderItemButtonElemAll = document.querySelectorAll('.main-slider__item-button'),
    mainSliderItemElemArr = document.querySelectorAll('.main-slider__item');

let showItem = 0;

for (let i = 0; i < mainSliderItemButtonElemAll.length; i++) {
    mainSliderItemButtonElemAll[i].addEventListener('click', () => {
        mainSliderItemElemArr[showItem].classList.remove('main-slider__item--show');
        mainSliderItemElemArr[i].classList.add('main-slider__item--show');
        
        if (i == 0) pageElem.style.backgroundColor = "var(--green-dark)";
        if (i == 1) pageElem.style.backgroundColor = "var(--grey-dark)";
        if (i == 2) pageElem.style.backgroundColor = "var(--brown-dark)";
        
        mainSliderItemButtonElemAll[showItem].classList.remove('main-slider__item-button--active');
        mainSliderItemButtonElemAll[i].classList.add('main-slider__item-button--active');

        showItem = i;
    });
}