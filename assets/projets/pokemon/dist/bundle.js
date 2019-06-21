/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/classPokemon.js":
/*!************************************!*\
  !*** ./src/script/classPokemon.js ***!
  \************************************/
/*! exports provided: Pokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pokemon\", function() { return Pokemon; });\n\n\nclass Pokemon {\n  constructor(name, avatarBack, avatarFront, life) {\n\n    this.name = name;\n    this.avatarBack = avatarBack;\n    this.avatarFront = avatarFront;\n    this.life = life;\n    this.maxLife = life;\n\n  }\n\n  gamePlay(tab) {\n    let actionRandom = tab[Math.floor(Math.random() * tab.length)];\n    return actionRandom;\n  }\n\n  attack(target) {\n    let tab = [0, -20, -25, -30];\n    let actionRandom = this.gamePlay(tab);\n\n    if (this.name === 'Reptincel' || this.name === 'Carabaffe' || this.name === 'Herbizarre') {\n      actionRandom = actionRandom * 1.5;\n\n    } else if (this.name === 'Dracofeu' || this.name === 'Florizarre' || this.name === 'Tortank' || this.name === 'Bibiche') {\n\n      actionRandom = actionRandom * 2;\n\n    } else if (this.name === 'Mewtwo') {\n      actionRandom = actionRandom * 3;\n    }\n    target.life += actionRandom;\n\n    if (target.life <= 0) {\n      this.life = 0;\n      setTimeout(() => {\n        window.location.reload();\n      }, 2000);\n\n      return `${this.name} remporte le combat !`\n    } else {\n      let audioTab = ['./music/coups/fight.mp3', './music/coups/fight4.mp3', './music/coups/fight2.mp3', './music/coups/fight3.mp3'];\n      let audioFight = audioTab[Math.floor(Math.random() * audioTab.length)];\n\n      let fighting = new Audio(audioFight);\n      fighting.play();\n      return `${this.name} inflige ${Math.abs(actionRandom)} PV de dégâts !`;\n    }\n  }\n\n  heal() {\n\n    let ab = [0, 0, 0, 100];\n    let actionRandom = this.gamePlay(ab);\n    this.life += actionRandom;\n    if (this.life > this.maxLife) {\n      this.life = this.maxLife;\n    }\n\n    if (actionRandom === 0) {\n\n      return `Dommage ! ${this.name} a raté la potion !`\n    } else {\n      let healing = new Audio('./music/heal/heal.mp3');\n      healing.play();\n      return `${this.name} utilise une potion et se soigne de ${actionRandom} PV`\n    }\n  }\n\n  run() {\n    return `${this.name} prend la fuite !`\n  }\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/script/classPokemon.js?");

/***/ }),

