const prenoms = [
    'Romain', 'Pierre', 'Jean', 'Robert'
];

function hello(prenom) {
    return 'Bonjour ' + prenom;
}

for (let i = 0; i < prenoms.length; i++) {
    const p = prenoms[i];
    console.log(hello(p));
}
