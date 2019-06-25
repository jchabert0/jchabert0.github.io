"use strict"

import { Pokemon } from "./classPokemon";
import { pokemonTab, randomPokemonPlayer, randomPokemonOpponent, opponent, player } from "./instancePokemon";

// ICI LES GIFS POKEMON

document.querySelector("#imgPlayer").src = randomPokemonPlayer.avatarBack;
document.querySelector("#imgOpponent").src = randomPokemonOpponent.avatarFront;

document.querySelector("#lifePlayer").max = randomPokemonPlayer.life;
document.querySelector("#lifeOpponent").max = randomPokemonOpponent.life;

// ICI LES QUERYSELECTOR DE LA VIEW

let button = document.querySelectorAll('.btn');

let btnAttack = document.querySelector('#btnAttack');
let btnHeal = document.querySelector('#btnHeal');
let btnRun = document.querySelector('#btnRun');
let btnon = document.querySelector('#btnon');
let random = document.querySelector('#btnrandom');
let btnsound = document.querySelector('#btnsound');

let pad = document.querySelector('#btn');

let ecran = document.querySelector('#ecran');
let ecranoff = document.querySelector('#ecranoff');

let imgOpponent = document.querySelector('#imgOpponent');
let imgPlayer = document.querySelector('#imgPlayer');

let commentairePlayer = document.querySelector('#commentairePlayer');
let commentaireOpponent = document.querySelector('#commentaireOpponent');

// ICI LES BARRES DE PROGRESSION

let lifeOpponent = document.querySelector('#lifeOpponent');
let lifePlayer = document.querySelector('#lifePlayer');

// ICI LES FONCTIONS ATTAQUE

function attackPlayer() { // l'attaque du player
  commentairePlayer.textContent = player.attack(opponent);

  imgPlayer.style.animationName = '';
  imgOpponent.style.animationName = 'opponent';

  lifeOpponent.value = opponent.life;
}
function attackOpponent() { // l'attaque de l'opponent
  commentaireOpponent.textContent = opponent.attack(player);

  imgOpponent.style.animationName = '';
  imgPlayer.style.animationName = 'player';

  setTimeout(() => {
    imgPlayer.style.animationName = '';
  }, 2000);

  lifePlayer.value = player.life;
  if (lifePlayer.value <= 0) {
    lifePlayer.value = 0;
    commentairePlayer.textContent = `${target.name} remporte le combat !`
  }
}
function randomOpponent() { // l'attaque random de l'opponent quand ses Pv < 100
  if (lifeOpponent.value <= 100) {

    let tab = [healOpponent, attackOpponent];
    let choiceOpponent = tab[Math.floor(Math.random() * tab.length)];

    setTimeout(() => {
      choiceOpponent();
    }, 2000);

  } else {
    setTimeout(() => {
      attackOpponent();
    }, 2000);
  }
}

// ICI LES FONCTIONS HEAL

function healPlayer() { // on soigne le player
  commentairePlayer.textContent = player.heal();
  lifePlayer.value = player.life;
}

let music = new Audio('./music/music.ogg');

function healOpponent() { // on soigne l'opponent
  commentaireOpponent.textContent = opponent.heal();
  lifeOpponent.value = opponent.life;
}

//  ICI LES FONCTIONS AUDIO

function audioPlay() {
  music.play();
}

function audioPause() { // pause music
  music.pause();
}

// ICI LES AUTRES FONCTIONS

function randomBattle() { // on fait un random sur les scenes de combat
  let battleTab = ['url(../src/images/bgbattle/battle1.png)', 'url(../src/images/bgbattle/battle2.png)', 'url(../src/images/bgbattle/battle3.png)', 'url(../src/images/bgbattle/battle4.png)', 'url(../src/images/bgbattle/battle5.png)'];
  let battleFight = battleTab[Math.floor(Math.random() * battleTab.length)];
  ecran.style.backgroundImage = battleFight;
}

function padDisplay() { // on cache le pad
  pad.style.display = 'none';

  setTimeout(() => {
    pad.style.display = '';
  }, 4000);
}

function emptyText() { // on vide les zones de texte
  setTimeout(() => {
    commentaireOpponent.innerHTML = '';
    commentairePlayer.innerHTML = '';
  }, 4000);
}

function run() { // on recharge la page
  player.run();
  commentairePlayer.textContent = player.run();
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}

// GAME

let gameOn = true; // pour remettre la page noire quand on clique sur on off

for (let btn of button) { // on boucle sur les bouttons 

  btn.addEventListener('click', () => {

    if (btn === btnAttack) { // code de l'attaque

      padDisplay();

      attackPlayer();

      randomOpponent();

      emptyText();

    } else if (btn === btnHeal) { // code de la potion

      padDisplay();

      randomOpponent();

      healPlayer();

      emptyText();

    } else if (btn === btnRun) { // code de la fuite
      run();

    } else if (btn === btnsound) { // code du son
      if (music.paused === true) {
        audioPlay();
      }
      else {
        audioPause();
      }

    } else if (btn === btnon) { // code de on off

      if (gameOn) {
        ecranoff.style.display = 'none';
        gameOn = false;
        randomBattle();
      } else {
        ecranoff.style.display = 'initial';
        gameOn = true;
        window.location.reload();
      }

    } else if (btn === btnrandom) { // code du random battle
      randomBattle();
    }
  });
};

