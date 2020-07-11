let popupInfoButtonElem = document.querySelector('.popup-info__button'),
    contactInfoElem = document.querySelector('.contact__info');

let modalElem = document.querySelector('.modal'),
    modalWindowElem = modalElem.querySelector('.modal__window');
    modalCloseElem = modalElem.querySelector('.modal__close'),
    formFeedbackTextElemArr = modalElem.querySelectorAll('.form-feedback__text'),
    formFeedbackTextareaElem = modalElem.querySelector('.form-feedback__textarea'),
    formFeedbackSubmitElem = modalElem.querySelector('.form-feedback__submit');

let isStorageSupport = true;

if (!localStorage) isStorageSupport = false;

popupInfoButtonElem.addEventListener('click', (event) => {    
    event.preventDefault();

    modalElem.classList.add('modal--show');
    if (isStorageSupport) {
        if (formFeedbackTextElemArr[0].value)
            formFeedbackTextElemArr[0].value = localStorage.getItem("name");
    
        if (formFeedbackTextElemArr[1].value)
            formFeedbackTextElemArr[1].value = localStorage.getItem("email");
    
        if (formFeedbackTextareaElem.value) 
            formFeedbackTextareaElem.value = localStorage.getItem("feedback");
    }

    formFeedbackTextElemArr[0].focus();
});

formFeedbackSubmitElem.addEventListener('click', (event) => {    
    if (!formFeedbackTextElemArr[0].value 
        || !formFeedbackTextElemArr[1].value
        || !formFeedbackTextareaElem.value) {
        
        event.preventDefault();

    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", formFeedbackTextElemArr[0].value);
            localStorage.setItem("email", formFeedbackTextElemArr[1].value);
            localStorage.setItem("feedback", formFeedbackTextareaElem.value);
        }

        modalElem.classList.remove('modal--show');
    }
});

formFeedbackTextElemArr[0].addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        if (!formFeedbackTextElemArr[0].value 
            || !formFeedbackTextElemArr[1].value
            || !formFeedbackTextareaElem.value) {
            
            event.preventDefault();

        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", formFeedbackTextElemArr[0].value);
                localStorage.setItem("email", formFeedbackTextElemArr[1].value);
                localStorage.setItem("feedback", formFeedbackTextareaElem.value);
            }

            modalElem.classList.remove('modal--show');
        }
    }
});

formFeedbackTextElemArr[1].addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        if (!formFeedbackTextElemArr[0].value 
            || !formFeedbackTextElemArr[1].value
            || !formFeedbackTextareaElem.value) {
            
            event.preventDefault();

        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", formFeedbackTextElemArr[0].value);
                localStorage.setItem("email", formFeedbackTextElemArr[1].value);
                localStorage.setItem("feedback", formFeedbackTextareaElem.value);
            }

            modalElem.classList.remove('modal--show');
        }
    }
});

modalCloseElem.addEventListener('click', () => {
    if (isStorageSupport) {
        localStorage.setItem("name", formFeedbackTextElemArr[0].value);
        localStorage.setItem("email", formFeedbackTextElemArr[1].value);
        localStorage.setItem("feedback", formFeedbackTextareaElem.value);
    }

    modalElem.classList.remove('modal--show');
});

window.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
        if (modalElem.classList.contains("modal--show")) {
            event.preventDefault();

            modalElem.classList.remove('modal--show');
        }
    }
});