/* ----------- find vs findIndex ----------- */

const numbers = [1, 6, 8, 4, 9, 3, 7];
let ans = numbers.find((num) => num === 4);
let index = numbers.findIndex((num) => num === 4);

console.log(ans);
console.log(index);
