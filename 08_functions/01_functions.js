/* -------- Create Function -------- */

/* 
    A function is a set of instructions that can be called independently, while a method is a function that's associated with an object or class 
*/

/* Function definition */
function myFun() {
  console.log("Chandan");
}
// myFun; // Function reference
// myFun(); // Function execution , Function calling

/* value pass as a 'parameter' */
function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

// addTwoNumbers(2, 5); /* value pass as a 'argument' */
// addTwoNumbers(2, "5");
// addTwoNumbers(2, null);
// addTwoNumbers(2, "a");

// const returnfun  = addTwoNumbers(1, 2);
// console.log(returnfun); // undefined because nothing return

function sumTwoNumbers(num1, num2) {
  // const sum = num1 + num2;
  // return sum;
  return num1 + num2;
  // console.log('Unreachable code'); // use before return
}
const returnValue = sumTwoNumbers(1, 2);
// console.log(returnValue);

// function loginUserMessage(username = "defalutValue"){ // defult value
//     return `${username} just logged in`
// }

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("plese enter user name");
    return;
  }
  return `${username} just logged in`;
}
// loginUserMessage("chandan");
// loginUserMessage();
// console.log(loginUserMessage("chandan"));

let globalVariable = "I am global variable";

function modifyGlobal() {
  globalVariable = "I am modified.";
  let blockScopeVariable = "I am blocked-scoped";
  console.log(blockScopeVariable);
}

// console.log(globalVariable);
// modifyGlobal();
// console.log(globalVariable);

const user = {
  username: "chandan",
  price: 999,
  welcomeMessage: function () {
    /* Current contex ke liye "this" keyword use krte hai */
    console.log(`${this.username} , welcome to website. `);
    console.log(this);
  },
};

// user.welcomeMessage();

// console.log(this); /* --> {} empty object in node environment but in browser global object (known as window object) show */

function person1() {
  let username = "chandan";
  console.log(this.username); // undefined
  /* undefined -- Not use "this" keyword, only use "this" keyword in object */
  console.log(this);
  /* When 'this' access inside function then global object show */
}
// person1();
