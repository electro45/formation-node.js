const nbs = [4, 5, 6];

function doLog(msg) {
  console.log(msg);
}

nbs.forEach(doLog);

// paradigme impératif (style impératif : avec des strunctures if, for)
for (let i = 0; i < nbs.length; i++) {
  const elt = nbs[i];
  if (elt % 2 === 0) {
    console.log(elt);
  }
}

// paradigme functionnelle
nbs
  // .filter(function (elt) { return elt % 2 === 0 })
  .filter(elt => elt % 2 === 0)
  .forEach((nb, i) => console.log(nb, i));


// pile d'apples
// ^
// |                 log  log
// |=> - => - =>     => - =>
// |filter         - forEach
// +---------------------------------------> temps
//                   4     6
