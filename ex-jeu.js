const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

/**
 * Lance le jeu
 * @param {boolean} b
 */
const run = (b) => {
    let aNombres = [];
    if (b) {
        showGame();
    }
    rl.question('Sur combien de chiffres voulez-vous lancer le jeu ? ', (max) => {
        if (isNaN(max)) {
            console.log("Veuillez inscrire un chiffre !");
            run(false);
        } else {
            let nb = getRandomInt(max);
            console.log('debug : ' + nb);

            /**
             * Commence la séquence de question
             * jusqu'a ce que le joueur trouve le chiffre mystère
             */
            function start() {
                rl.question('Choisir un chiffre en 0 et ' + max + ' ? ', (rep) => {
                    if (rep === 'exit') {
                        console.log("\n @ + o_O\n");
                        rl.close();
                    } else {
                        rep = Number(rep);
                        if (isNaN(rep)) {
                            console.log("C'est un nombre");
                            start();
                        } else {
                            console.log("Rappel des chiffres : " + aNombres.join(', '));
                            aNombres.push(rep);

                            // Moins
                            if (rep > nb) {
                                console.log("C'est moins");
                                start();
                            }
                            // Plus
                            if (rep < nb) {
                                console.log("C'est plus");
                                start();
                            }
                            // Gagné
                            if (rep === nb) {
                                console.log("C'est gagné : " + nb);
                                rl.close();
                            }
                        }
                    }
                });
            }
            start();
        }
    });
};

run(true);