/***/ "./src/script/game.js":
/*!****************************!*\
  !*** ./src/script/game.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classPokemon */ \"./src/script/classPokemon.js\");\n/* harmony import */ var _instancePokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instancePokemon */ \"./src/script/instancePokemon.js\");\n\n\n\n\n\n// ICI LES GIFS POKEMON\n\ndocument.querySelector(\"#imgPlayer\").src = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"randomPokemonPlayer\"].avatarBack;\ndocument.querySelector(\"#imgOpponent\").src = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"randomPokemonOpponent\"].avatarFront;\n\ndocument.querySelector(\"#lifePlayer\").max = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"randomPokemonPlayer\"].life;\ndocument.querySelector(\"#lifeOpponent\").max = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"randomPokemonOpponent\"].life;\n\n// ICI LES QUERYSELECTOR DE LA VIEW\n\nlet button = document.querySelectorAll('.btn');\n\nlet btnAttack = document.querySelector('#btnAttack');\nlet btnHeal = document.querySelector('#btnHeal');\nlet btnRun = document.querySelector('#btnRun');\nlet btnon = document.querySelector('#btnon');\nlet random = document.querySelector('#btnrandom');\nlet btnsound = document.querySelector('#btnsound');\n\nlet pad = document.querySelector('#btn');\n\nlet ecran = document.querySelector('#ecran');\nlet ecranoff = document.querySelector('#ecranoff');\n\nlet imgOpponent = document.querySelector('#imgOpponent');\nlet imgPlayer = document.querySelector('#imgPlayer');\n\nlet commentairePlayer = document.querySelector('#commentairePlayer');\nlet commentaireOpponent = document.querySelector('#commentaireOpponent');\n\n// ICI LES BARRES DE PROGRESSION\n\nlet lifeOpponent = document.querySelector('#lifeOpponent');\nlet lifePlayer = document.querySelector('#lifePlayer');\n\n// ICI LES FONCTIONS ATTAQUE\n\nfunction attackPlayer() { // l'attaque du player\n  commentairePlayer.textContent = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"player\"].attack(_instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"opponent\"]);\n\n  imgPlayer.style.animationName = '';\n  imgOpponent.style.animationName = 'opponent';\n\n  lifeOpponent.value = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"opponent\"].life;\n}\nfunction attackOpponent() { // l'attaque de l'opponent\n  commentaireOpponent.textContent = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"opponent\"].attack(_instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"player\"]);\n\n  imgOpponent.style.animationName = '';\n  imgPlayer.style.animationName = 'player';\n\n  setTimeout(() => {\n    imgPlayer.style.animationName = '';\n  }, 2000);\n\n  lifePlayer.value = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"player\"].life;\n  if (lifePlayer.value <= 0) {\n    lifePlayer.value = 0;\n    commentairePlayer.textContent = `${target.name} remporte le combat !`\n  }\n}\nfunction randomOpponent() { // l'attaque random de l'opponent quand ses Pv < 100\n  if (lifeOpponent.value <= 100) {\n\n    let tab = [healOpponent, attackOpponent];\n    let choiceOpponent = tab[Math.floor(Math.random() * tab.length)];\n\n    setTimeout(() => {\n      choiceOpponent();\n    }, 2000);\n\n  } else {\n    setTimeout(() => {\n      attackOpponent();\n    }, 2000);\n  }\n}\n\n// ICI LES FONCTIONS HEAL\n\nfunction healPlayer() { // on soigne le player\n  commentairePlayer.textContent = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"player\"].heal();\n  lifePlayer.value = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"player\"].life;\n}\n\nlet music = new Audio('./music/music.ogg');\n\nfunction healOpponent() { // on soigne l'opponent\n  commentaireOpponent.textContent = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"opponent\"].heal();\n  lifeOpponent.value = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"opponent\"].life;\n}\n\n//  ICI LES FONCTIONS AUDIO\n\nfunction audioPlay() {\n  music.play();\n}\n\nfunction audioPause() { // pause music\n  music.pause();\n}\n\n// ICI LES AUTRES FONCTIONS\n\nfunction randomBattle() { // on fait un random sur les scenes de combat\n  let battleTab = ['url(../src/images/bgbattle/battle1.png)', 'url(../src/images/bgbattle/battle2.png)', 'url(../src/images/bgbattle/battle3.png)', 'url(../src/images/bgbattle/battle4.png)', 'url(../src/images/bgbattle/battle5.png)'];\n  let battleFight = battleTab[Math.floor(Math.random() * battleTab.length)];\n  ecran.style.backgroundImage = battleFight;\n}\n\nfunction padDisplay() { // on cache le pad\n  pad.style.display = 'none';\n\n  setTimeout(() => {\n    pad.style.display = '';\n  }, 4000);\n}\n\nfunction emptyText() { // on vide les zones de texte\n  setTimeout(() => {\n    commentaireOpponent.innerHTML = '';\n    commentairePlayer.innerHTML = '';\n  }, 4000);\n}\n\nfunction run() { // on recharge la page\n  _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"player\"].run();\n  commentairePlayer.textContent = _instancePokemon__WEBPACK_IMPORTED_MODULE_1__[\"player\"].run();\n  setTimeout(() => {\n    window.location.reload();\n  }, 2000);\n}\n\n// GAME\n\nlet gameOn = true; // pour remettre la page noire quand on clique sur on off\n\nfor (let btn of button) { // on boucle sur les bouttons \n\n  btn.addEventListener('click', () => {\n\n    if (btn === btnAttack) { // code de l'attaque\n\n      padDisplay();\n\n      attackPlayer();\n\n      randomOpponent();\n\n      emptyText();\n\n    } else if (btn === btnHeal) { // code de la potion\n\n      padDisplay();\n\n      randomOpponent();\n\n      healPlayer();\n\n      emptyText();\n\n    } else if (btn === btnRun) { // code de la fuite\n      run();\n\n    } else if (btn === btnsound) { // code du son\n      if (music.paused === true) {\n        audioPlay();\n      }\n      else {\n        audioPause();\n      }\n\n    } else if (btn === btnon) { // code de on off\n\n      if (gameOn) {\n        ecranoff.style.display = 'none';\n        gameOn = false;\n        randomBattle();\n      } else {\n        ecranoff.style.display = 'initial';\n        gameOn = true;\n        window.location.reload();\n      }\n\n    } else if (btn === btnrandom) { // code du random battle\n      randomBattle();\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/script/game.js?");

