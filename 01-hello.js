const prenoms = [
    'Romain', 'Pierre', 'Jean', 'Robert'
];

/**
 * Affiche Bonjour avec le prénom
 * @param {string} prenom Le prénom de la personne
 * @returns {string} Le message
 */
function hello(prenom) {
    return 'Bonjour ' + prenom;
}

// Boucle pour chaque personne
for (let i = 0; i < prenoms.length; i++) {
    const p = prenoms[i];
    console.log(hello(p));
}
