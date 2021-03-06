let catalogFormSelectElem = document.querySelector('.catalog-form__fieldset--select'),
    catalogFormSelectLabelElem = document.querySelector('.catalog-form__input-area--select'),
    catalogFormSelectInputElem = catalogFormSelectLabelElem.querySelector('input'),
    catalogFormSelectLabelLinkElem = catalogFormSelectLabelElem.querySelector('.catalog-form__select-label'),
    catalogFormSelectLinkArrElem = document.querySelectorAll('.catalog-form__select-link');

catalogFormSelectLabelElem.addEventListener('click', () => {
        catalogFormSelectElem.classList.toggle('catalog-form__fieldset--select-choose');
});

for (let i = 0; i < catalogFormSelectLinkArrElem.length; i++) {
    catalogFormSelectLinkArrElem[i].addEventListener('click', () => {
        catalogFormSelectElem.classList.remove('catalog-form__fieldset--select-choose');

        catalogFormSelectLabelLinkElem.innerHTML = `${catalogFormSelectLinkArrElem[i].textContent}
            <svg class="catalog-form__select-arrow" width="11" height="10" viewBox="0 0 11 10">
                <path d="M5.5 10L0 0H11"/>
            </svg>`;
        catalogFormSelectInputElem.value = catalogFormSelectLinkArrElem[i].textContent.match(/[а-я].*/gmi);
    })
}