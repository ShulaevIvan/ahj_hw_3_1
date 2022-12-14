(()=>{"use strict";class t{constructor(t){this.popup=document.querySelector(t),this.popupTitle=this.popup.querySelector(".popup__title"),this.popupScore=this.popup.querySelector(".popup_totoleScore"),this.popupClose=this.popup.querySelector(".popup__close"),this.popupClose.addEventListener("click",(t=>{t.target.classList.contains("popup__close")&&(this.popup.classList.add("popup_hidden"),window.location.reload())}))}show(){this.popup.classList.remove("popup_hidden")}addTitle(t){this.popupTitle.textContent=t}addScore(t){this.popupScore.textContent=t}}class o{constructor(t,o){this.wrap=document.querySelector(t),this.items=this.wrap.querySelectorAll(o),this.scoreTag=this.wrap.querySelector(".totalScore"),this.positions=[],this.randomPosition=void 0,this.goblinInterval=this.addInterval,this.loseCounter=5,this.totalScore=0,this.onClick=this.onClick.bind(this),this.removeGoblin=this.removeGoblin.bind(this),this.wrap.addEventListener("click",this.onClick)}addPositions(){for(let t=0;t<this.items.length;t+=1)this.items[t].setAttribute("position",t),this.positions.push(t)}getRandomPosition(){const t=document.querySelector(".goblin");return this.randomPosition=Math.floor(Math.random()*(this.positions[this.positions.length-1]-this.positions[0]+1)),t&&Number(this.randomPosition)===Number(t.getAttribute("position"))&&this.getRandomPosition(),this.randomPosition}addInterval(){this.goblinInterval=setInterval((()=>{this.checkWin(),this.getRandomPosition(),this.addGoblin(),this.loseCounter-=1}),1e3)}addGoblin(){let t=this.getRandomPosition();this.items.forEach((t=>{t.classList.contains("goblin")&&t.classList.remove("goblin")})),this.items.forEach((o=>{Number(o.getAttribute("position"))===Number(this.randomPosition)&&(t=o.getAttribute("position"))})),this.items[Number(t)]&&this.items[Number(t)].classList.add("goblin")}removeGoblin(){this.items.forEach((t=>{t.classList.remove("goblin")}))}onClick(t){const o=t.target;o.classList.contains("hole")&&o.classList.contains("goblin")&&(this.removeGoblin(),this.loseCounter+=1,this.totalScore+=10,this.scoreTag.textContent=`${this.totalScore}`)}checkWin(){if(this.loseCounter<=0){const o=new t(".popup");clearInterval(this.goblinInterval),o.show(),o.addTitle("Вы проиграли"),o.addScore(`Ваш счет ${this.totalScore}`)}}}window.addEventListener("DOMContentLoaded",(()=>{const t=new o(".game_wrap",".hole");t.addPositions(),t.addInterval()}))})();