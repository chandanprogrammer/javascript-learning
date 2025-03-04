/* ---------- Prototype ---------- */

/*
  In JavaScript, a prototype is a way for objects to inherit properties and methods from other objects. 
  Every object has a prototype, which is another object. 
  If an object doesn't have a certain property or method, JavaScript will look for it in its prototype, creating a chain until it finds the property or reaches the end of the chain.

  Array.prototype = { .map(), .foeEach(), .... }
  const arr = [1, 6, 8, 3, 9, 6];
  arr.__proto__ = Array.prototype;
  arr.__proto__.map();
  arr.map();

  String.prototype = { }
  const str = 'piyush';
  str.__proto__ = String.prototype;
  str.__proto__.length;
  str.length;

  In str.length ? - not present then search in str.__proto__.length

  Array ke inside me .map function kisne likha?
  --> Browser ne

*/

Object.prototype.chai = function () {
  console.log("chai aur code");
};

const tea = {
  name: "Ice tea lemon",
  type: "cool",
};

tea.chai();

const myTeas = ["lemon tea", "orange tea"];
myTeas.chai(); // because Array ke prototype ke andar Object ka prototype rhta hai to wha se access krta hai

console.log(Array.prototype);

Array.prototype.hacker = function () {
  console.log("You are hacked.");
};

const arr2 = [4, 8, 9, 4, 7];
arr2.hacker();
