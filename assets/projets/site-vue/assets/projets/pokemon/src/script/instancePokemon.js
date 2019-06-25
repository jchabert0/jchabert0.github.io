import { Pokemon } from "./classPokemon";

let carapuce = new Pokemon('Carapuce', '../src/images/backpokemon/carapuce.gif', '../src/images/frontpokemon/carapuce.gif', 300);

let salameche = new Pokemon('Salameche', '../src/images/backpokemon/salameche.gif', '../src/images/frontpokemon/salameche.gif', 300);

let pikachu = new Pokemon('Pikachu', '../src/images/backpokemon/pikachu.gif', '../src/images/frontpokemon/pikachu.gif', 300);

let bulbizarre = new Pokemon('Bulbizarre', '../src/images/backpokemon/bulbizarre.gif', '../src/images/frontpokemon/bulbizarre.gif', 300);

let herbizarre = new Pokemon('Herbizarre', '../src/images/backpokemon/herbizarre.gif', '../src/images/frontpokemon/herbizarre.gif', 500);

let reptincel = new Pokemon('Reptincel', '../src/images/backpokemon/reptincel.gif', '../src/images/frontpokemon/reptincel.gif', 500);

let carabaffe = new Pokemon('Carabaffe', '../src/images/backpokemon/carabaffe.gif', '../src/images/frontpokemon/carabaffe.gif', 500);

let florizarre = new Pokemon('Florizarre', '../src/images/backpokemon/florizarre.gif', '../src/images/frontpokemon/florizarre.gif', 800);

let tortank = new Pokemon('Tortank', '../src/images/backpokemon/tortank.gif', '../src/images/frontpokemon/tortank.gif', 800);

let raichu = new Pokemon('Raichu', '../src/images/backpokemon/raichu.gif', '../src/images/frontpokemon/raichu.gif', 800);

let dracofeu = new Pokemon('Dracofeu', '../src/images/backpokemon/dracofeu.gif', '../src/images/frontpokemon/dracofeu.gif', 800);

let bibiche = new Pokemon('Bibiche','../src/images/backpokemon/bibiche.gif','../src/images/frontpokemon/bibiche.gif',800);

let mewtwo = new Pokemon('Mewtwo', '../src/images/backpokemon/mewtwo.gif', '../src/images/frontpokemon/mewtwo.gif', 1200);


export const pokemonTab = [carapuce, salameche, pikachu, bulbizarre, reptincel, florizarre, tortank, raichu, herbizarre, mewtwo, carabaffe, dracofeu, bibiche];

export const randomPokemonPlayer = pokemonTab[Math.floor(Math.random() * pokemonTab.length)];
export const randomPokemonOpponent = pokemonTab[Math.floor(Math.random() * pokemonTab.length)];

export const opponent = randomPokemonOpponent;
export const player = randomPokemonPlayer;