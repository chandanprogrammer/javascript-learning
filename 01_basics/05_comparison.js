/* ------------ Comparison Operators ------------ */

console.log(2 > 8); // Greater than
console.log(2 < 8); // Less than
console.log(2 >= 2); // Greater than or equal to
console.log(2 <= 8); // Less than or equal to
console.log(7 == 7); // Equal to
console.log(2 != 8); // Not equal to
console.log("2" === 2); // strict check means check data-type (good practice)

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

/* ------------ Logical Operators ------------ */

let x = 3;
let y = 5;
console.log(x < y && x == 4); // false
console.log(x < y || x == 3); //true
console.log(!false); // true
console.log(!true); // false

/* 
    --> We also have type and bitwise operators. 
    --> Bitwise operators perform bit by bit operations on numbers. 
*/
