function externe(msg) {
    let a = 'a';
    // pour interne, cette portée est une portée de closure
    function interne() {
        // pour interne, cette portée est locale
        // ici on a accès à a et msg
        console.log(msg);
    }
    return interne;
}

const helloFct = externe('Hello !');
helloFct();

// pile d'appels
// ^
// |
// |          log
// |externe - interne/helloFct
// +---------------------------------------> temps


for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
// 3 3 3 dans 1s

for (var i = 0; i < 3; i++) {
    setTimeout(externe(i), 1000);
}

// 0 1 2 dans 1s

// Avec let
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
// 0 1 2 dans 1s
