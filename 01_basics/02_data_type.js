/* ------------ Data Types ------------ */

"use strict"; /* treat all javascript code as newer version. */

// alert("I am alert") /* Error when we use node js, but use in browser not error */

/* 
  code readablity that should be high
  JavaScript is a dynamic typed language, meaning that the type of a variable is assigned at runtime, based on the value of the variable.
*/

/* Premitive Data Type (7 types ) --> set of basic data type in javascript. */

/*
  1. Number
  2. String 
  3. BigInt 
  4. Boolean 
  5. Symbol 
  6. Null
  7. Undefined 
*/

let score = 12; // number
let firstName = "Rahul"; // string
let value = BigInt(19978934937439); // bigint
let isLoggedIn = true; // boolean
let id = Symbol("123"); // symbol (unique)
let temperature = null; // null (standalone value) - but datatype is object
let gameOver = undefined; // undefined (value not assign)

let id1 = Symbol("123");
let id2 = Symbol("123");
console.log(id1 === id2); // false

// const bigInt = 875648545475458474575n // BigInt

/*
  undefined apne aap me undefined type ka hai but null yek object hai 
  Truthy value ---> true, 1
  Falsy value ---> false, 0, -0, 0n, "", null, undefined, NaN
*/

console.log(isLoggedIn + 10); // 11
isLoggedIn = false;
console.log(isLoggedIn + 10); // 10

/* typeof operator */
console.table([
  typeof score,
  typeof firstName,
  typeof value,
  typeof isLoggedIn,
  typeof id,
  typeof temperature,
  typeof gameOver,
]);

/* Non Premitive (Reference) Data Type */

/* Array --> but data type is object */
const student = ["Aman", "Roshan", "Amit"];

/* Object */
const myObj = {
  name: "Aman",
  age: 33,
  skills: ["HTML", "CSS", "JS"],
};

/* function also known as "function object" */
let myFunction = function () {
  console.log("Hello Aman");
};

console.table([
  typeof student /* object */,
  typeof myObj /* object */,
  typeof myFunction /* function but known as function object */,
]);
