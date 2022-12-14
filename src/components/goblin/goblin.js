import Popup from "../popup/popup";

export default class Goblin {
  constructor(wrapClass, itemClass) {
    this.wrap = document.querySelector(wrapClass);
    this.items = this.wrap.querySelectorAll(itemClass);
    this.scoreTag = this.wrap.querySelector('.totalScore')
    this.positions = [];
    this.randomPosition = undefined;
    this.goblinInterval = this.addInterval
    this.loseCounter = 5;
    this.totalScore = 0;
    this.onClick = this.onClick.bind(this);
    this.removeGoblin = this.removeGoblin.bind(this);
    this.wrap.addEventListener('click', this.onClick);
  }
  
  addPositions() {
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].setAttribute('position', i);
      this.positions.push(i);
    }
  }
  
  getRandomPosition() {
    const goblin = document.querySelector('.goblin');
    this.randomPosition = Math.floor(
      Math.random() * (this.positions[this.positions.length - 1] - this.positions[0] + 1),
    );
    if (goblin && Number(this.randomPosition) === Number(goblin.getAttribute('position'))) {
      this.getRandomPosition();
    }
    return this.randomPosition;
  }
    
  addInterval() {
    this.goblinInterval = setInterval(() => {
      this.checkWin();
      this.getRandomPosition();
      this.addGoblin();
      this.loseCounter -= 1
    }, 1000);
  }
  
  addGoblin() {
    let targetPos = this.getRandomPosition();
    this.items.forEach((item) =>{
      if (item.classList.contains('goblin')) {
        item.classList.remove('goblin');
      };
    })
    this.items.forEach((item) => {
      if (Number(item.getAttribute('position')) === Number(this.randomPosition)) {
        targetPos = item.getAttribute('position');
      };
    });
    if (this.items[Number(targetPos)]) {
      this.items[Number(targetPos)].classList.add('goblin');
    };
  }

  removeGoblin() {
    this.items.forEach((item) => {
      item.classList.remove('goblin');
    });
  }

  onClick(e) {
    const target = e.target
    if (target.classList.contains('hole') && target.classList.contains('goblin')) {
      this.removeGoblin();
      this.loseCounter += 1;
      this.totalScore += 10;
      this.scoreTag.textContent = `${this.totalScore}`;
    };
  }

  checkWin() {
    if (this.loseCounter <= 0) {
      const popUp = new Popup('.popup')
      clearInterval(this.goblinInterval);
      popUp.show();
      popUp.addTitle('Вы проиграли');
      popUp.addScore(`Ваш счет ${this.totalScore}`);
    }
  }
}