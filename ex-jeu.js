const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Affichage d'intro du jeu
 */
const showGame = () => {
  console.log('\n**** ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ****');
  console.log('**** Bienvenue sur le chiffre mystère ****');
  console.log('**** ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ****\n');
}

/**
 * Génère un chiffre entre 0 et max
 * @param {number} max
 * @returns {number}
 */
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max) + 1);

/**
 * Liste des nombres déjà testés
 */
let aNombres = [];

/**
 * Lance le jeu
 * @param {boolean} b permet d'afficher l'intro du jeu
 */
const run = (b) => {
  // Lance l'affichage de début du jeu
  if (b) {
    showGame();
  }
  rl.question('Sur combien de chiffres voulez-vous lancer le jeu ? ', (max) => {
    max = parseInt(max);
    if (isNaN(max)) {
      console.log("Veuillez inscrire un chiffre !");
      run(false);
    } else {
      let nb = getRandomInt(max);
      // console.log('debug : ' + nb);
      console.log("\n");
      start(max, nb);
    }
  });
};

/**
 * Commence la séquence de question
 * jusqu'a ce que le joueur trouve le chiffre mystère
 * @param {number} max
 * @param {number} nb
 */
const start = (max, nb) => {
  rl.question('Choisir un chiffre en 0 et ' + max + ' ? ', (rep) => {
    if (rep === 'exit') {
      exitMsg();
      return rl.close();
    }
    rep = parseInt(rep);
    if (isNaN(rep)) {
      console.log("C'est un nombre");
      return start(max, nb);
    }
    console.log("Rappel des chiffres : " + aNombres.join(', '));
    aNombres.push(rep);
    // Moins
    if (rep > nb) {
      console.log("C'est moins");
      return start(max, nb);
    }
    // Plus
    if (rep < nb) {
      console.log("C'est plus");
      return start(max, nb);
    }
    // Gagné
    console.log("C'est gagné : " + nb + "\n");
    rl.question('Recommencer Y/n ? ', (r) => {
      r = r ? r.toUpperCase() : 'Y';
      if (r === 'Y' || r === 'YES') {
        aNombres = [];
        return run(false);
      }
      exitMsg();
      rl.close();
    });
  });
}

const exitMsg = () => console.log("\n @+ o_O\n");

run(true);
