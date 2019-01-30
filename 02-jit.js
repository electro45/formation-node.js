/* Benchmark */

/**
 * Somme de 2 nombres
 * @param {number} a
 * @param {number} b
 */
function sum(a, b) {
  return a + b;
}

console.time('sum');
sum(1, 2);
console.timeEnd('sum');

console.time('sum');
sum(1, 5);
console.timeEnd('sum');
