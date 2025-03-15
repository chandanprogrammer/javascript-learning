/* --------- Arrow Function --------- */

const chaiCode = () => {
  let username = "chandan";
  // console.log(this.username); // undefined
  // console.log(this); // {}
};
// chaiCode();

const addTwoNumber = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwoNumber(4, 7));

const addTwo = (num1, num2) => num1 + num2; // inplict return or one line function
// console.log(addTwo(3, 4));

// const fun = () =>  {username : "ck"}; // undefined

const fun = () => ({ username: "ck" });
// fun();

/* 
  Difference between normal function and arrow function.

  1. syntax --> Both function syntaxes are different. 

  2. 'arguments' keyword --> arguments keyword not defined in arrow function only defined in normal function

  3. hoisting --> normal function is hoisting but arrow function is not hoisting. 

  4. 'this' keyword --> Normal functions have their own this context, which is dynamically determined by how the function is called, but arrow functions do not have this. Instead, they inherit this from their lexical scope (the surrounding function or global context).

*/
