function externe(msg) {
    let a = 'a';
    // pour interne, cette portée est une portée de closure
    function interne() {
        // pour interne, cette portée est locale
        // ici on a accès à a et msg
        console.log(msg, a);

    }
    interne();
}

externe('Hello !');

// pile d'apples
// ^
// |
// |log
// |interne
// |externe
// +---------------------------------------> temps