/***/ }),

/***/ "./src/script/instancePokemon.js":
/*!***************************************!*\
  !*** ./src/script/instancePokemon.js ***!
  \***************************************/
/*! exports provided: pokemonTab, randomPokemonPlayer, randomPokemonOpponent, opponent, player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pokemonTab\", function() { return pokemonTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomPokemonPlayer\", function() { return randomPokemonPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomPokemonOpponent\", function() { return randomPokemonOpponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"opponent\", function() { return opponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"player\", function() { return player; });\n/* harmony import */ var _classPokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classPokemon */ \"./src/script/classPokemon.js\");\n\n\nlet carapuce = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Carapuce', '../src/images/backpokemon/carapuce.gif', '../src/images/frontpokemon/carapuce.gif', 300);\n\nlet salameche = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Salameche', '../src/images/backpokemon/salameche.gif', '../src/images/frontpokemon/salameche.gif', 300);\n\nlet pikachu = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Pikachu', '../src/images/backpokemon/pikachu.gif', '../src/images/frontpokemon/pikachu.gif', 300);\n\nlet bulbizarre = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Bulbizarre', '../src/images/backpokemon/bulbizarre.gif', '../src/images/frontpokemon/bulbizarre.gif', 300);\n\nlet herbizarre = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Herbizarre', '../src/images/backpokemon/herbizarre.gif', '../src/images/frontpokemon/herbizarre.gif', 500);\n\nlet reptincel = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Reptincel', '../src/images/backpokemon/reptincel.gif', '../src/images/frontpokemon/reptincel.gif', 500);\n\nlet carabaffe = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Carabaffe', '../src/images/backpokemon/carabaffe.gif', '../src/images/frontpokemon/carabaffe.gif', 500);\n\nlet florizarre = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Florizarre', '../src/images/backpokemon/florizarre.gif', '../src/images/frontpokemon/florizarre.gif', 800);\n\nlet tortank = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Tortank', '../src/images/backpokemon/tortank.gif', '../src/images/frontpokemon/tortank.gif', 800);\n\nlet raichu = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Raichu', '../src/images/backpokemon/raichu.gif', '../src/images/frontpokemon/raichu.gif', 800);\n\nlet dracofeu = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Dracofeu', '../src/images/backpokemon/dracofeu.gif', '../src/images/frontpokemon/dracofeu.gif', 800);\n\nlet bibiche = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Bibiche','../src/images/backpokemon/bibiche.gif','../src/images/frontpokemon/bibiche.gif',800);\n\nlet mewtwo = new _classPokemon__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]('Mewtwo', '../src/images/backpokemon/mewtwo.gif', '../src/images/frontpokemon/mewtwo.gif', 1200);\n\n\nconst pokemonTab = [carapuce, salameche, pikachu, bulbizarre, reptincel, florizarre, tortank, raichu, herbizarre, mewtwo, carabaffe, dracofeu, bibiche];\n\nconst randomPokemonPlayer = pokemonTab[Math.floor(Math.random() * pokemonTab.length)];\nconst randomPokemonOpponent = pokemonTab[Math.floor(Math.random() * pokemonTab.length)];\n\nconst opponent = randomPokemonOpponent;\nconst player = randomPokemonPlayer;\n\n//# sourceURL=webpack:///./src/script/instancePokemon.js?");

/***/ })

/******/ });