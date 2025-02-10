let score = 99;
console.log(score);

const amount = new Number(100);
console.log(amount); /* defined Number: type specialty in console */

console.log(amount.toString()); // change in string
console.log(amount.toString().length);
console.log(amount.toFixed(2)); // 100.00

const balance = 188.86543;
console.log(balance.toPrecision(3)); // 189
console.log(balance.toPrecision(4)); // 188.9
console.log(balance.toPrecision(2)); // 1.9e+2

const anotherBlance = 100000;
console.log(anotherBlance.toLocaleString('en-IN')); // 1,00,000

// console.log(Number.__proto__);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

