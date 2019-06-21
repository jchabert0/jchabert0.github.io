"use strict"

export class Pokemon {
  constructor(name, avatarBack, avatarFront, life) {

    this.name = name;
    this.avatarBack = avatarBack;
    this.avatarFront = avatarFront;
    this.life = life;
    this.maxLife = life;

  }

  gamePlay(tab) {
    let actionRandom = tab[Math.floor(Math.random() * tab.length)];
    return actionRandom;
  }

  attack(target) {
    let tab = [0, -20, -25, -30];
    let actionRandom = this.gamePlay(tab);

    if (this.name === 'Reptincel' || this.name === 'Carabaffe' || this.name === 'Herbizarre') {
      actionRandom = actionRandom * 1.5;

    } else if (this.name === 'Dracofeu' || this.name === 'Florizarre' || this.name === 'Tortank' || this.name === 'Bibiche') {

      actionRandom = actionRandom * 2;

    } else if (this.name === 'Mewtwo') {
      actionRandom = actionRandom * 3;
    }
    target.life += actionRandom;

    if (target.life <= 0) {
      this.life = 0;
      setTimeout(() => {
        window.location.reload();
      }, 2000);

      return `${this.name} remporte le combat !`
    } else {
      let audioTab = ['./music/coups/fight.mp3', './music/coups/fight4.mp3', './music/coups/fight2.mp3', './music/coups/fight3.mp3'];
      let audioFight = audioTab[Math.floor(Math.random() * audioTab.length)];

      let fighting = new Audio(audioFight);
      fighting.play();
      return `${this.name} inflige ${Math.abs(actionRandom)} PV de dégâts !`;
    }
  }

  heal() {

    let ab = [0, 0, 0, 100];
    let actionRandom = this.gamePlay(ab);
    this.life += actionRandom;
    if (this.life > this.maxLife) {
      this.life = this.maxLife;
    }

    if (actionRandom === 0) {

      return `Dommage ! ${this.name} a raté la potion !`
    } else {
      let healing = new Audio('./music/heal/heal.mp3');
      healing.play();
      return `${this.name} utilise une potion et se soigne de ${actionRandom} PV`
    }
  }

  run() {
    return `${this.name} prend la fuite !`
  }
}







