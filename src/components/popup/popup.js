export default class Popup {
    constructor(popupTag) {
        this.popup  = document.querySelector(popupTag);
        this.popupTitle = this.popup.querySelector('.popup__title');
        this.popupScore = this.popup.querySelector('.popup_totoleScore');
        this.popupClose = this.popup.querySelector('.popup__close')
        this.popupClose.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup__close')) {
                this.popup.classList.add('popup_hidden');
                window.location.reload();
            }
        });
    }

    show() {
        this.popup.classList.remove('popup_hidden');
    }

    addTitle(message) {
        this.popupTitle.textContent = message;
    }
    
    addScore(score) {
        this.popupScore.textContent = score;
    }
}