(function () {
  'use strict'

  function getRandom() {
    return Math.random();
  }

  const readline = require('readline');

  const random = {
    getArbitrary: (min, max) => {
      return Math.random() * (max - min) + min;
    },
    getInt: (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    getIntInclusive: (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };

  /**
   *
   * @param {number} options.min
   * @param {number} options.max
   */
  function Jeu(options = {}) {
    // const {min: min = 0, max: max = 100} = options;
    const { min = 0, max = 100 } = options;
    // this._min = options.min || 0;
    // this._max = options.max === undefined ? 100 : options.max;
    this._essais = [];
    this._entierAlea = random.getIntInclusive(this._min, this._max);
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  Jeu.prototype.setMin = function (min) {
    this._min = min;
    return this;
  }
  Jeu.prototype.setMax = function (max) {
    this._max = max;
    return this;
  }
  Jeu.prototype.generateNumber = function (typeRandom) {
    this._entierAlea = random[typeRandom](this._min, this._max);
    return this;
  }
  Jeu.prototype.jouer = function () {

    let entierAlea = this._entierAlea;
    let essais = this._essais;
    let rl = this._rl;

    if (essais.length) {
      console.log(`Vous avez déjà joué : ${essais.join(' - ')}`);
    }
    rl.question('Quel est le nombre entier ? ', (answer) => {
      const entierSaisi = parseInt(answer);
      if (isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      essais.push(entierSaisi);

      if (entierSaisi < entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné');
      rl.close();
    });

  }

  const game = new Jeu({
    min: 0,
    max: 100
  })
  game
    .generateNumber('getInt')
    .jouer();

}());
